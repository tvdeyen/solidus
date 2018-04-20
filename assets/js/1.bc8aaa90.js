(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{125:function(e,t,o){"use strict";o.r(t);var r=o(0),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("h1",{attrs:{id:"custom-frontend"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-frontend","aria-hidden":"true"}},[e._v("#")]),e._v(" Custom frontend")]),o("p",[e._v("As a Rails engine, Solidus allows you to build a custom application frontend\nfrom scratch. You can build out a frontend in the same way that you would for\nany other Rails application.")]),o("p",[e._v("This article focuses how you can build out views for your application. However,\nkeep in mind that you would also need to utilize Solidus's models and  create\nyour own controllers to create a functional storefront.")]),o("h2",{attrs:{id:"solidus-frontend-and-solidus-backend"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#solidus-frontend-and-solidus-backend","aria-hidden":"true"}},[e._v("#")]),o("code",[e._v("solidus_frontend")]),e._v(" and "),o("code",[e._v("solidus_backend")])]),o("p",[e._v("Solidus includes both a storefront ("),o("a",{attrs:{href:"https://github.com/solidusio/solidus/tree/master/frontend",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("solidus_frontend")])]),e._v(") and\nadmin area ("),o("a",{attrs:{href:"https://github.com/solidusio/solidus/tree/master/backend",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("solidus_backend")])]),e._v("). The storefront uses\n"),o("a",{attrs:{href:"http://getskeleton.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Skeleton")]),e._v(" for its CSS grids and the admin area is based on\n"),o("a",{attrs:{href:"https://getbootstrap.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bootstrap")]),e._v(". These gems offer the features of a typical store and\nmake extensive use of "),o("code",[e._v("solidus_core")]),e._v("'s features.")]),o("p",[e._v("You may not want to use the gems for your own store. However, you may want to\nuse them as a reference when building out your own frontend and backend.")]),o("p",[e._v("These gems use the following tools to create views:")]),o("ul",[o("li",[o("a",{attrs:{href:"https://apidock.com/ruby/ERB",target:"_blank",rel:"noopener noreferrer"}},[e._v("ERB")]),e._v(" for view templates.")]),o("li",[o("a",{attrs:{href:"https://sass-lang.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("SASS")]),e._v(" for CSS preprocessing.")]),o("li",[e._v("Pure JavaScript for JavaScript assets.")])]),o("h2",{attrs:{id:"getting-started-with-rails-frontend-development"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-rails-frontend-development","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting started with Rails frontend development")]),o("p",[e._v("If you intend to create your own storefront or admin area for a Solidus-based\nstore, we recommend that you first familiarize yourself with Rails. Solidus is a\nRails engine, so you would develop it the same way you would any other Rails\napp.")]),o("p",[e._v("If you are new to Rails, here are some resources you can use to get started\nbuilding your own application frontend:")]),o("ul",[o("li",[o("a",{attrs:{href:"https://www.railstutorial.org/book/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ruby on Rails Tutorial: Learn Web Development with\nRails")]),e._v(" (Michael Hartl)")]),o("li",[o("a",{attrs:{href:"http://guides.rubyonrails.org/getting_started.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting Started with Rails")]),e._v("\n("),o("em",[e._v("Rails Guides")]),e._v(")")]),o("li",[o("a",{attrs:{href:"http://guides.rubyonrails.org/asset_pipeline.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Asset Pipeline")]),e._v("\n("),o("em",[e._v("Rails Guides")]),e._v(")")]),o("li",[o("a",{attrs:{href:"http://guides.rubyonrails.org/i18n.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rails Internationalization (I18n) API")]),e._v("\n("),o("em",[e._v("Rails Guides")]),e._v(")")])]),o("p",[e._v("Note that we could recommend all of the "),o("a",{attrs:{href:"http://guides.rubyonrails.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rails Guides")]),e._v(". But for\nfrontend development, pay special attention to the Rails Guides linked to above.")]),o("h2",{attrs:{id:"create-your-own-solidus-frontend"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-your-own-solidus-frontend","aria-hidden":"true"}},[e._v("#")]),e._v(" Create your own Solidus frontend")]),o("p",[e._v("If you choose not to use the "),o("code",[e._v("solidus_frontend")]),e._v(" gem and build your own\nstorefront from scratch, see the list below for Solidus-specific setup\ninformation.")]),o("h3",{attrs:{id:"solidus-application-settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#solidus-application-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Solidus application settings")]),o("p",[e._v("The "),o("code",[e._v("Solidus::Config")]),e._v(" settings affect many values across the frontend of your\nstore. You can change these settings in your "),o("code",[e._v("/config/initializers/spree.rb")]),e._v("\nfile or any other initializer.")]),o("p",[e._v("You can check all of the default settings of "),o("code",[e._v("Spree::Config")]),e._v(" by sending this\ncommand to your Rails console:")]),o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("Spree::Config.inspect\n")])]),o("p",[e._v("As you develop your application's frontend specifically, you may want to\ninitialize your own values for the following "),o("code",[e._v("Spree::Config")]),e._v(" settings:")]),o("ul",[o("li",[o("code",[e._v(":layout")]),e._v(": Specifies a view in your "),o("code",[e._v("/app/view")]),e._v(" to be used as the base layout\nfor your storefront. The default value is\n"),o("code",[e._v("spree/layouts/spree_application[.html.erb]")]),e._v(", which is a file included in the\n"),o("code",[e._v("solidus_frontend")]),e._v(" gem.")]),o("li",[o("code",[e._v(":logo")]),e._v(": Specifies a file in your "),o("code",[e._v("/app/assets/images")]),e._v(" to be used as the logo\non the storefront.  You can access the logo from any view using the "),o("code",[e._v("<%= logo %>")]),e._v(" variable. The default value is "),o("code",[e._v("logo/solidus_logo.png")])]),o("li",[o("code",[e._v(":products_per_page")]),e._v(": Sets the amount of products that should be displayed on\na single page. The default value is "),o("code",[e._v("12")]),e._v(".")])]),o("h3",{attrs:{id:"contributing-back-to-solidus"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contributing-back-to-solidus","aria-hidden":"true"}},[e._v("#")]),e._v(" Contributing back to Solidus")]),o("p",[e._v("If you intend to submit pull requests to Solidus, note that Solidus uses pure\nJavaScript for all of its "),o("code",[e._v("solidus_frontend")]),e._v(" and "),o("code",[e._v("solidus_backend")]),e._v(" code. Files\nwritten in CoffeeScript would not be accepted. For more information about\ncontributing to Solidus, see the "),o("a",{attrs:{href:"https://github.com/solidusio/solidus/blob/master/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Contributing")]),e._v(" guide.")])])}],!1,null,null,null);t.default=n.exports}}]);