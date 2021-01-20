def running_total(num_arr)
  sum = 0
  num_arr.map { |num| sum += value }
  
  # running_total_arr = []
  # idx = 0

  # while idx < num_arr.size    
  #   if idx.zero?
  #     running_total_arr.push(num_arr[idx]) 
  #   else
  #     running_total_arr.push(num_arr[idx] + running_total_arr[idx - 1])
  #   end

  #   idx += 1
  # end

  # running_total_arr
end



running_total([2, 5, 13]) == [2, 7, 20]
running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
running_total([3]) == [3]
running_total([]) == []