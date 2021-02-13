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

def prompt(msg)
  puts "=> #{msg}"
end

def deal_cards(deck, participant)
  if participant[:cards].empty?
    participant[:cards].concat(deck.shift(2))
  else
    participant[:cards] << deck.shift
  end
end

def display_player_cards(player)
  card_values = player[:cards].map(&:last)
  card_values = format_card_values(card_values)

  puts "You have: #{card_values}."
end

def format_card_values(arr)
  if arr.size == 2
    arr.join(' and ')
  else
    arr[-1] = "and #{arr.last}"
    arr.join(', ')
  end
end

deck = (create_cards('S') + create_cards('D') +
        create_cards('C') + create_cards('H')).shuffle

player = { cards: [] }
dealer = { cards: [] }

# MAIN LOGIC
puts "Welcome to Twenty-One!"
deal_cards(deck, player)
deal_cards(deck, dealer)

display_player_cards(player)
