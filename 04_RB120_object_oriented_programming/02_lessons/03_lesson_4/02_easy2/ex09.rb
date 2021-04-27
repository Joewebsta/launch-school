class Game
  def play
    "Start the game!"
  end
end

class Bingo < Game
  def rules_of_play
    # rules of play
  end
end

# If a #play method is added to the Bingo class then the #play method inherited
# by the Game class will be overwritten and not used when a Bingo instance object
# calls the #play method.
