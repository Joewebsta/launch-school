def calc_hand_value(cards)
  values = cards.map { |_suit, val| val }
  aces, values = values.partition { |val| val == "A" }

  tot_value = 0

  values.each do |value|
    if ["J", "Q", "K"].include?(value)
      tot_value += 10
    else
      tot_value += value.to_i
    end
  end

  aces.each do
    if tot_value <= 10
      tot_value += 11
    else
      tot_value += 1
    end
  end

  tot_value
  # require 'pry'; binding.pry
end

p calc_hand_value([["H", "A"], ["C", "A"], ["C", "A"], ["C", "A"]]) == 14
p calc_hand_value([["H", "A"], ["C", "A"], ["C", "A"], ["C", "A"],
                   ["C", "5"]]) == 19
p calc_hand_value([["H", "A"], ["C", "A"]]) == 12
p calc_hand_value([["H", "K"], ["C", "9"]]) == 19
p calc_hand_value([["H", "K"], ["C", "9"], ["H", "7"]]) == 26
p calc_hand_value([["H", "K"], ["C", "9"], ["H", "A"]]) == 20
p calc_hand_value([["H", "A"], ["H", "K"], ["C", "9"]]) == 20
p calc_hand_value([["H", "A"], ["H", "K"], ["C", "9"], ["H", "A"]]) == 21
p calc_hand_value([["H", "K"], ["C", "9"], ["H", "A"], ["H", "A"]]) == 21
p calc_hand_value([["H", "A"], ["H", "K"], ["H", "A"], ["C", "9"]]) == 21

# convert array of sub-arrays into array of string elemets.
# create local variable sum. Initialize to 0.
# loop over each element (string)
# IF ACE
# If current sum <= 10, ace can be added as 11
# If current sum >= 11 ace can be added as 1
# IF NOT ACE
# convert string to integer value
# add to sum
# return sum

# [["H", "A"], ["C", "A"], ["C", "A"], ["C", "A"]]
# ["A", "A", "A", "A"]
# [11, 1, 1, 1]
