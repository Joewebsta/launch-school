numbers = {
  high: 100,
  medium: 50,
  low: 10
}

p low_numbers = numbers.filter { |_key, val| val < 25 }
