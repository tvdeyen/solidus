(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{87:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"order-state-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-state-machine","aria-hidden":"true"}},[e._v("#")]),e._v(" Order state machine")]),a("p",[e._v("Orders flow through a state machine, which is defined in the\n"),a("code",[e._v("Spree::Order::Checkout")]),e._v(" module. It begins with a "),a("code",[e._v("cart")]),e._v(" state and ends with\nat a "),a("code",[e._v("complete")]),e._v(" state.")]),a("p",[e._v("There are six order states by default:")]),a("ol",[a("li",[a("code",[e._v("cart")])]),a("li",[a("code",[e._v("address")])]),a("li",[a("code",[e._v("delivery")])]),a("li",[a("code",[e._v("payment")])]),a("li",[a("code",[e._v("confirm")])]),a("li",[a("code",[e._v("complete")])])]),a("p",[e._v("If you go through the checkout provided in the "),a("code",[e._v("solidus_frontend")]),e._v(" gem, you can\nsee that there is a clearly defined step for each of these states during checkout.")]),a("p",[e._v("The "),a("code",[e._v("payment")]),e._v(" state is optional and it's only triggered if "),a("code",[e._v("payment_required?")]),e._v("\nreturns "),a("code",[e._v("true")]),e._v(".")]),a("p",[e._v("The "),a("code",[e._v("complete")]),e._v(" state is triggered in one of two ways:")]),a("ol",[a("li",[e._v("No payment is required on the order. (The "),a("code",[e._v("total")]),e._v(" equals "),a("code",[e._v("0")]),e._v(".)")]),a("li",[e._v("Payment is required on the order, and at least the order total has been\nreceived as payment.")])]),a("h2",{attrs:{id:"state-criteria"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-criteria","aria-hidden":"true"}},[e._v("#")]),e._v(" State criteria")]),a("p",[e._v("Each order state has criteria that must be met before the state can change. For\nexample, before the state can change from "),a("code",[e._v("cart")]),e._v(" to "),a("code",[e._v("address")]),e._v(", line items must be\npresent on the order. Then, to change from "),a("code",[e._v("address")]),e._v(" to "),a("code",[e._v("delivery")]),e._v(", the user\nmust have a default address assigned.")]),a("p",[e._v("Once an order meets the criteria to go to the next state, you can call "),a("code",[e._v("next")]),e._v(" on\nthe order object to transition into the next state. For example, in the\n"),a("code",[e._v("solidus_frontend")]),e._v(" gem, the "),a("a",{attrs:{href:"https://github.com/solidusio/solidus/blob/master/frontend/app/controllers/spree/checkout_controller.rb",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Spree::CheckoutController")])]),e._v("\ndefines a "),a("code",[e._v("transition_forward")]),e._v(" method that always calls "),a("code",[e._v("next")]),e._v(" unless the order\ncan be completed:")]),a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{attrs:{class:"token comment"}},[e._v("# /frontend/app/controllers/spree/checkout_controller.rb")]),e._v("\n"),a("span",{attrs:{class:"token keyword"}},[e._v("def")]),e._v(" transition_forward\n  "),a("span",{attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{attrs:{class:"token variable"}},[e._v("@order")]),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),e._v("can_complete"),a("span",{attrs:{class:"token operator"}},[e._v("?")]),e._v("\n    "),a("span",{attrs:{class:"token variable"}},[e._v("@order")]),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),e._v("complete\n  "),a("span",{attrs:{class:"token keyword"}},[e._v("else")]),e._v("\n    "),a("span",{attrs:{class:"token variable"}},[e._v("@order")]),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{attrs:{class:"token keyword"}},[e._v("next")]),e._v("\n  "),a("span",{attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n"),a("span",{attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n")])]),a("p",[e._v("If "),a("code",[e._v("next")]),e._v(" returns "),a("code",[e._v("false")]),e._v(", then the order does not meet the criteria and does\nnot transition to the next state.")]),a("h2",{attrs:{id:"payments-and-shipments-have-their-own-state-machines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payments-and-shipments-have-their-own-state-machines","aria-hidden":"true"}},[e._v("#")]),e._v(" Payments and shipments have their own state machines")]),a("p",[e._v("Note that a "),a("code",[e._v("Spree::Order")]),e._v(" with the state "),a("code",[e._v("complete")]),e._v(" does not mean that the\npayment has been processed or the order shipments have been shipped. See also the\nvalues of the "),a("code",[e._v("payment_state")]),e._v(" and "),a("code",[e._v("shipment_state")]),e._v(" attributes.")])])}],!1,null,null,null);t.default=r.exports}}]);