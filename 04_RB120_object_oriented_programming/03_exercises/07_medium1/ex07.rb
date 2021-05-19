class GuessingGame
  def initialize(lower_limit, upper_limit)
    @range = (lower_limit..upper_limit)
    @number = rand(@range)
    @remaining_guesses = Math.log2(@range.size).to_i + 1
    @player_guess = nil
  end

  def play
    loop do
      display_remaining_guesses
      player_guess
      player_guess_result
      break if correct_guess?

      update_remaining_guesses

      if no_more_guesses?
        display_no_more_guesses
        break
      end
    end
  end

  private

  def display_remaining_guesses
    puts "You have #{@remaining_guesses} guesses remaining."
  end

  def player_guess
    print "Enter a number between #{@range.min} and #{@range.max}: "

    guess = nil
    loop do
      guess = gets.chomp.to_i
      break if guess.between?(@range.min, @range.max)
      print "Invalid guess. " \
            "Enter a number between #{@range.min} and #{@range.max}: "
    end

    @player_guess = guess
  end

  def player_guess_result
    if @player_guess < @number
      puts "Your guess is too low."
      puts
    elsif @player_guess > @number
      puts "Your guess is too high."
      puts
    else
      puts "That's the number!"
      puts
      puts "You won!"
    end
  end

  def correct_guess?
    @number == @player_guess
  end

  def no_more_guesses?
    @remaining_guesses.zero?
  end

  def update_remaining_guesses
    @remaining_guesses -= 1
  end

  def display_no_more_guesses
    puts "You have no more guesses. You lost!"
  end
end

GuessingGame.new(501, 1500).play
