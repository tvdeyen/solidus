(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{118:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("Using adjustments helps account for some of the complexities of tax, especially\nif a store sells internationally:")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),a("p",[t._v("By default, new products do not have a set tax category. Administrators can set\nthe tax category while creating the product or set it later while editing the\nproduct.")]),t._m(7),a("p",[t._v("Tax rates define the amount of tax that should be charged on items. You might\nconfigure different tax rates for different zones and tax categories, or even\nfor specific dates. You could also create more complex tax rates with a custom\ntax calculator.")]),a("p",[t._v("In Solidus, a tax rate consists of at least four values:")]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),a("p",[t._v("Note that you can only trust the tax address it is has a country. The other\naddress fields might be empty or raise errors.")]),t._m(16),t._m(17),a("p",[t._v("Solidus's models support both types of taxes. In the case of a product or\nshipment:")]),a("ul",[t._m(18),a("li",[a("strong",[t._v("Value-added tax (VAT)")]),t._v(" is calculated as "),a("em",[t._v("included")]),t._v(" in the listed price.\nSolidus lists all VAT amounts below the item total on checkout summary pages.\nFor more information about VAT, see "),a("router-link",{attrs:{to:"value-added-tax.html"}},[t._v("Value-added tax (VAT)")]),t._v(".")],1)]),t._m(19),a("p",[t._v("Note that sales tax in the United States can get exceptionally complex. Each\nstate, county, and municipality might have a different tax rate.")]),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),a("p",[t._v("Every time an order is changed, the taxation system checks whether tax\nadjustments need to be changed and updates all of the taxation-relevant totals.")]),t._m(26)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"overview-of-taxation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview-of-taxation","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview of taxation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Solidus's taxation system supports both sales- and VAT-style taxes. You can use\ntax rates, tax categories, and the built-in tax calculator to handle your\nstore's tax logic. Solidus uses the "),e("code",[this._v("Spree::Adjustment")]),this._v(" model to apply taxes to\norders. This way, there can be multiple tax adjustments applied to each order.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Orders may include products with different tax categories or rates.")]),e("li",[this._v("Shipments may require special calculations if you are shipping to or from\nlocations where there are specific taxation rules for shipments.")]),e("li",[this._v("Taxes may or may not be included in a product's price price depending on a\ncountry's taxation rules.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Solidus uses the "),e("code",[this._v("Spree::TaxCategory")]),this._v(" and "),e("code",[this._v("Spree::TaxRate")]),this._v(" models to specify the\nrules for how tax adjustments are calculated. Tax adjustments are created for\neach line item in an order.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("See the "),e("a",{attrs:{href:"#order-taxation"}},[this._v("Order taxation")]),this._v(" section for an overview of the order\ntaxation process.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"tax-categories"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tax-categories","aria-hidden":"true"}},[this._v("#")]),this._v(" Tax categories")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Tax categories can be used to ensure particular products are taxed as required.\nFor example, if your business is based in Minnesota, you need to charge tax on\ntech products but do not need to charge tax on clothing. You could set up two\ntax categories, "),e("strong",[this._v("Clothing")]),this._v(" and "),e("strong",[this._v("Tech")]),this._v(" which you would apply to products of\neither type.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"tax-rates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tax-rates","aria-hidden":"true"}},[this._v("#")]),this._v(" Tax rates")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v('The descriptive name for the tax rate. For example, "Minnesota Sales Tax" for\na Minnesota state tax rate.')]),e("li",[this._v("The zone that the tax rate should apply to. ")]),e("li",[this._v("The rate (in the form of a percentage of the price).")]),e("li",[this._v('The "Included in price" boolean. This indicates whether the tax is included in\nthe price (for value-added taxes) or added to the price (U.S. taxes).')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Solidus calculates tax based on the matching tax rate(s) for the order's "),e("a",{attrs:{href:"#tax-addresses"}},[this._v("tax\naddress")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"tax-addresses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tax-addresses","aria-hidden":"true"}},[this._v("#")]),this._v(" Tax addresses")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If an order's "),e("code",[this._v("tax_address")]),this._v(" falls within a specific zone, the tax rates that you\nhave configured would apply for all the line items and shipments in that zone\nthat have a matching tax category.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("By default, the "),e("code",[this._v("tax_address")]),this._v(" used for orders is the customer's shipping\naddress. This is how most tax jurisdictions require taxes to be calculated.\nHowever, you can configure your store to globally use customer billing\naddresses instead in any initializer file inside the "),e("code",[this._v("config/initializers/")]),this._v("\ndirectory:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{attrs:{class:"token constant"}},[t._v("Spree")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token constant"}},[t._v("Config")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token symbol"}},[t._v(":tax_using_ship_address")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("true")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"use-spree-taxlocation-as-the-tax-address"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-spree-taxlocation-as-the-tax-address","aria-hidden":"true"}},[this._v("#")]),this._v(" Use "),e("code",[this._v("Spree::TaxLocation")]),this._v(" as the tax address")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("An order's "),a("code",[t._v("tax_address")]),t._v(" can – through "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Duck_typing",target:"_blank",rel:"noopener noreferrer"}},[t._v("duck typing")]),t._v(" – be a\n"),a("code",[t._v("Spree::TaxLocation")]),t._v(" instead of the shipping address. The tax location is\ncomputed from the store's "),a("code",[t._v("Spree.config.cart_tax_country_iso")]),t._v(" setting.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"sales-tax-and-value-added-tax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sales-tax-and-value-added-tax","aria-hidden":"true"}},[this._v("#")]),this._v(" Sales tax and value-added tax")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In ecommerce, "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Consumption_tax",target:"_blank",rel:"noopener noreferrer"}},[this._v("consumption tax")]),this._v(" either takes the form of sales\ntax or value-added tax. Some countries use other names for their taxes, but\ngenerally all modern consumption taxes would be considered one of these two\ntypes.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("Sales tax")]),this._v(" is calculated as "),e("em",[this._v("additional")]),this._v(" taxes on top of the listed price.\n(U.S.-style taxation.)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"tax-in-the-united-states"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tax-in-the-united-states","aria-hidden":"true"}},[this._v("#")]),this._v(" Tax in the United States")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("If you intend to ship products between states, and your store is based in the\nUnited States, we recommend that you use an external service like\n"),a("a",{attrs:{href:"https://www.avalara.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Avatax")]),t._v(" or "),a("a",{attrs:{href:"https://taxcloud.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tax Cloud")]),t._v(" to automate your U.S. tax rates.\nSolidus has extensions for both of these services:\n"),a("a",{attrs:{href:"https://github.com/boomerdigital/solidus_avatax_certified",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("solidus_avatax_certified")])]),t._v(" and\n"),a("a",{attrs:{href:"https://github.com/solidusio-contrib/solidus_tax_cloud",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("solidus_tax_cloud")])]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"order-taxation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order-taxation","aria-hidden":"true"}},[this._v("#")]),this._v(" Order taxation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Once the order has a "),e("code",[this._v("tax_address")]),this._v(" specified, tax can be calculated for all of\nthe line items and shipments associated with a "),e("code",[this._v("Spree::Order")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Note that any promotional adjustments are applied before tax adjustments. This\nis to comply with tax regulations for value-added taxation "),e("a",{attrs:{href:"https://www.gov.uk/vat-businesses/discounts-and-free-gifts#1",target:"_blank",rel:"noopener noreferrer"}},[this._v("as outlined by the\nGovernment of the United Kingdom")]),this._v(" and for sales tax "),e("a",{attrs:{href:"http://www.boe.ca.gov/formspubs/pub113/",target:"_blank",rel:"noopener noreferrer"}},[this._v("as\noutlined by the California State Board of Equalization")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("Solidus iterates over all of the order's line items. It selects the\ntax rates that match each item's tax category.")]),a("li",[t._v("For each line item, the tax rate (a percentage value) is multiplied with the\nitem's "),a("code",[t._v("amount")]),t._v(" value. ("),a("code",[t._v("price ✕ quantity ➖ promotions")]),t._v(".)")]),a("li",[t._v("The calculated amounts are stored in a "),a("code",[t._v("Spree::Adjustment")]),t._v(" object that is\nassociated with the order's ID.")]),a("li",[t._v("The line item's "),a("code",[t._v("included_tax_total")]),t._v(" or "),a("code",[t._v("additional_tax_total")]),t._v(" are updated.\n(If the "),a("code",[t._v("Spree::TaxRate")]),t._v("'s "),a("code",[t._v("included_in_price")]),t._v(" value is set to "),a("code",[t._v("true")]),t._v(",\nSolidus uses the "),a("code",[t._v("included_tax_total")]),t._v(" column to store the sum of VAT-style\ntaxes. Otherwise, it uses the "),a("code",[t._v("additional_tax_total")]),t._v(" to store the sum of\nsales tax-style taxes.)")]),a("li",[t._v("The same process is executed on the order's "),a("code",[t._v("Spree::Shipments")]),t._v(".")]),a("li",[t._v("The sum of the "),a("code",[t._v("included_tax_total")]),t._v(" and "),a("code",[t._v("additional_tax_total")]),t._v(" on all line\nitems and shipments a stored in the order's "),a("code",[t._v("included_tax_total")]),t._v(" and\n"),a("code",[t._v("additional_tax_total")]),t._v(" values.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("included_tax_total")]),this._v(" column does not affect the order's total, while the\n"),e("code",[this._v("additional_tax_total")]),this._v(" does.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("See the "),e("a",{attrs:{href:"https://github.com/solidusio/solidus/blob/master/core/spec/models/spree/tax/taxation_integration_spec.rb",target:"_blank",rel:"noopener noreferrer"}},[this._v("taxation integration spec")]),this._v(" for more information on\nSolidus's taxation system.")])}],!1,null,null,null);e.default=r.exports}}]);