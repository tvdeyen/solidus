Spree::Sample.load_sample("taxonomies")
Spree::Sample.load_sample("products")

categories = Spree::Taxonomy.find_by_name!("Categories")
brands = Spree::Taxonomy.find_by_name!("Brand")

products = {
  solidus_tote: "Solidus Tote",
  solidus_bag: "Solidus Bag",
  solidus_mug: "Solidus Mug",
  solidus_stein: "Solidus Stein",
  solidus_baseball_jersey: "Solidus Baseball Jersey",
  solidus_jr_spaghetti: "Solidus Jr. Spaghetti",
  solidus_ringer: "Solidus Ringer T-Shirt",
  apache_baseball_jersey: "Apache Baseball Jersey",
  ruby_baseball_jersey: "Ruby Baseball Jersey"
}

products.each do |key, name|
  products[key] = Spree::Product.find_by_name!(name)
end

taxons = [
  {
    name: "Categories",
    taxonomy: categories,
    position: 0
  },
  {
    name: "Bags",
    taxonomy: categories,
    parent: "Categories",
    position: 1,
    products: [
      products[:solidus_tote],
      products[:solidus_bag]
    ]
  },
  {
    name: "Mugs",
    taxonomy: categories,
    parent: "Categories",
    position: 2,
    products: [
      products[:solidus_mug],
      products[:solidus_stein]
    ]
  },
  {
    name: "Clothing",
    taxonomy: categories,
    parent: "Categories"
  },
  {
    name: "Shirts",
    taxonomy: categories,
    parent: "Clothing",
    position: 0,
    products: [
      products[:solidus_jr_spaghetti]
    ]
  },
  {
    name: "T-Shirts",
    taxonomy: categories,
    parent: "Clothing",
    products: [
      products[:solidus_baseball_jersey],
      products[:solidus_ringer],
      products[:apache_baseball_jersey],
      products[:ruby_baseball_jersey]
    ],
    position: 0
  },
  {
    name: "Brands",
    taxonomy: brands
  },
  {
    name: "Ruby",
    taxonomy: brands,
    parent: "Brand",
    products: [
      products[:ruby_baseball_jersey]
    ]
  },
  {
    name: "Apache",
    taxonomy: brands,
    parent: "Brand",
    products: [
      products[:apache_baseball_jersey]
    ]
  },
  {
    name: "Rails",
    taxonomy: brands,
    parent: "Brand",
    products: [
      products[:solidus_tote],
      products[:solidus_bag],
      products[:solidus_mug],
      products[:solidus_stein],
      products[:solidus_baseball_jersey],
      products[:solidus_jr_spaghetti],
      products[:solidus_ringer]
    ]
  }
]

taxons.each do |taxon_attrs|
  if taxon_attrs[:parent]
    taxon_attrs[:parent] = Spree::Taxon.find_by_name!(taxon_attrs[:parent])
    Spree::Taxon.create!(taxon_attrs)
  end
end
