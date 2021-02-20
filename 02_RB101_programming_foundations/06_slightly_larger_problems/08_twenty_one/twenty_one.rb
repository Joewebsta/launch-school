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
  formatted_cards = format_card_values(cards)
  total = calc_hand_value(participant)

  if participant[:name] == "Player"
    prompt "You have: #{formatted_cards}. Total: #{total}."
  else
    prompt "Dealer has: #{formatted_cards}. Total: #{total}"
  end
end

def format_card_values(cards)
  if cards.size == 2
    cards.join(' and ')
  else
    cards = cards[0..-2] << "and #{cards.last}"
    cards.join(', ')
  end
end

def display_cards_unknown(dealer)
  cards = dealer[:cards].map(&:last)
  cards = (cards[0, 1] << "and an unknown card").join(' ')
  prompt "Dealer has: #{cards}."
end

def hit(deck, player)
  player[:cards] << deck.shift
end

def busted?(participant)
  total = calc_hand_value(participant)
  total > 21
end

def dealer_turn(dealer, deck)
  display_cards(dealer)

  total = nil
  loop do
    total = calc_hand_value(dealer)
    break if total >= 17

    hit(deck, dealer)
    prompt("The dealer choses to hit!")

    break if busted?(dealer)

    display_cards(dealer)
  end

  prompt "The dealer chose to stay." if total >= 17
end

def winner(player, dealer)
  player_tot = calc_hand_value(player)
  dealer_tot = calc_hand_value(dealer)

  if player_tot > dealer_tot
    "player"
  else
    "dealer"
  end
end

def display_winner(player, dealer)
  player_tot = calc_hand_value(player)
  dealer_tot = calc_hand_value(dealer)

  prompt "Final total player: #{player_tot}."
  prompt "Final total dealer: #{dealer_tot}."
  if player_tot == dealer_tot
    prompt "Tie goes to the house. Dealer is the winner!"
  else
    prompt "#{winner(player, dealer).capitalize} is the winner!"
  end
end

def intro_header
  puts
  puts "*-*-*-*-*-* TWENTY-ONE *-*-*-*-*-*"
  puts
end

def section_header(text)
  puts
  puts "***** #{text} *****"
  puts
end

# MAIN LOGIC
loop do
  deck = (create_cards('S') + create_cards('D') +
          create_cards('C') + create_cards('H')).shuffle

  player = { name: "Player", cards: [] }
  dealer = { name: "Dealer", cards: [] }

  intro_header
  deal_cards(deck, player)
  deal_cards(deck, dealer)
  display_cards_unknown(dealer)
  display_cards(player)

  # Player turn
  section_header("PLAYER TURN")

  loop do
    action = nil

    loop do
      prompt "'hit' or 'stay'? ('h' for hit. 's' for stay.)"
      action = gets.chomp.downcase
      break if action.start_with?("h", "s")
      prompt "Sorry, that's an invalid action."
    end

    break if action.start_with?('s')

    hit(deck, player)
    break if busted?(player)

    display_cards(player)
  end

  if busted?(player)
    display_cards(player)
    prompt "You busted! The dealer wins."
  else
    prompt "You chose to stay!"
  end

  # Dealer turn
  if !busted?(player)
    section_header("DEALER TURN")
    dealer_turn(dealer, deck)

    if busted?(dealer)
      display_cards(dealer)
      prompt "The dealer busted! You win!"
    end
  end

  if !busted?(player) && !busted?(dealer)
    section_header("RESULTS")
    display_winner(player, dealer)
  end

  # Play again?
  puts
  answer = nil
  loop do
    prompt "Would you like to play again? ('y' or 'n')"
    answer = gets.chomp.downcase
    break if answer.start_with?("y", "n")
    prompt "Sorry that is an invalid answer."
  end

  break if answer.start_with?('n')
  system "clear"
  next if answer.start_with?('y')
end

prompt "Thank you for playing Twenty-one!"
