joe = { name: 'Joe', age: 32 }

joe.each_key { |key| puts "Key: #{key}" }
joe.each_value { |val| puts "Value: #{val}" }
joe.each { |key, val| puts "Key: #{key}, Value: #{val}" }
