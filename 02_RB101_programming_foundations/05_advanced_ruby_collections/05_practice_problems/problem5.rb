munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female" }
}

# sum = 0
# munsters.each_value do |person|
#   sum += person['age'] if person['gender'] == 'male'
# end

total_age = munsters.reduce(0) do |sum, (_name, info)|
  sum += info['age'] if info['gender'] == 'male'
  sum
end

p total_age

# Create variable to store sum
# Loop over values (hashes) of inner hashes
# Reference age value
# Add age to sum
