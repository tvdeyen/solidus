module Spree
  # This class performs a data migration. It's usually run from
  # the `solidus:migrations:create_vat_prices` rake task.
  class PriceMigrator
    # Migrate all variant's prices.
    class << self
      def migrate_default_vat_prices
        # We need to tag the exisiting prices as "default", so that the VatPriceGenerator knows
        # that they include the default zone's VAT.
        Spree::Config.admin_vat_country_iso ||= Spree::Zone.default_tax.countries.first.iso
        # With a default tax zone, all prices include VAT by default. Let's tell them which one!
        Spree::Price.joins(:variant).update_all(country_iso: Spree::Config.admin_vat_country_iso)
        countries = Spree::Country.all
        Spree::Variant.includes(*variant_includes).find_each do |variant|
          Spree::Variant::VatPriceGenerator.new(variant, verbose: !Rails.env.test?, countries: countries).run
          variant.save
        end
        # This line stops all weird code paths that generate refunds from happening.
        Spree::Zone.default_tax.update(default_tax: false)
      end

      private

      def variant_includes
        [
          :prices,
          :default_price,
          {
            tax_category: {
              tax_rates: {
                zone: :countries,
              },
            },
          },
        ]
      end
    end
  end
end
