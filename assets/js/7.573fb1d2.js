(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{119:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"value-added-tax-vat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#value-added-tax-vat","aria-hidden":"true"}},[e._v("#")]),e._v(" Value-added tax (VAT)")]),a("p",[e._v("Many countries have what is referred to as a value-added tax (VAT). When a\ncountry uses VAT, tax is included in the price of each item. This means that\nno additional tax needs to be applied during checkout. However, most tax\njurisdictions still require stores to show the amount of VAT that the customer\npaid.")]),a("p",[e._v("In the admin, the "),a("strong",[e._v("Settings -> Taxes -> Tax Rates")]),e._v(' page allows administrators\nto create any tax rate. They can create VAT-style taxes by using the "Included\nin price" checkbox.')]),a("p",[e._v("Solidus's "),a("code",[e._v("solidus_frontend")]),e._v(" gem lists all of the VAT and other price\nadjustments below the item total on the checkout summary page.")]),a("h2",{attrs:{id:"calculating-vat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calculating-vat","aria-hidden":"true"}},[e._v("#")]),e._v(" Calculating VAT")]),a("p",[e._v("When you set up products in Solidus, you can set the price to the exactly what\nyou want the customer to pay. Then, you can use your VAT-style tax rates to\nallocate a percentage of the gross price to taxes.")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("consumer_price / (1 + tax_rate) = expected_revenue\nconsumer_price - expected_revenue = vat\n")])]),a("p",[e._v("Solidus's "),a("a",{attrs:{href:"https://github.com/solidusio/solidus/blob/master/core/app/models/spree/calculator/default_tax.rb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spree::Calculator::DefaultTax")]),e._v(" handles\nsales tax and VAT. If a tax rate is VAT and should be included in the price, it\ncalculates all of the line items that share that tax rate on the order:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if rate.included_in_price\n  round_to_two_places(line_items_total - ( line_items_total / (1 + rate.amount) ) )\n...\nend\n")])]),a("h3",{attrs:{id:"vat-amounts-are-stored-in-spree-adjustments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vat-amounts-are-stored-in-spree-adjustments","aria-hidden":"true"}},[e._v("#")]),e._v(" VAT amounts are stored in "),a("code",[e._v("Spree::Adjustment")]),e._v("s")]),a("p",[e._v("Note that while VAT does not adjust an order's total, Solidus still creates\n"),a("code",[e._v("Spree::Adjustment")]),e._v(" objects to store tax amount. These objects have an\n"),a("code",[e._v("included")]),e._v(" value of "),a("code",[e._v("true")]),e._v(" so that the tax is not added to the price.")]),a("h2",{attrs:{id:"example-order-with-multiple-vat-rates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-order-with-multiple-vat-rates","aria-hidden":"true"}},[e._v("#")]),e._v(" Example order with multiple VAT rates")]),a("p",[e._v('In the following example, we will still refer to VAT as "adjustments",\nsince that is how Solidus stores the tax amounts.')]),a("p",[e._v("Our United Kingdom-based company is required to follow these tax regulations:")]),a("ul",[a("li",[e._v("Items of clothing should be taxed at a 5% rate.")]),a("li",[e._v("Consumer electronics should be taxed at a 10% rate.")]),a("li",[e._v("We are required to display the VAT paid to the customer.")])]),a("p",[e._v("If a customer orders a single clothing item:")]),a("ul",[a("li",[e._v("A customer within the UK adds one £17.99 t-shirt to their order.")]),a("li",[e._v("The tax calculator calculates the VAT: "),a("code",[e._v("17.99 - (17.99 / (1 + 0.05)) = 0.86")]),e._v(".")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  £17.99 – 1 x T-shirt\n  £0.86 – Clothing tax (5%)\n\n  £17.99 – TOTAL\n")])]),a("p",[e._v("If a customer adds a second clothing item to the order:")]),a("ul",[a("li",[e._v("The customer adds a £19.99 t-shirt to the existing order.")]),a("li",[e._v("The total cost for the two items is £37.98.")]),a("li",[e._v("Because the order only includes clothing items, the included tax is calculated\nas a single adjustment (5%).")]),a("li",[e._v("The tax calculator calculates the VAT: "),a("code",[e._v("37.98 - (37.98 / (1 + 0.05)) = 1.81")]),e._v(".")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  £17.99 – 1 x T-shirt\n  £19.99 – 1 x T-shirt\n  £1.81 – Clothing tax (5%)\n\n  £37.98 – TOTAL\n")])]),a("p",[e._v("If a customer adds a consumer electronics product to the order:")]),a("ul",[a("li",[e._v("The customer adds a £16.99 power adapter to the existing order.")]),a("li",[e._v("The total cost for the three items is £54.97.")]),a("li",[e._v("Because the order includes both clothing items and consumer electronics, the\ntax must be calculated as two adjustments at two different tax rates.")]),a("li",[e._v("The tax calculator calculates the VAT for the clothing items: "),a("code",[e._v("37.98 - (37.98 / (1 + 0.05)) = 1.81")]),e._v(".")]),a("li",[e._v("The tax calculator calculates the VAT for the consumer electronics item:\n"),a("code",[e._v("16.99 - (16.99 / (1 + 0.10)) = 1.54")]),e._v(".")])]),a("p",[e._v("We can now show the display the final included VAT in the price when the\nUK-based customer arrives at the checkout summary page:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  £17.99 – 1 x T-shirt\n  £19.99 – 1 x T-shirt\n  £16.99 – 1 x Power adapter\n   £1.81 – Clothing tax (5%)\n   £1.54 – Consumer electronics tax (10%)\n  \n  £54.97 – TOTAL\n")])])])}],!1,null,null,null);t.default=r.exports}}]);