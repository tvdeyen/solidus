require 'spec_helper'

RSpec.describe Spree::StorePaymentProvider, type: :model do
  let(:store) { create(:store) }

  let(:payment_provider) { Spree::PaymentProvider.new }

  it 'belongs to a store' do
    expect(described_class.new(store: store).store).to eq(store)
  end

  it 'belongs to a payment provider' do
    expect(described_class.new(payment_provider: payment_provider).payment_provider).
      to eq(payment_provider)
  end
end
