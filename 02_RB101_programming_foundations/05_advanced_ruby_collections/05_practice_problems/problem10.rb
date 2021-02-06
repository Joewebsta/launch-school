# arr = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}]
arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }]

p(arr.map do |hash|
  hash.each_with_object({}) do |(key, val), incremented_hash|
    incremented_hash[key] = val + 1
  end
end)
