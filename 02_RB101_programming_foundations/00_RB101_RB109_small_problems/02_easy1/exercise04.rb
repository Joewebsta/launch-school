vehicles = %w[
  car car truck car SUV truck
  motorcycle motorcycle car truck
]

def count_occurrences(vehicles)
  ocurrences = vehicles.uniq.each_with_object({}) do |vehicle, hash|
    hash[vehicle] = vehicles.count(vehicle)
  end

  ocurrences.each do |vehicle, count|
    puts "#{vehicle} => #{count}"
  end
end

count_occurrences(vehicles)
