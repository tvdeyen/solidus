module Spree
  class Variant
    # This class generates gross prices for all countries that have VAT configured.
    # The prices will include their respective VAT rates. It will also generate an
    # export (net) price for any country that doesn't have VAT.
    # @example
    #   The admin is configured to show German gross prices
    #   (Spree::Config.admin_vat_country_iso == "DE")
    #
    #   There is VATs configured for Germany (19%) and Finland (24%).
    #   The VAT price generator is run on a variant with a base (German) price of 10.00.
    #   The Price Generator will generate:
    #     - A price for Finland (country_id == "FI"): 10.42
    #     - A price for any other country (country_id == nil): 8.40
    #
    class VatPriceGenerator
      attr_reader :variant, :verbose, :countries

      def initialize(variant, verbose: false, countries: Spree::Country.all)
        @variant = variant
        @verbose = verbose
        @countries = countries.to_a
      end

      def run
        puts "\n= Migrating vat prices for #{variant.sku.presence || variant.name.presence || variant.id}" if verbose

        # Early return if there is no VAT rates in the current store.
        if !variant.tax_category || variant_vat_rates.empty?
          puts "• No tax category or tax rates found. Skipping" if verbose
          return
        end

        country_isos_requiring_price.each do |country_iso|
          # Don't re-create the default price
          next if variant.default_price && variant.default_price.country_iso == country_iso

          if variant.default_price.nil?
            puts "• No default price found. Skipping" if verbose
            next
          end

          currency = variant.default_price.currency
          if variant.prices.any? { |p| p.country_iso == country_iso && p.currency == currency }
            puts "• Already has price for #{country_iso || "all"} in #{currency}. Skipping" if verbose
            next
          end

          amount = variant.default_price.net_amount * (1 + vat_for_country_iso(country_iso))
          puts "√ Set price for #{country_iso || "all"} to #{currency} #{"%.2f" % amount.round(2)}" if verbose
          variant.prices.build(
            country_iso: country_iso,
            currency: currency,
            amount: amount,
          )
        end
      end

      private

      # nil is added to the array so we always have an export price.
      def country_isos_requiring_price
        return [nil] unless variant.tax_category

        [nil] + variant_vat_rates.map(&:zone).flat_map(&:countries).flat_map(&:iso)
      end

      def vat_for_country_iso(country_iso)
        return 0.0 if !variant.tax_category || country_iso.nil?

        country = countries.find { |c| c.iso == country_iso }
        variant_vat_rates.select do |tax_rate|
          tax_rate.zone.countries.any? do |zone_country|
            zone_country.id == country.id
          end
        end.sum(&:amount)
      end

      def variant_vat_rates
        @variant_vat_rates ||= variant.tax_category.tax_rates.select(&:included_in_price).reject do |rate|
          rate.amount.zero?
        end
      end
    end
  end
end
