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

def calc_hand_value(cards)
  # require 'pry'; binding.pry
  # values = cards.map { |_suit, val| val }
  aces, values = cards.partition { |val| val == "A" }
  sum_aces(aces, sum_non_aces(values))
end

def display_player_cards(player)
  cards = player[:cards].map(&:last)
  formatted_cards = format_card_values(cards)
  total = calc_hand_value(cards)

  prompt "You have: #{formatted_cards}. Total: #{total}."
end

def format_card_values(cards)
  if cards.size == 2
    cards.join(' and ')
  else
    cards[-1] = "and #{cards.last}"
    cards.join(', ')
  end
end

def hit(deck, player)
  player[:cards] << deck.shift
end

def player_turn(deck, player)
  action = ''
  loop do
    prompt "Would you like to 'hit' or 'stay'?"
    prompt "Press 'h' for hit or 's' for stay."
    action = gets.chomp
    break if action.start_with?('s', 'h')
    prompt "Sorry, that is an invalid answer."
  end

  hit(deck, player) if action.start_with?('h')
end

# MAIN LOGIC
puts "Welcome to Twenty-One!"

deck = (create_cards('S') + create_cards('D') +
        create_cards('C') + create_cards('H')).shuffle

player = { cards: [] }
dealer = { cards: [] }

deal_cards(deck, player)
deal_cards(deck, dealer)
display_player_cards(player)

# loop do
#   player_turn(deck, player)
#   display_player_cards(player)
#   break if player[:cards].map { |card| card.last.to_i }.sum > 21
# end
