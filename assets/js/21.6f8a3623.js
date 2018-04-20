(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{59:function(e,t,r){"use strict";r.r(t);var n=r(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),r("p",[e._v("A "),r("code",[e._v("Spree::ReturnAuthorization")]),e._v(" allows you to authorize the return of any part of\na customer's order. A return authorization can only be created for shipments\nthat have already been shipped. For each item in a return authorization, a\n"),r("router-link",{attrs:{to:"return-items.html"}},[r("code",[e._v("Spree::ReturnItem")])]),e._v(" is created.")],1),e._m(1),e._m(2),r("p",[e._v("Once an RMA has been created, store administrators can add any item listed in\nthe RMA to a new "),r("router-link",{attrs:{to:"customer-returns.html"}},[r("code",[e._v("Spree::CustomerReturn")])]),e._v(".")],1),e._m(3),e._m(4),r("p",[e._v("RMAs begin the larger customer return process. Note that there are many ways\nthat the administrator could provide compensation to a customer.")]),e._m(5),r("p",[e._v("The RMA creation process typically includes the following steps:")]),e._m(6),e._m(7)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"return-authorizations-rmas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#return-authorizations-rmas","aria-hidden":"true"}},[this._v("#")]),this._v(" Return authorizations (RMAs)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('Return authorizations are also referred to as "return\nmerchandise authorizations" (RMAs) in the '),t("code",[this._v("solidus_backend")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After an order is shipped, administrators can approve the return of any part\nof an order in the "),t("code",[this._v("solidus_backend")]),this._v(" (from the "),t("strong",[this._v("Orders -> Order -> RMA")]),this._v(" page).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A "),t("code",[this._v("Spree::ReturnAuthorization")]),this._v(" object has the following attributes:")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("code",[e._v("number")]),e._v(": The number assigned to the return authorization. It begins with an\n"),r("code",[e._v("R")]),e._v(" and is followed by ten-digits ("),r("code",[e._v("RA338330715")]),e._v(").")]),r("li",[r("code",[e._v("state")]),e._v(": The state of the return authorization. The state can be "),r("code",[e._v("authorized")]),e._v("\nor "),r("code",[e._v("cancelled")]),e._v(".")]),r("li",[r("code",[e._v("order_id")]),e._v(": The ID of the "),r("code",[e._v("Spree::Order")]),e._v(" associated with this return\nauthorization.")]),r("li",[r("code",[e._v("memo")]),e._v(": An administrative note regarding the authorization.")]),r("li",[r("code",[e._v("stock_location_id")]),e._v(": The "),r("code",[e._v("Spree::StockLocation")]),e._v(" associated with this return\nauthorization.")]),r("li",[r("code",[e._v("return_reason_id")]),e._v(": The ID for the "),r("code",[e._v("Spree::ReturnReason")]),e._v(" associated with this\nreturn authorization.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"return-authorization-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#return-authorization-flow","aria-hidden":"true"}},[this._v("#")]),this._v(" Return authorization flow")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",[r("li",[e._v("The administrator presses the "),r("strong",[e._v("New RMA")]),e._v(" button (on the backend's "),r("strong",[e._v("Orders\n-> Order -> RMA")]),e._v(" page).")]),r("li",[e._v("They select the items on the order that are being returned.")]),r("li",[e._v("For each item selected, they choose the following optional values:\n"),r("ul",[r("li",[e._v("They choose a reimbursement type (if applicable). For example: store credit.")]),r("li",[e._v("They choose an exchange item (if applicable).")]),r("li",[e._v('They choose a reason for the return authorization for the item (if\napplicable). For example: "Damaged/Defective".')])])]),r("li",[e._v("They choose a stock location that the return is authorized to be shipped to.")]),r("li",[e._v("They write a memo that documents why the return authorization is being\ncreated.")]),r("li",[e._v("Once the new RMA form is completed, they press the "),r("strong",[e._v("Create")]),e._v(" button and\ngenerate a new "),r("code",[e._v("Spree::ReturnAuthorization")]),e._v(" object.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After the customer has mailed their returns back, the administrator can mark\nthe customer return as received (on the backend's "),t("strong",[this._v("Orders -> Order -> Customer\nReturns")]),this._v(" page).")])}],!1,null,null,null);t.default=a.exports}}]);