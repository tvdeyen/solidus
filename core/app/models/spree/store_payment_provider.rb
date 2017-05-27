module Spree
  class StorePaymentProvider < ApplicationRecord
    belongs_to :store, class_name: 'Spree::Store'
    belongs_to :payment_provider, class_name: 'Spree::PaymentProvider'
  end
end
