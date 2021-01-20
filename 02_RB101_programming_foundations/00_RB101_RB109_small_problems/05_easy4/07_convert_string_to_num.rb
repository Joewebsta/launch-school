# Determine length of string
# Create hash look up table that stores int strings as keys and int num as values
# Split string into individual characters (array)
# Convert array of strings to array of numbers using hash lookup (Map method)
# Reduce method - Loop through array of numbers and use original string length to multiply the num by correct power of 10 - count sum

DIGITS = {
  '0' => 0,
  '1' => 1,
  '2' => 2,
  '3' => 3,
  '4' => 4,
  '5' => 5,
  '6' => 6,
  '7' => 7,
  '8' => 8,
  '9' => 9
}

def string_to_integer(string_num)
  power = string_num.size - 1
  
  string_digits = string_num.chars
  int_digits = string_digits.map { |digit| DIGITS[digit]}
  int = int_digits.reduce(0) do |sum, int|
    sum += int * (10 ** power)
    power -= 1
    sum
  end
end

p string_to_integer('4321') == 4321
p string_to_integer('570') == 570