(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{97:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"first-time-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-time-installation","aria-hidden":"true"}},[e._v("#")]),e._v(" First-time installation")]),a("p",[e._v("This article will help you install and run Solidus on your local machine for the\nfirst time. This guide is aimed specifically at developers running macOS.")]),a("p",[e._v("If you run Linux or Windows, or you don't use "),a("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew")]),e._v(" on your Mac, you\ncan still follow this guide. However, you may want to consult other\ndocumentation while installing Ruby, SQLite 3, and other dependencies on your\nsystem.")]),a("h2",{attrs:{id:"getting-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-help","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting help")]),a("p",[e._v("If you're following this guide and still having trouble installing Solidus,\n"),a("a",{attrs:{href:"http://slack.solidus.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("join the Solidus Slack team")]),e._v(" and start a conversation\nin the "),a("a",{attrs:{href:"https://solidusio.slack.com/messages/supports/details/",target:"_blank",rel:"noopener noreferrer"}},[e._v("#support channel")]),e._v(".")]),a("p",[e._v("If you are still not able to get Solidus running, "),a("a",{attrs:{href:"https://github.com/solidusio/solidus/issues/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("open an issue on\nGitHub")]),e._v(" with any information you think would help to\nreproduce the issues you're having. That would include your operating system and\nits version, the versions of Ruby, Rails, and SQLite 3 that you are running, and\nthe specific error messages you are receiving during installation.")]),a("h2",{attrs:{id:"before-you-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-you-start","aria-hidden":"true"}},[e._v("#")]),e._v(" Before you start")]),a("p",[e._v("Solidus is an ecommerce platform built with "),a("a",{attrs:{href:"http://rubyonrails.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ruby on\nRails")]),e._v(". To get the most out of Solidus, we recommend\nthat you familiarize yourself with Ruby on Rails, as well as "),a("a",{attrs:{href:"https://www.ruby-lang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Ruby\nprogramming language")]),e._v(" beforehand.")]),a("p",[e._v("Because Solidus is an Rails engine, much of what the "),a("a",{attrs:{href:"http://guides.rubyonrails.org/engines.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rails Guide on\nEngines")]),e._v(" explains applies directly\nto Solidus, too.")]),a("p",[e._v("We also recommend configuring your development environment so that you can\n"),a("a",{attrs:{href:"https://www.michaelehead.com/2016/02/06/installing-gems-without-sudo.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("install RubyGems without "),a("code",[e._v("sudo")])]),e._v(".")]),a("h2",{attrs:{id:"system-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" System requirements")]),a("p",[e._v("The following software is required to get Solidus running:")]),a("ul",[a("li",[a("a",{attrs:{href:"https://www.ruby-lang.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ruby")]),e._v(" 2.2.2 or newer")]),a("li",[a("a",{attrs:{href:"https://sqlite.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQLite 3")])]),a("li",[a("a",{attrs:{href:"http://guides.rubyonrails.org/getting_started.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rails")]),e._v(" 5.0.0 or newer")]),a("li",[a("a",{attrs:{href:"http://imagemagick.org/script/download.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("ImageMagick")])])]),a("p",[e._v("We recommend using "),a("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew")]),e._v(" to install these dependencies on your\nMac. Throughout this article, we will use the "),a("code",[e._v("brew")]),e._v(" command for installing\nsystem dependencies. "),a("a",{attrs:{href:"https://www.ruby-lang.org/en/documentation/installation/#homebrew",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Ruby documentation also recommends using\nHomebrew")]),e._v(" if you need to upgrade from your system's Ruby.")]),a("h3",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[e._v("#")]),e._v(" Quick start")]),a("p",[e._v("Using Homebrew, you can install all of the requirements using the following\ncommands:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("brew "),a("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" ruby sqlite3 imagemagick\ngem "),a("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" rails\n")])]),a("p",[e._v("See more detailed installation information below.")]),a("h3",{attrs:{id:"upgrade-ruby-on-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-ruby-on-macos","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrade Ruby on macOS")]),a("p",[e._v("If you run macOS Sierra or an older OS, you system's version of Ruby will need\nto be upgraded from 2.0.x to 2.2.2 or newer. You can check what version of Ruby\nyou have installed with the following command:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("ruby --version\n")])]),a("p",[e._v("The Ruby documentation recommends installing another, newer instance of Ruby\ninstalling another, newer instance of Ruby using Homebrew:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("brew "),a("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" ruby\n")])]),a("p",[e._v("Homebrew prioritizes the Homebrew installation of Ruby (at\n"),a("code",[e._v("/usr/local/bin/ruby")]),e._v(") above the system installation ("),a("code",[e._v("/usr/bin/ruby")]),e._v(").")]),a("h3",{attrs:{id:"install-sqlite-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-sqlite-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Install SQLite 3")]),a("p",[e._v("Rails and Solidus use SQLite 3 as the default relational database. SQLite is a\nwidely-supported, lightweight way to send and receive data. Using Homebrew,\nyou can install the latest version of SQLite 3 using the following command:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("brew "),a("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" sqlite3\n")])]),a("p",[e._v("Alternatively, you can "),a("a",{attrs:{href:"https://www.sqlite.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("download the pre-compiled binary from the SQLite\nwebsite")]),e._v(".")]),a("p",[e._v("After the installation, check that it has been installed by checking the version\nnumber:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("sqlite3 --version\n")])]),a("p",[e._v("If all is well, this command will return a version number that looks something\nlike "),a("code",[e._v("3.16.0 2016-11-04 19:09:39 0f3eed3324eda2a2b8d3301e5a43dc58a3a5fd5f")]),e._v(".")]),a("h3",{attrs:{id:"install-rails"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-rails","aria-hidden":"true"}},[e._v("#")]),e._v(" Install Rails")]),a("p",[e._v("Rails includes everything you need to build and extend a web application. Once\nyou have Ruby and SQLite 3 installed on your system, you can install Rails via\nthe "),a("a",{attrs:{href:"https://rubygems.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("RubyGems")]),a("code",[e._v("gem")]),e._v(" command that comes as a part of Ruby:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("gem "),a("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" rails\n")])]),a("p",[e._v("This installs Rails as well as its dependencies.")]),a("h3",{attrs:{id:"install-imagemagick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-imagemagick","aria-hidden":"true"}},[e._v("#")]),e._v(" Install ImageMagick")]),a("p",[e._v("ImageMagick helps you create, edit, and save to hundreds of image file formats.\nIt is required to use "),a("a",{attrs:{href:"https://github.com/thoughtbot/paperclip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paperclip")]),e._v(",\nwhich is how Solidus currently handles file attachments. To install ImageMagick\nvia Homebrew, use the command:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("brew "),a("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" imagemagick\n")])]),a("p",[e._v("Alternatively, you can "),a("a",{attrs:{href:"http://imagemagick.org/script/download.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("download a pre-compiled binary for macOS from the\nImageMagick website")]),e._v(".")]),a("h2",{attrs:{id:"setup-and-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-and-installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup and installation")]),a("p",[e._v("Once you have installed all of the system requirements, we can start setting up\nSolidus.")]),a("h3",{attrs:{id:"create-and-configure-new-rails-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-and-configure-new-rails-project","aria-hidden":"true"}},[e._v("#")]),e._v(" Create and configure new Rails project")]),a("p",[e._v("First, we need a new Rails project:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("rails new your_solidus_project_name\n")])]),a("p",[e._v("Once the new project has finished being created, we can open the project's newly\ncreated "),a("code",[e._v("Gemfile")]),e._v(" in a text editor and add the required Solidus gems as new\nlines:")]),a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("gem "),a("span",{attrs:{class:"token string"}},[e._v("'solidus'")]),e._v("\ngem "),a("span",{attrs:{class:"token string"}},[e._v("'solidus_auth_devise'")]),e._v("\n")])]),a("p",[e._v("By requiring "),a("a",{attrs:{href:"https://github.com/solidusio/solidus",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("solidus")])]),e._v(" in your "),a("code",[e._v("Gemfile")]),e._v(", you are actually\nrequiring all five of the core Solidus gems:")]),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/solidusio/solidus/tree/master/core",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("solidus_core")])])]),a("li",[a("a",{attrs:{href:"https://github.com/solidusio/solidus/tree/master/api",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("solidus_api")])])]),a("li",[a("a",{attrs:{href:"https://github.com/solidusio/solidus/tree/master/frontend",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("solidus_frontend")])])]),a("li",[a("a",{attrs:{href:"https://github.com/solidusio/solidus/tree/master/backend",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("solidus_backend")])])]),a("li",[a("a",{attrs:{href:"https://github.com/solidusio/solidus/tree/master/sample",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("solidus_sample")])])])]),a("p",[e._v("All five of these gems are maintained in the "),a("a",{attrs:{href:"https://github.com/solidusio/solidus",target:"_blank",rel:"noopener noreferrer"}},[e._v("Solidus GitHub\nrepository")]),e._v(". They are documented at a "),a("a",{attrs:{href:"http://docs.solidus.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("separate documentation\nsite")]),e._v(".")]),a("p",[e._v("For a first-time installation, we recommend requiring "),a("code",[e._v("solidus")]),e._v(" as it provides a\nfully-functioning online store. However, you may wish to only use a subset of\nthe gems and create a more custom store.")]),a("p",[e._v("Once you have saved the "),a("code",[e._v("Gemfile")]),e._v(", ensure you are in your Rails project\ndirectory, and then install the project's dependencies using Bundler.")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("cd")]),e._v(" /path/to/your-solidus-project-name\nbundle "),a("span",{attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])]),a("h3",{attrs:{id:"start-generating-solidus-configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-generating-solidus-configuration-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Start generating Solidus configuration files")]),a("p",[e._v("After the gems have been successfully installed, you need to create the\nnecessary configuration files and instructions for the database using generators\nprovided by Solidus and Railties.")]),a("p",[e._v("First, run the "),a("code",[e._v("spree:install")]),e._v(" generator:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("bundle "),a("span",{attrs:{class:"token function"}},[e._v("exec")]),e._v(" rails generate spree:install\n")])]),a("p",[e._v("This may take a few minutes to complete, and it requires some user confirmation.")]),a("h3",{attrs:{id:"set-the-administrator-username-and-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-the-administrator-username-and-password","aria-hidden":"true"}},[e._v("#")]),e._v(" Set the administrator username and password")]),a("p",[e._v("The "),a("code",[e._v("spree:install")]),e._v(" generator prompts you to configure the Solidus administrator\nusername and password values.")]),a("p",[e._v("The default values are as follows:")]),a("ul",[a("li",[e._v("Username: "),a("code",[e._v("admin@example.com")])]),a("li",[e._v("Password: "),a("code",[e._v("test123")])])]),a("h3",{attrs:{id:"prepare-solidus-database-migrations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-solidus-database-migrations","aria-hidden":"true"}},[e._v("#")]),e._v(" Prepare Solidus database migrations")]),a("p",[e._v("Next, you need run the "),a("code",[e._v("solidus:auth:install")]),e._v(" generator and install your\ndatabase migrations using the following commands:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("bundle "),a("span",{attrs:{class:"token function"}},[e._v("exec")]),e._v(" rails generate solidus:auth:install\nbundle "),a("span",{attrs:{class:"token function"}},[e._v("exec")]),e._v(" rake railties:install:migrations\n")])]),a("p",[e._v("Finally, you need to run the migrations that Railties created. This creates the\ne-commerce–friendly models that Solidus uses for its database:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("bundle "),a("span",{attrs:{class:"token function"}},[e._v("exec")]),e._v(" rake db:migrate\n")])]),a("h3",{attrs:{id:"start-the-rails-server-and-use-the-sample-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-the-rails-server-and-use-the-sample-store","aria-hidden":"true"}},[e._v("#")]),e._v(" Start the Rails server and use the sample store")]),a("p",[e._v("Once the database migrations have been created, you should be able to\nsuccessfully start the Rails server and see the sample store in your browser.")]),a("p",[e._v("First, start the server:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("bundle "),a("span",{attrs:{class:"token function"}},[e._v("exec")]),e._v(" rails server\n")])]),a("p",[e._v("Once the server has started, you can access your store from the following URLs:")]),a("ul",[a("li",[a("a",{attrs:{href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3000/")]),e._v(" accesses the\n"),a("a",{attrs:{href:"https://github.com/solidusio/solidus/tree/master/frontend",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("solidus_frontend")])]),e._v(" storefront.")]),a("li",[a("a",{attrs:{href:"http://localhost:3000/admin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3000/admin/")]),e._v(" accesses the\n"),a("a",{attrs:{href:"https://github.com/solidusio/solidus/tree/master/backend",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("solidus_backend")])]),e._v(" admin area.")])]),a("p",[e._v("You can browse the sample store's pages and mock products, and so on.")])])}],!1,null,null,null);t.default=s.exports}}]);