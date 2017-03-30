Spree::Sample.load_sample("products")
Spree::Sample.load_sample("variants")

products = {}
products[:solidus_baseball_jersey] = Spree::Product.find_by_name!("Solidus Baseball Jersey")
products[:solidus_tote] = Spree::Product.find_by_name!("Solidus Tote")
products[:solidus_bag] = Spree::Product.find_by_name!("Solidus Bag")
products[:solidus_jr_spaghetti] = Spree::Product.find_by_name!("Solidus Jr. Spaghetti")
products[:solidus_mug] = Spree::Product.find_by_name!("Solidus Mug")
products[:solidus_ringer] = Spree::Product.find_by_name!("Solidus Ringer T-Shirt")
products[:solidus_stein] = Spree::Product.find_by_name!("Solidus Stein")
products[:ruby_baseball_jersey] = Spree::Product.find_by_name!("Ruby Baseball Jersey")
products[:apache_baseball_jersey] = Spree::Product.find_by_name!("Apache Baseball Jersey")

def image(name, type = "jpeg")
  images_path = Pathname.new(File.dirname(__FILE__)) + "images"
  path = images_path + "#{name}.#{type}"
  return false if !File.exist?(path)
  path
end

images = {
  products[:solidus_tote].master => [
    {
      attachment: image("solidus_tote")
    },
    {
      attachment: image("solidus_tote_back")
    }
  ],
  products[:solidus_bag].master => [
    {
      attachment: image("solidus_bag")
    }
  ],
  products[:solidus_baseball_jersey].master => [
    {
      attachment: image("solidus_baseball")
    },
    {
      attachment: image("solidus_baseball_back")
    }
  ],
  products[:solidus_jr_spaghetti].master => [
    {
      attachment: image("solidus_jr_spaghetti")
    }
  ],
  products[:solidus_mug].master => [
    {
      attachment: image("solidus_mug")
    },
    {
      attachment: image("solidus_mug_back")
    }
  ],
  products[:solidus_ringer].master => [
    {
      attachment: image("solidus_ringer")
    },
    {
      attachment: image("solidus_ringer_back")
    }
  ],
  products[:solidus_stein].master => [
    {
      attachment: image("solidus_stein")
    },
    {
      attachment: image("solidus_stein_back")
    }
  ],
  products[:apache_baseball_jersey].master => [
    {
      attachment: image("apache_baseball", "png")
    }
  ],
  products[:ruby_baseball_jersey].master => [
    {
      attachment: image("ruby_baseball", "png")
    }
  ]
}

products[:solidus_baseball_jersey].variants.each do |variant|
  color = variant.option_value("tshirt-color").downcase
  main_image = image("solidus_baseball_jersey_#{color}", "png")
  File.open(main_image) do |f|
    variant.images.create!(attachment: f)
  end
  back_image = image("solidus_baseball_jersey_back_#{color}", "png")
  next unless back_image
  File.open(back_image) do |f|
    variant.images.create!(attachment: f)
  end
end

images.each do |variant, attachments|
  puts "Loading images for #{variant.product.name}"
  attachments.each do |attachment|
    File.open(attachment[:attachment]) do |f|
      variant.images.create!(attachment: f)
    end
  end
end
