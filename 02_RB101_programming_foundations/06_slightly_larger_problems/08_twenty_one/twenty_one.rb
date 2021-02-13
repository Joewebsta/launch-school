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
  "=> #{msg}"
end

def deal_cards(deck, participant)
  if participant[:cards].empty?
    participant[:cards].concat(deck.shift(2))
  else
    participant[:cards] << deck.shift
  end
end

deck = (create_cards('S') + create_cards('D') + create_cards('C') + create_cards('H')).shuffle
player = { cards: [] }
dealer = { cards: [] }

prompt "Welcome to Twenty-One!"

deal_cards(deck, player)
deal_cards(deck, dealer)
