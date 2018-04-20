(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{68:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v('For example, if you sell a red mug and a green mug that have many other\nproperties in common, you could create a single product ("Mug") with two\nvariants.')]),t._m(2),t._m(3),a("p",[t._v("Variants are used to define properties that are specific to the variant:")]),a("ul",[t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),a("li",[a("code",[t._v("tax_category_id")]),t._v(": Overrides the product's tax category for this variant.\nSee the "),a("router-link",{attrs:{to:"../taxation/overview-of-taxation.html#tax-categories"}},[t._v("Taxation")]),t._v(" documentation for more information.")],1)]),t._m(9),a("p",[t._v("In order to create variants, you need to create option types and option values:")]),t._m(10),t._m(11),t._m(12),t._m(13),a("p",[t._v("When additional variants are created, they inherit the properties of the master\nvariant until their own distinct properties are set.")]),t._m(14),t._m(15),t._m(16),a("p",[t._v('The master variant should be a generic template for all of your additional\nvariants. If your product has "Color" and "Size" options, the master variant\nwould not have a color or a size associated with it. If all of your variants are\nsold at the same price, however, you may want to assign a price to your master\nvariant. See the table below for an example:')]),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),a("p",[t._v("Product images link to variants via the "),a("code",[t._v("Spree::Image")]),t._v(" model. For more\ninformation about images, see the "),a("router-link",{attrs:{to:"product-images.html"}},[t._v("product images")]),t._v(" article.")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"variants"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variants","aria-hidden":"true"}},[this._v("#")]),this._v(" Variants")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Spree:Variant")]),this._v("s track the distinct properties of multiple similar products that\nyou sell.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('Your "Mug" product requires an '),e("a",{attrs:{href:"#option-types"}},[this._v("option type")]),this._v(' of "Color". Then,\nyour "Color" option type requires two possible option values ("Red" and\n"Green"). Both the red and green variants can each have their own price,\ndimensions, and other properties.')])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Line items use a "),e("code",[this._v("variant_id")]),this._v(" to associate a variant with an order. So, every\nproduct has at least one "),e("code",[this._v("Spree::Variant")]),this._v(", which is also the "),e("a",{attrs:{href:"#master-variants"}},[this._v("master\nvariant")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("code",[t._v("weight")]),t._v(", "),a("code",[t._v("height")]),t._v(", "),a("code",[t._v("width")]),t._v(", and "),a("code",[t._v("depth")]),t._v(": Sets unique dimensions or weight for\na variant.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("cost_currency")]),this._v(": Set an alternative currency for your variant.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("cost_price")]),this._v(": Sets the manufacturing cost for the variant (for internal use).")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("code",[t._v("position")]),t._v(": Sets the variant's position in the list of variants. For example,\nif there are two variants the position could be "),a("code",[t._v("1")]),t._v(" or "),a("code",[t._v("2")]),t._v(". (Administrators\ncan set positions by drag-and-dropping any variant in the list of variants on\na product's "),a("strong",[t._v("Variants")]),t._v(" tab.)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("track_inventory")]),this._v(": Set whether inventory should or should not be tracked for\nthis variant. ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"option-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#option-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Option types")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("The product needs to have at least one "),e("code",[this._v("Spree::OptionType")]),this._v(' assigned to it. For\nexample, if you intend to offer a product in multiple colors, you could create\na "Color" option type.')]),e("li",[this._v("The option type requires at least one associated "),e("code",[this._v("Spree::OptionValue")]),this._v(' to be\nused. For example, your "Color" option type might have ten or one hundred\noption values.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Administrators are able to create option types and associated option values in\nthe backend (from the "),e("strong",[this._v("Products -> Option Types")]),this._v(" page). Then, when they add or\nedit products, they can add available option types to the product and option\nvalues to each variant.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"master-variants"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#master-variants","aria-hidden":"true"}},[this._v("#")]),this._v(" Master variants")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Every product has a master variant. By default, the master variant is the first\nvariant created for a product. For example, when an administrator creates a new\nproduct using the "),e("code",[this._v("solidus_backend")]),this._v(" interface, they are also creating the\nproduct's master variant.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The master variant is used by "),e("code",[this._v("Spree::LineItem")]),this._v("s in two different ways:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("If the master variant is the product's only variant or configured, then the\nmaster variant is the variant that is associated with the line item. This\nmeans that the line item uses the master variant's attributes and\n"),a("code",[t._v("Spree::Price")]),t._v(".")]),a("li",[t._v("If a product has more than one variant configured, then the master variant\ndoes "),a("em",[t._v("not")]),t._v(" provide the price and other properties to the line item. "),a("strong",[t._v("In this\ncase, the master variant is not sellable")]),t._v(". Instead, it is used as a template\nfor other variants.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v('"Mug" variant')]),a("th",[t._v("Color")]),a("th",[t._v("Size")]),a("th",[t._v("Price")])])]),a("tbody",[a("tr",[a("td",[t._v("1 (master variant)")]),a("td",[t._v("--")]),a("td",[t._v("--")]),a("td",[t._v("$12")])]),a("tr",[a("td",[t._v("2")]),a("td",[t._v("Green")]),a("td",[t._v("Large")]),a("td",[t._v("$12")])]),a("tr",[a("td",[t._v("3")]),a("td",[t._v("Red")]),a("td",[t._v("Medium")]),a("td",[t._v("$12")])]),a("tr",[a("td",[t._v("4")]),a("td",[t._v("Red")]),a("td",[t._v("Large")]),a("td",[t._v("$12")])]),a("tr",[a("td",[t._v("5")]),a("td",[t._v("White")]),a("td",[t._v("Medium")]),a("td",[t._v("$12")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"master-variant-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#master-variant-methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Master variant methods")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Master variants must be explicitly called for using the "),e("code",[this._v("master")]),this._v(" or\n"),e("code",[this._v("variants_including_master")]),this._v(" methods. For example:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{attrs:{class:"token constant"}},[t._v("Spree")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token constant"}},[t._v("Product")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("find")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("master\n"),a("span",{attrs:{class:"token comment"}},[t._v("# => <Spree::Variant id: 2, is_master: true, ...>")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The master variant does not appear in the list of variants accessed by the\n"),e("code",[this._v("variants")]),this._v(" method.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"product-images"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#product-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Product images")])}],!1,null,null,null);e.default=s.exports}}]);