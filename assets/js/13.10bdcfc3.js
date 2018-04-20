(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{113:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"split-shipments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#split-shipments","aria-hidden":"true"}},[t._v("#")]),t._v(" Split shipments")]),e("p",[t._v("Solidus supports split shipments out of the box. This feature addresses the\nneeds of complex Solidus stores who require detailed inventory management, and\nsophisticated shipping and warehouse logic. It also allows you to manage\nshipments from multiple stock locations.")]),e("p",[e("a",{attrs:{href:"https://github.com/solidusio/solidus/blob/master/core/app/models/spree/stock/simple_coordinator.rb",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Spree::Stock::SimpleCoordinator")])]),t._v(" contains all of the\nbusiness logic for how stock should be packaged. If your store requires a\nspecialized flow for handling split shipments, the simple coordinator should\nprovide a good starting point for customizations.")]),e("h2",{attrs:{id:"creating-proposed-shipments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-proposed-shipments","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating proposed shipments")]),e("p",[t._v("An order's shipments are determined by\n"),e("a",{attrs:{href:"https://github.com/solidusio/solidus/blob/master/core/app/models/spree/stock/simple_coordinator.rb",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Spree::Stock::SimpleCoordinator")])]),t._v(" while the\n"),e("code",[t._v("Spree::Order")]),t._v("'s' state is set to "),e("code",[t._v("delivery")]),t._v(". This occurs before the customer\nhas completed their order at checkout.")]),e("p",[t._v("The "),e("code",[t._v("SimpleCoordinator")]),t._v(" takes an order and builds as many shipments as are\nnecessary to fulfill it.")]),e("p",[t._v("The simple coordinator performs a number of tasks in order to create shipment\nproposals:")]),e("ol",[e("li",[t._v("The coordinator checks the availability of the ordered items.")]),e("li",[t._v("Inventory is allocated from available stock to the current order.")]),e("li",[t._v("It splits the order into logical packages based on stock locations and\ninventory at those locations.")]),e("li",[t._v("Each package generates a new "),e("code",[t._v("Spree::Shipment")]),t._v(" object that is associated with\nthe current order.")]),e("li",[t._v("It estimates the shipping rates for each shipment.")])]),e("p",[t._v("After the proposed shipments have been determined, the customer can continue the\ncheckout process and take the order from the "),e("code",[t._v("delivery")]),t._v(" state to the "),e("code",[t._v("payment")]),t._v("\nstate.")]),e("h2",{attrs:{id:"splitters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#splitters","aria-hidden":"true"}},[t._v("#")]),t._v(" Splitters")]),e("p",[t._v("In order to split shipments, Solidus runs a series of splitters in sequence. The\nfirst splitter in the sequence takes the array of packages from the order,\nsplits the order into packages according to its rules, then passes the packages\non to the next splitter in the sequence.")]),e("p",[t._v("For each generated shipment, a shipping method can be assigned.")]),e("h3",{attrs:{id:"default-splitters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-splitters","aria-hidden":"true"}},[t._v("#")]),t._v(" Default splitters")]),e("p",[t._v("Solidus comes with three built-in splitters:")]),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/solidusio/solidus/blob/master/core/app/models/spree/stock/splitter/backordered.rb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Backordered splitter")]),t._v(": Splits an order based on the\namount of inventory on hand at each stock location.")]),e("li",[e("a",{attrs:{href:"https://github.com/solidusio/solidus/blob/master/core/app/models/spree/stock/splitter/shipping_category.rb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shipping category splitter")]),t._v(": Splits an order into\nshipments based on a product's shipping categories. This means that each\npackage only has items that belongs to the same shipping category.")]),e("li",[e("a",{attrs:{href:"https://github.com/solidusio/solidus/blob/master/core/app/models/spree/stock/splitter/weight.rb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Weight splitter")]),t._v(": Splits an order into shipments based on a\nweight threshold. This means that each shipment has a maximum weight: if a new\nitem is added to the order and it causes a package to go over the weight\nthreshold, a new shipment is created. Each shipment needs to weigh less than\nthe threshold. You can set the weight threshold by changing the\n"),e("code",[t._v("Spree::Stock::Splitter::Weight.threshold")]),t._v(" value in an initializer. (It\ndefaults to "),e("code",[t._v("150")]),t._v(".)")])]),e("h4",{attrs:{id:"custom-splitters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-splitters","aria-hidden":"true"}},[t._v("#")]),t._v(" Custom splitters")]),e("p",[t._v("Note that splitters can be customized. Create you own splitter by inheriting the\n"),e("code",[t._v("Spree::Stock::Splitter::Base")]),t._v(" class.")]),e("p",[t._v("For an example of a simple splitter, take a look at Solidus's "),e("a",{attrs:{href:"https://github.com/solidusio/solidus/blob/master/core/app/models/spree/stock/splitter/weight.rb",target:"_blank",rel:"noopener noreferrer"}},[t._v("weight\nsplitter")]),t._v(". This splitter ensures that items that weigh\nmore than "),e("code",[t._v("150")]),t._v(" are split into their own shipment.")]),e("p",[t._v("After you create your splitter, you need to add it to the array of splitters\nthat Solidus uses. To do this, add the following to your\n"),e("code",[t._v("config/initializers/spree.rb")]),t._v(" file:")]),e("pre",{pre:!0,attrs:{class:"language-ruby"}},[e("code",[e("span",{attrs:{class:"token constant"}},[t._v("Rails")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("application"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spree"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stock_splitters "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{attrs:{class:"token constant"}},[t._v("Spree")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token constant"}},[t._v("Stock")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token constant"}},[t._v("Splitter")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token constant"}},[t._v("CustomSplitter")]),t._v("\n")])]),e("p",[t._v("You can also override the splitters used in Solidus, rearrange them, or\notherwise customize them from the "),e("code",[t._v("config/initializers/spree.rb")]),t._v(":")]),e("pre",{pre:!0,attrs:{class:"language-ruby"}},[e("code",[e("span",{attrs:{class:"token constant"}},[t._v("Rails")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("application"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spree"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stock_splitters "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{attrs:{class:"token constant"}},[t._v("Spree")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token constant"}},[t._v("Stock")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token constant"}},[t._v("Splitter")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token constant"}},[t._v("CustomSplitter")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token constant"}},[t._v("Spree")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token constant"}},[t._v("Stock")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token constant"}},[t._v("Splitter")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{attrs:{class:"token constant"}},[t._v("ShippingCategory")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),e("p",[t._v("If you want to add different splitters for each of your "),e("code",[t._v("Spree::StockLocation")]),t._v("s,\nyou can decorate the "),e("code",[t._v("Spree::Stock::SimpleCoordinator")]),t._v(" class and override the\n"),e("code",[t._v("splitters")]),t._v(" method.")]),e("h4",{attrs:{id:"turn-off-split-shipments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#turn-off-split-shipments","aria-hidden":"true"}},[t._v("#")]),t._v(" Turn off split shipments")]),e("p",[t._v("If you don't want to split packages in any case, you can set the\n"),e("code",[t._v("config.spree.stock_splitters")]),t._v(" option to an empty array:")]),e("pre",{pre:!0,attrs:{class:"language-ruby"}},[e("code",[e("span",{attrs:{class:"token constant"}},[t._v("Rails")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("application"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spree"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stock_splitters "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);