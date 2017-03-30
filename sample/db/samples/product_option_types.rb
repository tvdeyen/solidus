Spree::Sample.load_sample("products")

size = Spree::OptionType.find_by_presentation!("Size")
color = Spree::OptionType.find_by_presentation!("Color")

solidus_baseball_jersey = Spree::Product.find_by_name!("Solidus Baseball Jersey")
solidus_baseball_jersey.option_types = [size, color]
solidus_baseball_jersey.save!
