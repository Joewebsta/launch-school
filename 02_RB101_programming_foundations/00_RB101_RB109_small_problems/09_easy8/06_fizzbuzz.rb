def fizzbuzz(start_num, end_num)
  start_num.upto(end_num) do |num|
    result = ''
    result += 'Fizz' if (num % 3).zero?
    result += 'Buzz' if (num % 5).zero?
    puts(result.empty? ? num : result)
  end
end

fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
