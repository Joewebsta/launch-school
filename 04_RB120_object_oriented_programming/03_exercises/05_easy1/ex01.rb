=begin
  - Pass test cases
  - Add any required methods/instance variables
  - Do not make implementation details public
  - Input will always fit in terminal window
=end

class Banner
  def initialize(message)
    @message = message
    @tot_chars = message.length
  end

  def to_s
    [horizontal_rule, empty_line, message_line, empty_line,
     horizontal_rule].join("\n")
  end

  private

  def horizontal_rule
    "+#{'-' * (@tot_chars + 2)}+"
  end

  def empty_line
    "| #{' ' * @tot_chars} |"
  end

  def message_line
    "| #{@message} |"
  end
end

banner = Banner.new('To boldly go where no one has gone before.')
puts banner
# +--------------------------------------------+
# |                                            |
# | To boldly go where no one has gone before. |
# |                                            |
# +--------------------------------------------+

banner = Banner.new('')
puts banner
# +--+
# |  |
# |  |
# |  |
# +--+
