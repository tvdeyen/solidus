(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{88:function(t,e,a){"use strict";a.r(e);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"display-total-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-total-methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Display total methods")]),a("p",[t._v("The "),a("code",[t._v("Spree::Order")]),t._v(" model includes a number of useful methods for displaying\ntotals and balances:")]),a("ul",[a("li",[a("code",[t._v("display_outstanding_balance")]),t._v(": The outstanding balance for the order, calculated by\ntaking the "),a("code",[t._v("total")]),t._v(" and subtracting the current "),a("code",[t._v("payment_total")]),t._v(".")]),a("li",[a("code",[t._v("display_item_total")]),t._v(": The total of the line items on the order.")]),a("li",[a("code",[t._v("display_adjustment_total")]),t._v(": The total of the adjustments on the order.")]),a("li",[a("code",[t._v("display_total")]),t._v(": The order total.")]),a("li",[a("code",[t._v("display_total_available_store_credit")]),t._v(": The total available store credit.")]),a("li",[a("code",[t._v("display_order_total_after_store_credit")]),t._v(": The order total after store credit\nhas been applied.")]),a("li",[a("code",[t._v("display_store_credit_remaining_after_capture")]),t._v(": The amount of store credit\nremaining after an order payment has been captured.")])]),a("p",[t._v("By default, the following methods return "),a("code",[t._v("Spree::Money")]),t._v(" objects configured with\nthe order's currency symbol. For example:")]),a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{attrs:{class:"token variable"}},[t._v("@order")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display_total"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_html \n"),a("span",{attrs:{class:"token comment"}},[t._v('# => "$10.99"')]),t._v("\n")])]),a("p",[t._v("Because "),a("code",[t._v("Spree::Money")]),t._v(" objects are based on the "),a("a",{attrs:{href:"https://github.com/RubyMoney/money",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ruby Money\nlibrary")]),t._v(", you can further change what information is displayed using\nits "),a("a",{attrs:{href:"http://www.rubydoc.info/gems/money/Money/Formatting",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("format")])]),t._v(" method:")]),a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{attrs:{class:"token variable"}},[t._v("@order")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display_total"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("format")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("with_currency"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('# => "$10.99 USD"')]),t._v("\n")])])])}],!1,null,null,null);e.default=o.exports}}]);