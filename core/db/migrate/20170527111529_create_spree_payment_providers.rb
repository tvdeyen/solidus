class CreateSpreePaymentProviders < ActiveRecord::Migration[5.0]
  def change
    create_table :spree_payment_providers do |t|
      t.string :name
      t.text :preferences
      t.string :preference_source

      t.timestamps
    end
  end
end
