def center_of(str)
  center_idx = str.length / 2

  if str.length.odd?
    str[center_idx]
  else
    str[center_idx - 1, 2]
  end
end

p center_of('I love ruby') == 'e'
p center_of('Launch School') == ' '
p center_of('Launch') == 'un'
p center_of('Launchschool') == 'hs'
p center_of('x') == 'x'
