class MovePaymentMethodPreferencesToPaymentProvider < ActiveRecord::Migration[5.0]
  def up
    Spree::PaymentMethod.all.each do |payment_method|
      next if payment_method.payment_provider_id.present?

      provider = payment_method.build_payment_provider(name: "#{payment_method.name} Provider")

      provider.preference_source = payment_method.preference_source
      if payment_method.preferences.present?
        provider.preferences = {credentials: payment_method.preferences}
      end

      provider.save!
    end
  end

  def down
    Spree::PaymentMethod.all.each do |payment_method|
      next if payment_method.provider_id.blank?

      provider = Spree::PaymentProvider.find(payment_method.payment_provider_id)

      payment_method.preference_source = provider.preference_source
      payment_method.preferences = provider.preferences[:credentials]

      payment_method.save!
    end
  end
end
