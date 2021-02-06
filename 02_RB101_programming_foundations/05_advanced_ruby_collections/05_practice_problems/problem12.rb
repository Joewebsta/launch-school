arr = [[:a, 1], ['b', 'two'], ['sea', { c: 3 }],
       [{ a: 1, b: 2, c: 3, d: 4 }, 'D']]
# expected return value: {:a=>1, "b"=>"two", "sea"=>{:c=>3}, {:a=>1, :b=>2, :c=>3, :d=>4}=>"D"}

result = arr.each_with_object({}) do |(item1, item2), hsh|
  hsh[item1] = item2
end

p result
# Loop over each element (each)
# Declare new variable to store new (empty) hash
# Access the first and second element of each sub array
# use first element to set key
# use second element to set value
# return new hash
