=begin

UNDERSTAND THE PROBLEM

Goal: Calculate the hamming distance between two DNA strands

Explicit

INPUT
- String - represents DNA strand

OUTPUT
- Integer - represents total num of differences between DNA strands

Rules
- Two DNA sequences must be of equal lengths to compare
- If strand lengths are unequal, compute distance using shorter strand length

Implicit
- An empty strand returns an empty string

Data structure
- arrays (zip functionality)

Algorithm

DNA CLASS
  - initialize
    - attribute: @strand

HAMMING_DISTANCE METHOD
  - argument: strand2
  - convert @strand and strand2 to arrays
  - zip arrays into new multidimensional array
    - sub arrays will contain letter from @strand array amd strand2 array
  - Iterate over multi-array and remove any pairs that contain a nil
  - Iterate over multi-array and count the pairs that contain unique elements
=end

class DNA
  def initialize(strand)
    @strand = strand
  end

  # def hamming_distance(other_strand)
  #   strand_pairs = @strand.chars.zip(other_strand.chars)
  #   valid_strand_pairs = strand_pairs.reject { |pair| pair.include?(nil) }
  #   valid_strand_pairs.count { |a, b| a != b }
  # end

  # determine shorter strand
  # compare lengths. Set strand with shorter length to shorter local variable
  # initialze counter
  # iterate over shorter strand with_index
  # on each iteraction, compare the letter at strand[index]
  # Increment counter by 1 if the letters do not equal eachother
  # return counter

  def hamming_distance(other_strand)
    shorter = @strand.size < other_strand.size ? @strand : other_strand
    counter = 0

    shorter.chars.each_with_index do |_, idx|
      counter += 1 unless @strand[idx] == other_strand[idx]
    end

    counter
  end
end
