require 'spec_helper'

describe Spree::PaymentProvider do
  let(:payment_provider) { described_class.new }

  describe '#stores' do
    let(:store) { create(:store, payment_providers: [payment_provider]) }

    subject { payment_provider.stores }

    it { is_expected.to contain_exactly(store) }
  end

  describe '#payment_methods' do
    let(:payment_method) { create(:payment_method, payment_provider: payment_provider) }

    subject { payment_provider.payment_methods }

    it { is_expected.to contain_exactly(payment_method) }
  end

  describe '#name' do
    before do
      payment_provider.name = "Payone DE"
    end

    subject { payment_provider.name }

    it { is_expected.to eq("Payone DE") }
  end

  describe '#preference_source' do
    before do
      payment_provider.preference_source = "payone_de"
    end

    subject { payment_provider.preference_source }

    it { is_expected.to eq("payone_de") }
  end

  describe '#preferences' do
    before do
      payment_provider.preferences = {
        username: 'MyUserName',
        password: 'VewySecwet',
        token: 'abcdefg'
      }
    end

    subject { payment_provider.preferences }

    it do
      is_expected.to eq({
        username: 'MyUserName',
        password: 'VewySecwet',
        token: 'abcdefg'
      })
    end
  end


  describe 'delegations to the API gateway', :pending do
    let(:successful_response) { double }
    let(:source) { build_stubbed(:credit_card) }
    let(:gateway) do
      double(
        purchase: successful_response,
        capture: successful_response,
        cancel: successful_response,
        credit: successful_response
      )
    end

    describe '#purchase' do
      subject { payment_provider.purchase(100, source, options) }

      it 'calls the gateway for making the API call' do
        expect(gateway).to receive(:purchase).with(100, source, options).and_return(successful_response)
        subject
      end
    end

    describe '#capture' do
      subject { payment_provider.purchase(100, source, options) }

      it 'calls the gateway for making the API call' do
        expect(gateway).to receive(:purchase).with(100, source, options).and_return(successful_response)
        subject
      end
    end

    describe '#cancel' do
      subject { payment_provider.purchase(100, source, options) }

      it 'calls the gateway for making the API call' do
        expect(gateway).to receive(:purchase).with(100, source, options).and_return(successful_response)
        subject
      end
    end

    describe '#credit' do
      subject { payment_provider.purchase(100, source, options) }

      it 'calls the gateway for making the API call' do
        expect(gateway).to receive(:purchase).with(100, source, options).and_return(successful_response)
        subject
      end
    end
  end
end
