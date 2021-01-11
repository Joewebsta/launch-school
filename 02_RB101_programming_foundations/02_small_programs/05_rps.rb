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

def prompt(message)
  puts "=> #{message}"
end

def win?(first, second)
  WIN_CONDITIONS[first].include?(second)
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

prompt("Welcome to Rock, Paper, Scissors, Spock, Lizard!")

loop do
  user = ''

  loop do
    prompt("Choose one: r for Rock, p for paper, s for scissors, sp for spock, l for lizard.")
    user = FULL_NAMES[gets.chomp]
    break if VALID_CHOICES.include?(user)
  end

  comp = VALID_CHOICES.sample

  prompt("Your selection: #{user}.")
  prompt("Computer selection: #{comp}.")
  display_results(user, comp)

  prompt("Would you like to play again?")
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end
