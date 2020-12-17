# merge returns a new hash. merge! mutates the hash.

joe1 = { name: 'Joe', age: 32 }
joe2 = { height: "5'10\"" }

joe = joe1.merge(joe2)

puts joe
puts joe1 # original hash is unchanged
puts joe2

#############################

joe1 = { name: 'Joe', age: 32 }
joe2 = { height: "5'10\"" }

joe = joe1.merge!(joe2)

puts joe
puts joe1 # original hash is merged
puts joe2
