INITIAL_MARKER = " "
PLAYER_MARKER = "X"
COMPUTER_MARKER = "O"

def prompt(msg)
  puts "=> #{msg}"
end

def initialize_board
  (1..9).each_with_object({}) { |num, board| board[num] = INITIAL_MARKER }
end

def display_board(board)
  system "clear"
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

def player_places_piece!(board)
  square = ''

  loop do
    prompt("Choose a square #{empty_squares(board).join(', ')}:")
    square = gets.chomp.to_i
    break if empty_squares(board).include?(square)
    prompt("Sorry, that's not a valid choice.")
  end

  board[square] = PLAYER_MARKER
end

def computer_places_piece!(board)
  square = empty_squares(board).sample
  board[square] = COMPUTER_MARKER
end

def board_full?(board)
  empty_squares(board).empty?
end

def someone_won?(board)
  !!detect_winner(board)
end

def detect_winner(board)
  winning_lines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ]

  winning_lines.each do |line|
    return 'Player' if line.all? { |square| board[square] == PLAYER_MARKER }
    return 'Computer' if line.all? { |square| board[square] == COMPUTER_MARKER }
  end
  nil
end

board = initialize_board

loop do
  display_board(board)

  player_places_piece!(board)
  break if someone_won?(board) || board_full?(board)

  computer_places_piece!(board)
  break if someone_won?(board) || board_full?(board)
end

display_board(board)

if someone_won?(board)
  prompt "#{detect_winner(board)} won!"
else
  prompt("It's a tie!")
end
