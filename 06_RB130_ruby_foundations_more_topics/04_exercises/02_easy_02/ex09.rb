def each_cons(arr)
  arr.each_with_index do |elem, idx|
    break if idx == arr.size - 1
    yield(elem, arr[idx + 1])
  end
  nil
end

hash = {}
result = each_cons([1, 3, 6, 10]) do |value1, value2|
  hash[value1] = value2
end
p hash == { 1 => 3, 3 => 6, 6 => 10 }
p result.nil?

hash = {}
result = each_cons([]) do |value1, value2|
  hash[value1] = value2
end
p hash == {}
p result.nil?

hash = {}
result = each_cons(['a', 'b']) do |value1, value2|
  hash[value1] = value2
end
p hash == { 'a' => 'b' }
p result.nil?
