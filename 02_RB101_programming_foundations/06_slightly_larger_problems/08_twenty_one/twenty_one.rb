def create_cards(suit)
  2.upto(14).with_object([]) do |n, cards|
    value = n.to_s

    case n
    when 11 then value = 'J'
    when 12 then value = 'Q'
    when 13 then value = 'K'
    when 14 then value = 'A'
    end

    cards << [suit, value]
  end
end

deck = create_cards('S') + create_cards('D') + create_cards('C') + create_cards('H')

p deck

# player = {
#   cards: []
# }

# dealer = {
#   cards: []
# }
