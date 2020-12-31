def prompt(message)
  puts "=> #{message}"
end

def valid_number?(num)
  return true if num == '0'

  num.to_i != 0
end

def operation_to_message(operator)
  operator_messages = {
    "1" => 'Adding',
    "2" => 'Subtracting',
    "3" => 'Multiplying',
    "4" => 'Dividing'
  }

  operator_messages[operator]
end

name = nil
num1 = nil
num2 = nil
operator = nil
operator_prompt = <<-MSG
What operation would you like to perform?
   1) add
   2) subtract
   3) multiply
   4) divide
MSG

prompt("Welcome to Calculator! Enter your name:")

loop do
  name = gets.chomp
  if name.empty?
    prompt("Make sure to use a valid name.")
    prompt("Enter your name:")
  else
    break
  end
end

prompt("Hello #{name}!")

loop do
  loop do
    prompt("Please provide a number:")
    num1 = gets.chomp

    break if valid_number?(num1)
    prompt("Hmm... That doesn't look like a valid number")
  end

  loop do
    prompt("Please provide a second number:")
    num2 = gets.chomp

    break if valid_number?(num2)
    prompt("Hmm... That doesn't look like a valid number")
  end

  prompt(operator_prompt)

  loop do
    operator = gets.chomp

    if %w(1 2 3 4).include?(operator)
      break
    else
      promp("Please choose 1, 2, 3 or 4.")
    end
  end

  prompt("#{operation_to_message(operator)} the two numbers")

  num1 = num1.to_i
  num2 = num2.to_i

  puts case operator
       when '1' then "#{num1} + #{num2} = #{num1 + num2}"
       when '2' then "#{num1} - #{num2} = #{num1 - num2}"
       when '3' then "#{num1} * #{num2} = #{num1 * num2}"
       when '4' then "#{num1} / #{num2} = #{num1.to_f / num2}"
       end

  prompt("Would you like to perform another calculation? (Y/N)")
  answer = gets.chomp.downcase
  break unless answer.downcase.start_with?('y')
end

prompt("Thank you for using the calculator. Good bye!")
