(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{127:function(e,t,n){"use strict";n.r(t);var o=n(0),s=Object(o.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),n("p",[e._v("The "),n("code",[e._v("count_on_hand")]),e._v(" value changes whenever a "),n("router-link",{attrs:{to:"stock-movements.html"}},[e._v("stock movement")]),e._v("\noccurs.  For example, if one unit of a product is sold the "),n("code",[e._v("count_on_hand")]),e._v(" would\ndecrease by one.")],1),e._m(8),e._m(9),e._m(10),n("p",[e._v("See the "),n("router-link",{attrs:{to:"stock-movements.html"}},[e._v("Stock movements")]),e._v(" article for more information.")],1),e._m(11),e._m(12),n("p",[e._v("For example, if a customer orders five backorderable items and its\n"),n("code",[e._v("count_on_hand")]),e._v(" becomes "),n("code",[e._v("-5")]),e._v(", the customer can still check out successfully.\n"),n("router-link",{attrs:{to:"inventory-units.html"}},[e._v("Inventory units")]),e._v(" with the "),n("code",[e._v("state")]),e._v(" value of "),n("code",[e._v("backordered")]),e._v(" are\ncreated for the five items.")],1),e._m(13)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"stock-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stock-items","aria-hidden":"true"}},[this._v("#")]),this._v(" Stock items")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("On-hand inventory is tracked using the "),t("code",[this._v("Spree::StockItem")]),this._v(" model. A stock item\ntracks stock at a single "),t("code",[this._v("Spree::StockLocation")]),this._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you only track stock at one stock location, then every "),n("code",[e._v("Spree::Variant")]),e._v(" in\nyour store has one corresponding "),n("code",[e._v("Spree::StockItem")]),e._v(" object. If you track stock\nat two stock locations, then every "),n("code",[e._v("Spree::Variant")]),e._v(" in your store has "),n("em",[e._v("two")]),e._v("\ncorresponding "),n("code",[e._v("Spree::StockItem")]),e._v("s: one for each "),n("code",[e._v("Spree::StockLocation")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("Spree::StockItem")]),this._v("'s "),t("code",[this._v("count_on_hand")]),this._v(" value that represents the number of\nitems you have in stock.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("Spree::StockItem")]),this._v(" objects have the following attributes:")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("code",[e._v("stock_location_id")]),e._v(": The ID for the "),n("code",[e._v("Spree::StockLocation")]),e._v(" where the stock\nitem is located.")]),n("li",[n("code",[e._v("variant_id")]),e._v(": The ID for the "),n("code",[e._v("Spree::Variant")]),e._v(" that this stock item represents.")]),n("li",[n("code",[e._v("count_on_hand")]),e._v(": The number of units currently in inventory. See "),n("a",{attrs:{href:"#count-on-hand"}},[e._v("Count on\nhand")]),e._v(" for more information.")]),n("li",[n("code",[e._v("backorderable")]),e._v(": Sets whether the stock item should be\n"),n("a",{attrs:{href:"#backorderable-stock-items"}},[e._v("backorderable")]),e._v(".")]),n("li",[n("code",[e._v("deleted_at")]),e._v(": A timestamp that logs when this stock item was deleted from\ninventory. Otherwise, the value is "),n("code",[e._v("nil")]),e._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"count-on-hand"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#count-on-hand","aria-hidden":"true"}},[this._v("#")]),this._v(" Count on hand")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When administrators create a new product using the "),t("code",[this._v("solidus_backend")]),this._v(', they can\nset an initial inventory "Count On Hand" value for the new product.')])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"changing-the-count-on-hand-value"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-count-on-hand-value","aria-hidden":"true"}},[this._v("#")]),this._v(" Changing the count on hand value")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("While a "),t("code",[this._v("Spree::StockMovement")]),this._v(" object logs the increase or decrease of the\n"),t("code",[this._v("count_on_hand")]),this._v(" value, administrators can also edit the count on hand from the\n"),t("code",[this._v("solidus_backend")]),this._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Whenever an administrator updates the count on hand, they are discarding the old\nvalue completely. So, if a stock item's "),n("code",[e._v("count_on_hand")]),e._v(" is "),n("code",[e._v("5")]),e._v(", when the\nadministrator changes the value to "),n("code",[e._v("20")]),e._v(", they are creating a\n"),n("code",[e._v("Spree::StockMovement")]),e._v(" with a value of "),n("code",[e._v("15")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"backorderable-stock-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backorderable-stock-items","aria-hidden":"true"}},[this._v("#")]),this._v(" Backorderable stock items")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If a "),t("code",[this._v("Spree::StockItem")]),this._v(" is "),t("code",[this._v("backorderable")]),this._v(", then customers can continue to order\nit after the product is sold out. When a sold out product continues to sell, the\n"),t("code",[this._v("count_on_hand")]),this._v(" becomes a negative integer.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The "),n("code",[e._v("Spree::Shipment")]),e._v("(s) associated with the backordered items cannot be shipped\nuntil the stock has been replenished. Once the item is in stock again, each\nbackordered inventory unit's "),n("code",[e._v("state")]),e._v(" value is changed from "),n("code",[e._v("backordered")]),e._v(" to\n"),n("code",[e._v("on_hand")]),e._v(" and the shipment becomes shippable.")])}],!1,null,null,null);t.default=s.exports}}]);