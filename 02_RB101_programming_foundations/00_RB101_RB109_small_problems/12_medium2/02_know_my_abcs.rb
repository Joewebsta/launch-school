def initialize_blocks
  [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
   ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
   ['V', 'I'], ['L', 'Y'], ['Z', 'M']]
end

def block_word?(word)
  blocks = initialize_blocks

  word.upcase.each_char do |char|
    if blocks.flatten.include?(char)
      blocks = blocks.reject { |block| block.include?(char) }
    else
      return false
    end
  end
  true
end

p block_word?('BX') == true
p block_word?('BATCH') == true
p block_word?('BUTCH') == false
p block_word?('jest') == true

# UNDERTAND THE PROBLEM

# Explicit rules

# Two letters per block
# B:O   X:K   D:Q   C:P   N:A
# G:T   R:E   F:S   J:W   H:U
# V:I   L:Y   Z:M

# If word can be spelled from this set of block -> return true
# Otherwise -> return false

# Input: String
# Output: Boolean

# Implicit rules
# MetHod should return boolean true or false not a truthy value
# String arguments can be lower or uppercase (aka case insensitive)

# EXAMPLES / TEST CASES
# block_word?('BATCH') == true
# block_word?('BUTCH') == false
# block_word?('jest') == true

# DATA STRUCTURE
# Block Options: array, hash, string
# Array -> [['B', 'O'], ['X', 'K']

# ALGORITHM
# Initialze a multidimensional array that contains the blocks
# Covert word to uppercase
# Loop through each word letter
# Determine if current letter exists in one of the blocks
#   Check if block array includes letter
#     If yes, remove the block - delete
#     If no, return false
# If all letter are represented by blocks, then return true
