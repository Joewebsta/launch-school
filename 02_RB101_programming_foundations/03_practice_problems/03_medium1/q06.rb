def mess_with_it(some_number)
  some_number += 8
end

answer = 42
new_answer = mess_with_it(answer)

p answer - 8 # => 34
