(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{93:function(e,t,n){"use strict";n.r(t);var i=n(0),o=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"inventory-units"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inventory-units","aria-hidden":"true"}},[e._v("#")]),e._v(" Inventory units")]),n("p",[e._v("A "),n("code",[e._v("Spree::InventoryUnit")]),e._v(" object is created every time that an item is sold.\nIt tracks a sold item as it changes location: from being a sold item waiting in the\nwarehouse to be shipped, to being a shipped item (or potentially a returned item).")]),n("p",[e._v("Note that the "),n("code",[e._v("Spree::InventoryUnit")]),e._v(" tracks an item as an object associated with\na "),n("code",[e._v("Spree::Order")]),e._v(", a "),n("code",[e._v("Spree::Shipment")]),e._v(" and a specific "),n("code",[e._v("Spree::LineItem")]),e._v(". This\nallows you to more closely track the status of an order and the line items and\nshipments associated with it.")]),n("p",[e._v("A "),n("code",[e._v("Spree::InventoryUnit")]),e._v(" object has the following attributes:")]),n("ul",[n("li",[n("code",[e._v("state")]),e._v(": The current state of the inventory unit. The state value can be\n"),n("code",[e._v("on_hand")]),e._v(", "),n("code",[e._v("backordered")]),e._v(", "),n("code",[e._v("shipped")]),e._v(", or "),n("code",[e._v("returned")]),e._v(".")]),n("li",[n("code",[e._v("variant_id")]),e._v(": The ID for the "),n("code",[e._v("Spree::Variant")]),e._v(" corresponding with the inventory\nunit that has been sold.")]),n("li",[n("code",[e._v("shipment_id")]),e._v(": The ID for the "),n("code",[e._v("Spree::Shipment")]),e._v(" that the inventory unit is\nbeing shipped in.")]),n("li",[n("code",[e._v("pending")]),e._v(": Documents whether the current unit is pending or finalized. If\n"),n("code",[e._v("true")]),e._v(", the stock for this unit has not yet been allocated to a shipment. If\n"),n("code",[e._v("false")]),e._v(", the stock has been finalized and is no longer tracked in the\n"),n("code",[e._v("Spree::StockItem")]),e._v("'s "),n("code",[e._v("count_on_hand")]),e._v(" value.")]),n("li",[n("code",[e._v("line_item_id")]),e._v(": The ID for the "),n("code",[e._v("Spree::LineItem")]),e._v(" that the inventory unit\ncorresponds with.")]),n("li",[n("code",[e._v("carton_id")]),e._v(": The ID for the "),n("code",[e._v("Spree::Carton")]),e._v(" that the inventory unit belongs\nto.")])])])}],!1,null,null,null);t.default=o.exports}}]);