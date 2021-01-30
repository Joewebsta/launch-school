def leading_substrings(str)
  substrings = []

  1.upto(str.size) do |count|
    substrings << str.slice(0, count)
  end

  substrings
end

p leading_substrings('abc') == ['a', 'ab', 'abc']
p leading_substrings('a') == ['a']
p leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']
