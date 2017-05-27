class AddProviderIdToSpreePaymentMethods < ActiveRecord::Migration[5.0]
  def change
    add_reference :spree_payment_methods, :payment_provider,
      foreign_key: {to_table: :spree_payment_providers}
  end
end
