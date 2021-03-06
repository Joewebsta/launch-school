WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
]

INITIAL_MARKER = " "
PLAYER_MARKER = "X"
COMPUTER_MARKER = "O"
FIRST_MOVE = "player"

def prompt(msg)
  puts "=> #{msg}"
end

def initialize_board
  (1..9).each_with_object({}) { |num, board| board[num] = INITIAL_MARKER }
end

def display_board(board, scores, round)
  system "clear"
  puts "ROUND: #{round}"
  puts "Player score: #{scores[:player]} | Computer score: #{scores[:computer]}"
  puts
  puts "You're a #{PLAYER_MARKER}. Computer is #{COMPUTER_MARKER}."
  puts ""
  puts "     |     |"
  puts "  #{board[1]}  |  #{board[2]}  |  #{board[3]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{board[4]}  |  #{board[5]}  |  #{board[6]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{board[7]}  |  #{board[8]}  |  #{board[9]}"
  puts "     |     |"
end

def empty_squares(board)
  board.keys.select { |num| board[num] == INITIAL_MARKER }
end

def place_piece!(board, current_player)
  if current_player == 'player'
    player_places_piece!(board)
  else
    computer_places_piece!(board)
  end
end

def player_places_piece!(board)
  square = ''

  loop do
    puts
    prompt("Choose a square: #{joinor(empty_squares(board))}.")
    square = gets.chomp.to_i
    break if empty_squares(board).include?(square)
    prompt("Sorry, that's not a valid choice.")
  end

  board[square] = PLAYER_MARKER
end

def computer_places_piece!(board)
  square = nil

  # offense
  WINNING_LINES.each do |line|
    square = find_at_risk_square(line, board, COMPUTER_MARKER)
    break if square
  end

  # defense
  if !square
    WINNING_LINES.each do |line|
      square = find_at_risk_square(line, board, PLAYER_MARKER)
      break if square
    end
  end

  if !square && (board[5] == ' ')
    square = 5
  end

  if !square
    square = empty_squares(board).sample
  end

  board[square] = COMPUTER_MARKER
end

def find_at_risk_square(line, board, marker)
  if board.values_at(*line).count(marker) == 2
    at_risk_square = board.select do |square, marker|
      line.include?(square) && marker == INITIAL_MARKER
    end

    return at_risk_square.keys[0]
  end

  nil
end

def board_full?(board)
  empty_squares(board).empty?
end

def someone_won_round?(board)
  !!detect_round_winner(board)
end

def detect_round_winner(board)
  WINNING_LINES.each do |line|
    return 'Player' if line.all? { |square| board[square] == PLAYER_MARKER }
    return 'Computer' if line.all? { |square| board[square] == COMPUTER_MARKER }
  end
  nil
end

def joinor(empty_squares, delimiter=', ', last_item_separator='or')
  case empty_squares.size
  when 0 then ''
  when 1 then empty_squares[0]
  when 2 then empty_squares.join(" #{last_item_separator} ")
  else
    empty_squares[-1] = "#{last_item_separator} #{empty_squares[-1]}"
    empty_squares.join(delimiter)
  end
end

def update_scores(board, scores)
  winner = detect_round_winner(board)

  case winner
  when 'Player' then scores[:player] += 1
  when 'Computer' then scores[:computer] += 1
  end
end

def someone_won_game?(scores)
  !!scores.values.any? { |score| score == 5 }
end

def detect_game_winner(scores)
  scores.find { |_player, score| score == 5 }.first.capitalize
end

def alternate_player(current_player)
  current_player == 'player' ? 'computer' : 'player'
end

def choose_player
  loop do
    puts
    prompt "Who would you like to choose first?"
    prompt "Press 'p' for player and 'c' for computer."
    answer = gets.chomp.downcase
    if answer.start_with?('p')
      return 'player'
    elsif answer.start_with?('c')
      return 'computer'
    else
      prompt 'Sorry. That is an invalid answer.'
    end
  end
end

puts
puts "**** Welcome to Tic Tac Toe! **** "
puts
puts "The first player to win 5 rounds wins the game!"
puts
puts "Press 'enter' to play."
gets

loop do
  scores = { player: 0, computer: 0 }
  round = 0

  loop do
    current_player = FIRST_MOVE
    current_player = choose_player if current_player == 'choose'
    # if first_move is 'choose'
    # prompt user for current player selection
    # if p -> set current player to 'player
    # if c -> set current player to 'computer'
    # if neither, tell user invalid answer and have them provide another answer
    round += 1
    board = initialize_board

    loop do
      display_board(board, scores, round)
      place_piece!(board, current_player)
      current_player = alternate_player(current_player)
      break if someone_won_round?(board) || board_full?(board)
    end

    update_scores(board, scores)
    display_board(board, scores, round)

    # Display winner
    puts
    if someone_won_round?(board)
      prompt "#{detect_round_winner(board)} wins the round and scores a point!"
    else
      prompt("It's a tie! No points are awarded.")
    end

    # Check for game winner
    break if someone_won_game?(scores)

    # Play again
    puts
    prompt "Press 'enter' to play round #{round + 1}."
    gets.chomp
  end

  # Display winner
  winner = detect_game_winner(scores)
  puts
  prompt "#{winner} won five rounds and wins the game!"

  # Play again
  puts
  prompt "Play again? (y or n)"
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

puts
prompt "Thanks for playing Tic Tac Toe! Goodbye."
