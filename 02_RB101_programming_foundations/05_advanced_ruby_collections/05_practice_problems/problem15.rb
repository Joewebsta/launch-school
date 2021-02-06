arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] }
]

even_int_hashes = arr.select do |hash|
  hash.values.flatten.all?(&:even?)
end

p even_int_hashes

# even_int_hashes = arr.select do |hash|
#   hash.all? do |_key, val|
#     val.all?(&:even?)
#   end
# end

# Returns array
# Selects the hashs
# All values are even

# Loop over each sub hash (select)
# Loop over each key/val pair (each_val)
# Loop over each value elem (all?)
