def leading_substrings(str)
  substrings = []

  1.upto(str.size) do |count|
    substrings << str.slice(0, count)
  end

  substrings
end

def substrings(str)
  result = []

  while str.length > 0
    result.concat(leading_substrings(str))
    str.delete!(str[0])
  end

  result
end

p substrings('abcde') == [
  'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e'
]
