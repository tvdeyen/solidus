require 'factory_girl'

FactoryGirl.define do
  factory :payment_provider, class: Spree::PaymentProvider do
    name 'Solid US Payments Inc.'
  end
end
