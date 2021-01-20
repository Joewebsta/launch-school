def palindrome?(obj)
  obj == obj.reverse
end

p palindrome?('madam') == true
p palindrome?('Madam') == false          # (case matters)
p palindrome?("madam i'm adam") == false # (all characters matter)
p palindrome?('356653') == true
p palindrome?(["m", "a", "d", "a", "m"]) == true