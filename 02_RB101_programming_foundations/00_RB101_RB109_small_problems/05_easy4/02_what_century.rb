# P - Understand the problem
# Explicit rules
# input - integer (year)
# output - string (century)

# output string begins with century number
# output string ends with st, nd, rd, or th
# new centuries begin with 01 (2000 -> 20th, 2001 -> 21st)

# E - Examples / test cases
# century(2000) == '20th'
# century(2001) == '21st'
# century(1965) == '20th'
# century(256) == '3rd'
# century(5) == '1st'
# century(10103) == '102nd'
# century(1052) == '11th'
# century(1127) == '12th'
# century(11201) == '113th'

# D - Data structure
# Integer (converted to string and concatenated with suffix)

# A - Algorithm
# If (year % 100).zero? divide by 100
# else add 100 to year
# divide year by 100 to get century number

# C - Code with intent

ENDINGS = {
  '1' => 'st',
  '2' => 'nd',
  '3' => 'rd'
}
ENDINGS.default = 'th'

def century_num(year)
  return (year / 100) if (year % 100).zero?
  (year + 100) / 100
end

def century_ending(century_num)
  last_two_num = century_num.slice(-2, 2)

  return 'th' if %w(11 12 13).include?(last_two_num)

  ENDINGS[century_num[-1]]
end

def century(year)
  century_num = century_num(year).to_s
  century_ending = century_ending(century_num)
  "#{century_num}#{century_ending}"
end

p century(2000) == '20th'
p century(2001) == '21st'
p century(1965) == '20th'
p century(256) == '3rd'
p century(5) == '1st'
p century(10103) == '102nd'
p century(1052) == '11th'
p century(1127) == '12th'
p century(11201) == '113th'
