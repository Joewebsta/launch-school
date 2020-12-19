stoplight = %w[green yellow red].sample

puts case stoplight
     when 'green'  then 'Go!'
     when 'yellow' then 'Slow down!'
     when 'red'    then 'Stop!'
     end
