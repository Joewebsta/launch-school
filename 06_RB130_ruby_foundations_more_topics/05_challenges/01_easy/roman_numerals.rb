# p RomanNumeral.new(1).to_roman
# RomanNumeral.new(2).to_roman
# RomanNumeral.new(3).to_roman
# RomanNumeral.new(4).to_roman
# RomanNumeral.new(5).to_roman
# RomanNumeral.new(6).to_roman
# RomanNumeral.new(9).to_roman
RomanNumeral.new(27).to_roman
# RomanNumeral.new(48).to_roman
# RomanNumeral.new(59).to_roman
# RomanNumeral.new(93).to_roman
# RomanNumeral.new(141).to_roman
# RomanNumeral.new(163).to_roman
# RomanNumeral.new(402).to_roman
# RomanNumeral.new(575).to_roman
# RomanNumeral.new(911).to_roman
# RomanNumeral.new(1024).to_roman
# RomanNumeral.new(3000).to_roman

=begin
I - 1
II
III
IV

V - 5
VI
VII
VIII
IX

X - 10

L - 50
C - 100
D - 500
M - 1000

1 => 1 I
2 => 2 II
3 => 3 III
4 => *4 IV
5 => 5 V
6 => 6 VI
7 => 7 VII
8 => 8 VIII
9 => *9 IX
10 => 10 X

27 => 20 7 XX VII
48 => *40 8 XL VIII
59 => 50 *9 L IX
93 => *90 3 XC III
141 => 100 *40 1 C XL I
163 => 100 60 3 C LX III
402 => *400 2 CD IIV
575 => 500 70 5 D LXX V
911 => *900 10 1 CM X I
1024 => 1000 20 4 M XX IV
3000 => 3000 MMM

EXCEPTIONS
4
9
40
90
400
900





=end
