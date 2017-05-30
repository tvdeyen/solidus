require 'spec_helper'

feature "Payment providers configuration", type: :feature do
  let!(:provider) { create(:payment_provider) }

  stub_authorization!

  before do
    visit spree.admin_path
    click_link "Settings"
    click_link "Payments"
    click_link "Payment Providers"
  end

  specify "displays existing payment providers" do
    within('table[data-hook="payment_providers_table"]') do
      expect(all("th")[0].text).to eq("Name")
      expect(page).to have_content provider.name
    end
  end

  specify "admins are able to create a new payment provider" do
    click_link "New Payment Provider"
    expect(page).to have_content("New Payment Provider")
    fill_in "payment_provider_name", with: "PAYDUO"
    click_button "Create"
    expect(page).to have_content("successfully created!")
    within('table[data-hook="payment_providers_table"]') do
      expect(page).to have_content("PAYDUO")
    end
  end

  specify "admins are able to edit an existing payment provider" do
    within('table[data-hook="payment_providers_table"]') do
      click_icon(:edit)
    end

    fill_in "payment_provider_name", with: "PAYTREE"
    click_button "Update"
    expect(page).to have_content("successfully updated!")
    within('table[data-hook="payment_providers_table"]') do
      expect(page).to have_content("PAYTREE")
    end
  end
end
