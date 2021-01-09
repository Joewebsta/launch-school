VALID_CHOICES = %w(rock paper scissors)

def prompt(message)
  puts "=> #{message}"
end

def win?(first, second)
  (first == 'rock') && (second == 'scissors') ||
    (first == 'paper') && (second == 'rock') ||
    (first == 'scissors') && (second == 'paper')
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

prompt("Welcome to RPS!")

loop do
  user = ''

  loop do
    prompt("Choose one: #{VALID_CHOICES.join(', ')}")
    user = gets.chomp
    break if VALID_CHOICES.include?(user)
  end

  comp = %w(rock paper scissors).sample

  prompt("Your selection: #{user}.")
  prompt("Computer selection: #{comp}.")

  display_results(user, comp)

  prompt("Would you like to play again?")
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end
