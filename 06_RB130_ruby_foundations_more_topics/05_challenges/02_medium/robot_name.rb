=begin

***************************** PROBLEM *****************************

****************************** RULES ******************************

Explict
- Input
- Output

- Robots are assigned a random name
- Names are a total of 5 characters
- Names start with 2 Capital letters and end with 3 digits

- "Reseting" a robot assigns it a new random nam

Implicit
-
-
-
-

*********************** EXAMPLES/TEST CASES ***********************

**************************** ALGORITHM ****************************
CREATE A RANDOM NAMES

2 TIMES
- Choose a captial letter between A-Z
  - Add each to string
  ("A".."Z").to_a.sample

3 TIMES
- Select a random letter between 0-9
- rand(100...999)

******************************* CODE ******************************
=end

class Robot
  @@names = []

  def name
    return @name if @name
    @name = generate_name while @@names.include?(@name) || @name.nil?
    @@names << @name
    @name
  end

  def reset
    @@names.delete(@name)
    @name = nil
  end

  private

  def generate_name
    result = ""
    2.times { result += ("A".."Z").to_a.sample }
    result += rand(100...999).to_s
  end
end
