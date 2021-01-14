# Given the hash below
# Turn this into an array containing only two elements: Barney's name and Barney's number

flintstones = { "Fred" => 0, "Wilma" => 1, "Barney" => 2, "Betty" => 3,
                "BamBam" => 4, "Pebbles" => 5 }

# p(flintstones.filter { |name, _num| name == 'Barney' }.to_a.flatten)
p flintstones.assoc('Barney')
