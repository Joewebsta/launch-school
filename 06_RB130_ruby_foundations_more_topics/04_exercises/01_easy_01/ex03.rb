def missing(arr)
  (arr[0]..arr[-1]).reject { |num| arr.include?(num) }
end

missing([-3, -2, 1, 5])
# p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
# p missing([1, 2, 3, 4]) == []
# p missing([1, 5]) == [2, 3, 4]
# p missing([6]) == []
