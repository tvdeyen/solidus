class CreateSpreeStorePaymentProviders < ActiveRecord::Migration[5.0]
  def change
    create_table :spree_store_payment_providers do |t|
      t.references :store, foreign_key: {to_table: :spree_stores}
      t.references :payment_provider, foreign_key:  {to_table: :spree_payment_providers}

      t.timestamps
    end
  end
end
