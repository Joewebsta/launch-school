items = ['apples', 'corn', 'cabbage', 'wheat']

# 1 ----------------------------
def gather(items)
  puts "Let's start gathering food."
  yield(items)
  puts "We've finished gathering!"
end

# gather(items) do |*group1, group2|
#   puts group1.join(', ')
#   puts group2
# end

# Let's start gathering food.
# apples, corn, cabbage
# wheat
# We've finished gathering!

# 2 ----------------------------

# gather(items) do |group1, *group2, group3|
#   puts group1
#   puts group2.join(', ')
#   puts group3
# end

# Let's start gathering food.
# apples
# corn, cabbage
# wheat
# We've finished gathering!

# 3 ----------------------------

# gather(items) do |group1, *group2|
#   puts group1
#   puts group2.join(', ')
# end

# Let's start gathering food.
# apples
# corn, cabbage, wheat
# We've finished gathering!

# 4 ----------------------------

gather(items) do |item1, item2, item3, item4|
  puts "#{item1}, #{item2}, #{item3}, and #{item4}"
end

# Let's start gathering food.
# apples, corn, cabbage, and wheat
# We've finished gathering!
