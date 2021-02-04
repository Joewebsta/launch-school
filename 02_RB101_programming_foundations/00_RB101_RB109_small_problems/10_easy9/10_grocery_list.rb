def buy_fruit(grocery_list)
  # p grocery_list.map { |item| ("#{item[0]} " * item[1]).split }.flatten

  full_list = []

  grocery_list.each do |item|
    item_name = item[0]
    num_items = item[1]

    num_items.times { full_list << item_name }
  end

  full_list
end

p buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) ==
  ["apples", "apples", "apples", "orange", "bananas", "bananas"]
