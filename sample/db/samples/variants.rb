Spree::Sample.load_sample("option_values")
Spree::Sample.load_sample("products")

solidus_baseball_jersey = Spree::Product.find_by_name!("Solidus Baseball Jersey")
solidus_tote = Spree::Product.find_by_name!("Solidus Tote")
solidus_bag = Spree::Product.find_by_name!("Solidus Bag")
solidus_jr_spaghetti = Spree::Product.find_by_name!("Solidus Jr. Spaghetti")
solidus_mug = Spree::Product.find_by_name!("Solidus Mug")
solidus_ringer = Spree::Product.find_by_name!("Solidus Ringer T-Shirt")
solidus_stein = Spree::Product.find_by_name!("Solidus Stein")
ruby_baseball_jersey = Spree::Product.find_by_name!("Ruby Baseball Jersey")
apache_baseball_jersey = Spree::Product.find_by_name!("Apache Baseball Jersey")

small = Spree::OptionValue.find_by_name!("Small")
medium = Spree::OptionValue.find_by_name!("Medium")
large = Spree::OptionValue.find_by_name!("Large")
extra_large = Spree::OptionValue.find_by_name!("Extra Large")

red = Spree::OptionValue.find_by_name!("Red")
blue = Spree::OptionValue.find_by_name!("Blue")
green = Spree::OptionValue.find_by_name!("Green")

variants = [
  {
    product: solidus_baseball_jersey,
    option_values: [small, red],
    sku: "ROR-00001",
    cost_price: 17
  },
  {
    product: solidus_baseball_jersey,
    option_values: [small, blue],
    sku: "ROR-00002",
    cost_price: 17
  },
  {
    product: solidus_baseball_jersey,
    option_values: [small, green],
    sku: "ROR-00003",
    cost_price: 17
  },
  {
    product: solidus_baseball_jersey,
    option_values: [medium, red],
    sku: "ROR-00004",
    cost_price: 17
  },
  {
    product: solidus_baseball_jersey,
    option_values: [medium, blue],
    sku: "ROR-00005",
    cost_price: 17
  },
  {
    product: solidus_baseball_jersey,
    option_values: [medium, green],
    sku: "ROR-00006",
    cost_price: 17
  },
  {
    product: solidus_baseball_jersey,
    option_values: [large, red],
    sku: "ROR-00007",
    cost_price: 17
  },
  {
    product: solidus_baseball_jersey,
    option_values: [large, blue],
    sku: "ROR-00008",
    cost_price: 17
  },
  {
    product: solidus_baseball_jersey,
    option_values: [large, green],
    sku: "ROR-00009",
    cost_price: 17
  },
  {
    product: solidus_baseball_jersey,
    option_values: [extra_large, green],
    sku: "ROR-00010",
    cost_price: 17
  }
]

masters = {
  solidus_baseball_jersey => {
    sku: "ROR-001",
    cost_price: 17
  },
  solidus_tote => {
    sku: "ROR-00011",
    cost_price: 17
  },
  solidus_bag => {
    sku: "ROR-00012",
    cost_price: 21
  },
  solidus_jr_spaghetti => {
    sku: "ROR-00013",
    cost_price: 17
  },
  solidus_mug => {
    sku: "ROR-00014",
    cost_price: 11
  },
  solidus_ringer => {
    sku: "ROR-00015",
    cost_price: 17
  },
  solidus_stein => {
    sku: "ROR-00016",
    cost_price: 15
  },
  apache_baseball_jersey => {
    sku: "APC-00001",
    cost_price: 17
  },
  ruby_baseball_jersey => {
    sku: "RUB-00001",
    cost_price: 17
  }
}

Spree::Variant.create!(variants)

masters.each do |product, variant_attrs|
  product.master.update_attributes!(variant_attrs)
end
