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

def sum_non_aces(values)
  values.reduce(0) do |tot, value|
    tot + (["J", "Q", "K"].include?(value) ? 10 : value.to_i)
  end
end

def sum_aces(aces, tot_value)
  total = tot_value
  aces.reduce(total) { |tot| tot + (tot <= 10 ? 11 : 1) }
end

def calc_hand_value(participant)
  cards = participant[:cards].map { |_suit, value| value }
  aces, values = cards.partition { |val| val == "A" }
  sum_aces(aces, sum_non_aces(values))
end

def display_cards(participant)
  cards = participant[:cards].map(&:last)
  formatted_cards = format_card_values(cards, participant)
  total = calc_hand_value(participant)

  if participant[:name] == "Player"
    prompt "You have: #{formatted_cards}. Total: #{total}."
  else
    prompt "Dealer has: #{formatted_cards}."
  end
end

def format_card_values(cards, participant)
  if participant[:name] == 'Dealer'
    cards = cards[1..-1] << "an unknown card"
  end

  if cards.size == 2
    cards.join(' and ')
  else
    cards = cards[0..-2] << "and #{cards.last}"
    cards.join(', ')
  end
end

def hit(deck, player)
  player[:cards] << deck.shift
end

def busted?(participant)
  total = calc_hand_value(participant)
  total > 21
end

# MAIN LOGIC
puts "Welcome to Twenty-One!"

deck = (create_cards('S') + create_cards('D') +
        create_cards('C') + create_cards('H')).shuffle

player = { name: "Player", cards: [] }
dealer = { name: "Dealer", cards: [] }

deal_cards(deck, player)
deal_cards(deck, dealer)
display_cards(dealer)
display_cards(player)

# Player turn
loop do
  action = nil

  loop do
    prompt "'hit' or 'stay'? ('h' for hit. 's' for stay.)"
    action = gets.chomp
    break if action.start_with?("h", "s")
    prompt "Sorry, that's an invalid action."
  end

  hit(deck, player)

  break if action.start_with?('s') || busted?(player)
  display_cards(player)
end

if busted?(player)
  display_cards(player)
  prompt "You busted! The dealer wins."
else
  prompt "You chose to stay!"
end

# Dealer turn
