(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{95:function(s,e,a){"use strict";a.r(e);var t=a(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"installation-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-options","aria-hidden":"true"}},[s._v("#")]),s._v(" Installation options")]),a("h2",{attrs:{id:"stable-solidus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stable-solidus","aria-hidden":"true"}},[s._v("#")]),s._v(" Stable Solidus")]),a("p",[s._v("To get the latest stable build of Solidus, just require "),a("code",[s._v("solidus")]),s._v(" in your\n"),a("code",[s._v("Gemfile")]),s._v(".")]),a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[s._v("gem "),a("span",{attrs:{class:"token string"}},[s._v("'solidus'")]),s._v("\n")])]),a("h2",{attrs:{id:"bleeding-edge-solidus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bleeding-edge-solidus","aria-hidden":"true"}},[s._v("#")]),s._v(" Bleeding edge Solidus")]),a("p",[s._v("If you want to use the bleeding edge version of Solidus, you can require the\nSolidus GitHub repo's master branch:")]),a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[s._v("gem "),a("span",{attrs:{class:"token string"}},[s._v("'solidus'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" github"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'solidusio/solidus'")]),s._v("\n")])]),a("p",[s._v("The master branch is updated frequently and may break. Do not use this branch on\na production system.")]),a("h2",{attrs:{id:"manually-run-migrations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually-run-migrations","aria-hidden":"true"}},[s._v("#")]),s._v(" Manually run migrations")]),a("p",[s._v("When you run the "),a("code",[s._v("spree:install")]),s._v(" generator without arguments, it runs\nmigrations, adds sample data, and seeds your database:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("rails generate spree:install\n")])]),a("p",[s._v("You can use command arguments to skip any of these steps of the generator:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("rails generate spree:install --migrate"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("false --sample"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("false --seed"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n")])]),a("p",[s._v("If you want to perform these tasks later, you can use these commands.")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("bundle "),a("span",{attrs:{class:"token function"}},[s._v("exec")]),s._v(" rake railties:install:migrations       "),a("span",{attrs:{class:"token comment"}},[s._v("# installs migrations")]),s._v("\nbundle "),a("span",{attrs:{class:"token function"}},[s._v("exec")]),s._v(" rake db:migrate                        "),a("span",{attrs:{class:"token comment"}},[s._v("# runs migrations")]),s._v("\nbundle "),a("span",{attrs:{class:"token function"}},[s._v("exec")]),s._v(" rake db:seed                           "),a("span",{attrs:{class:"token comment"}},[s._v("# seeds your database")]),s._v("\nbundle "),a("span",{attrs:{class:"token function"}},[s._v("exec")]),s._v(" rake spree_sample:load                 "),a("span",{attrs:{class:"token comment"}},[s._v("# loads sample data")]),s._v("\n")])]),a("p",[s._v("If you use "),a("code",[s._v("solidus_auth_devise")]),s._v(" for user authentication, you can also install\nand run its migrations, then seed the database, separately:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("bundle "),a("span",{attrs:{class:"token function"}},[s._v("exec")]),s._v(" rake solidus_auth:install:migrations   "),a("span",{attrs:{class:"token comment"}},[s._v("# installs solidus_auth_devise migrations")]),s._v("\nbundle "),a("span",{attrs:{class:"token function"}},[s._v("exec")]),s._v(" rake db:migrate                        "),a("span",{attrs:{class:"token comment"}},[s._v("# runs solidus_auth_devise migrations")]),s._v("\nbundle "),a("span",{attrs:{class:"token function"}},[s._v("exec")]),s._v(" rake db:seed                           "),a("span",{attrs:{class:"token comment"}},[s._v("# seeds your database")]),s._v("\n")])]),a("h2",{attrs:{id:"development-environment-performance-gains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-environment-performance-gains","aria-hidden":"true"}},[s._v("#")]),s._v(" Development environment performance gains")]),a("p",[s._v("You may noticed that your Solidus store runs slowly in development mode. You can\nchange some configuration to get performance gains.")]),a("h3",{attrs:{id:"turn-off-asset-debugging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#turn-off-asset-debugging","aria-hidden":"true"}},[s._v("#")]),s._v(" Turn off asset debugging")]),a("p",[s._v("By default, your development environment includes all CSS and JavaScript assets\nas separate "),a("code",[s._v("include")]),s._v("s. You can disable this in your project's\n"),a("code",[s._v("config/environments/development.rb")]),s._v(" by changing the following configuration\nfrom "),a("code",[s._v("true")]),s._v(" to "),a("code",[s._v("false")]),s._v(":")]),a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{attrs:{class:"token constant"}},[s._v("Rails")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("application"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("configure "),a("span",{attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  config"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("assets"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("debug "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("false")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),a("h3",{attrs:{id:"enable-turbolinks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-turbolinks","aria-hidden":"true"}},[s._v("#")]),s._v(" Enable turbolinks")]),a("p",[s._v("You can gain some extra speed by enabling "),a("a",{attrs:{href:"https://github.com/turbolinks/turbolinks",target:"_blank",rel:"noopener noreferrer"}},[s._v("Turbolinks")]),s._v(" in your\nSolidus admin. First, add the "),a("code",[s._v("turbolinks")]),s._v(" gem to your project's "),a("code",[s._v("Gemfile")]),s._v(":")]),a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[s._v("gem "),a("span",{attrs:{class:"token string"}},[s._v("'turbolinks'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'~> 5.0.0'")]),s._v("\n")])]),a("p",[s._v("Then, enable Turbolinks in the backend by appending these lines to the\nJavaScript manifest at "),a("code",[s._v("vendor/assets/spree/backend/all/js")]),s._v(":")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("//= require turbolinks")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//= require backend/app/assets/javascripts/spree/backend/turbolinks-integration.js")]),s._v("\n")])]),a("p",[s._v("Note that Turbolinks can break your custom Solidus extensions or other\ncustomizations you have made to the Solidus admin. Use Turbolinks at your own\nrisk.")])])}],!1,null,null,null);e.default=n.exports}}]);