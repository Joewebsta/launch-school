def stringy(num)
  (1..num).to_a.reduce('') do |string, iteration|
    string + (iteration.odd? ? '1' : '0')
  end
end

puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'
