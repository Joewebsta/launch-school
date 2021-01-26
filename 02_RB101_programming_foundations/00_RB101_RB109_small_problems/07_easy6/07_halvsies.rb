def halvsies(arr)
  split_arrs = []
  mid_index = (arr.size / 2.0).ceil

  split_arrs << arr[0, mid_index]
  split_arrs << arr[mid_index, (arr.size / 2)]

  split_arrs
end

p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
p halvsies([5]) == [[5], []]
p halvsies([]) == [[], []]
