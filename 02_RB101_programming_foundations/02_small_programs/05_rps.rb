def prompt(message)
  puts "=> #{message}"
end

selections = {
  r: "rock",
  p: "paper",
  s: "scissors"
}

results = {
  r: {
    r: 'Rock and rock tie. Try again',
    p: 'Paper beats rock. You lose.',
    s: 'Rock beats scissors. You win!'
  },
  p: {
    r: 'Paper beats rock. You win!',
    p: 'Paper and paper tie. Try again.',
    s: 'Scissors beats rock. You lose.'
  },
  s: {
    r: 'Rock beats scissors. You lose.',
    p: 'Scissors beats paper. You win!',
    s: 'Scissors and scissors tie. Try again.'
  }
}

prompt("Welcome to Rock, Paper, Scissors!")

loop do
  prompt("Enter r) for rock, p) for paper or s) for scissors.")
  user_selection = gets.chomp.to_sym
  comp_selection = ['r', 'p', 's'].sample.to_sym

  user_selection_name = selections[user_selection]
  comp_selection_name = selections[comp_selection]
  results_message = results[user_selection][comp_selection]

  prompt("Your selection: #{user_selection_name}.")
  prompt("Computer selection: #{comp_selection_name}.")
  prompt(results_message)

  puts

  prompt("Would you like to play again?")
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end
