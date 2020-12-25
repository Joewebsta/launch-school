vehicles = %w[
  car car truck car SUV truck
  motorcycle motorcycle car truck
]

def count_occurrences(vehicles)
  ocurrences = vehicles.each_with_object({}) do |vehicle, hash|
    if hash[vehicle]
      hash[vehicle] += 1
    else
      hash[vehicle] = 1
    end
  end

  print_occurances(ocurrences)
end

def print_occurances(ocurrences)
  ocurrences.each do |vehicle, count|
    puts "#{vehicle} => #{count}"
  end
end

count_occurrences(vehicles)
