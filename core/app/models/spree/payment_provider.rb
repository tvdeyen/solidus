module Spree
  class PaymentProvider < Spree::Base
    has_many :store_payment_providers, class_name: 'Spree::StorePaymentProvider'
    has_many :stores, through: :store_payment_providers
  end
end
