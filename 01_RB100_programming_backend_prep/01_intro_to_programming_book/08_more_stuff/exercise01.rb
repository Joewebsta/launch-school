def has_lab?(string)
  puts string =~ /lab/ ? string : 'No match here.'
end

has_lab?('laboratory')
has_lab?('experiment')
has_lab?('Pans Labyrinth')
has_lab?('elaborate')
has_lab?('polar bear')
