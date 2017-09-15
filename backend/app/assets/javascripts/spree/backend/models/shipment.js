Spree.Models.Shipment = Backbone.Model.extend({
  idAttribute: "number",
  paramRoot: "shipment",

  relations: {
    "selected_shipping_rate": Backbone.Model,
    "shipping_rates": Backbone.Collection,
  }
})
