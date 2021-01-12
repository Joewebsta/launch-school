VALID_CHOICES = %w(rock paper scissors spock lizard)

WIN_CONDITIONS = {
  'rock' => ['scissors', 'lizard'],
  'paper' => ['rock', 'spock'],
  'scissors' => ['paper', 'lizard'],
  'spock' => ['rock', 'scissors'],
  'lizard' => ['spock', 'paper']
}

FULL_NAMES = {
  'r' => 'rock',
  'p' => 'paper',
  's' => 'scissors',
  'sp' => 'spock',
  'l' => 'lizard'
}

user_wins = 0
comp_wins = 0

def prompt(message)
  puts "=> #{message}"
end

def win?(first, second)
  WIN_CONDITIONS[first].include?(second)
end

def gameover?(user_wins, comp_wins)
  user_wins == 5 || comp_wins == 5
end

def display_results(user, computer)
  if win?(user, computer)
    prompt("You won!")
  elsif win?(computer, user)
    prompt("Computer won!")
  else
    prompt("It's a tie!")
  end
end

def display_final_results(user_wins)
  if user_wins == 5
    prompt('You won 5 games. You are the grand winner!')
  else
    prompt('The computer won 5 games. The computer is the grand winner!')
  end
end

# def update_wins(user_wins, comp_wins)
#   user_wins = user_wins + 1
#   comp_wins = comp_wins + 1
# end

prompt("Welcome to Rock, Paper, Scissors, Spock, Lizard!")

loop do
  loop do
    # Player choices
    user = ''
    loop do
      prompt("Choose one: r for Rock, p for paper, s for scissors, sp for spock, l for lizard.")
      user = FULL_NAMES[gets.chomp]
      break if VALID_CHOICES.include?(user)
    end

    comp = VALID_CHOICES.sample

    # Display results
    prompt("Your selection: #{user}.")
    prompt("Computer selection: #{comp}.")
    display_results(user, comp)

    if win?(user, comp)
      user_wins += 1
    elsif win?(comp, user)
      comp_wins += 1
    end

    # update_wins(user_wins, comp_wins)

    # Display wins
    puts
    prompt("User wins: #{user_wins}")
    prompt("Comp wins: #{comp_wins}")

    break if gameover?(user_wins, comp_wins)
  end

  display_final_results(user_wins)
  user_wins = 0
  comp_wins = 0

  puts
  prompt("Would you like to play again?")
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end
