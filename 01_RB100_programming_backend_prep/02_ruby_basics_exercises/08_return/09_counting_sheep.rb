def count_sheep
  5.times do |sheep|
    puts sheep
    return if sheep >= 2
  end
end

p count_sheep

# The code above will print 0,1,2, nil
