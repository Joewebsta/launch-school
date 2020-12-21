def get_quote(person)
  return 'Do. Or do not. There is no try.' if person == 'Yoda'

  return 'I hear and I forget. I see and I remember. I do and I understand.' if person == 'Confucius'

  if person == 'Einstein'
    'Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.'
  end
end

puts 'Confucius says:'
puts "\"#{get_quote('Confucius')}\""
