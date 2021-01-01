require 'yaml'
MESSAGES = YAML.load_file('03_calculator_messages.yml')

def prompt(message)
  puts "=> #{message}"
end

def integer?(input)
  input.to_i.to_s == input
end

def float?(input)
  input.to_f.to_s == input
end

def number?(input)
  integer?(input) || float?(input)
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

prompt(MESSAGES['welcome'])

loop do
  name = gets.chomp
  if name.empty?
    prompt(MESSAGES['name_invalid'])
    prompt(MESSAGES['name_prompt'])
  else
    break
  end
end

prompt("#{MESSAGES['user_greeting']} #{name}!")

loop do
  loop do
    prompt(MESSAGES['number_prompt1'])
    num1 = gets.chomp

    break if number?(num1)
    prompt(MESSAGES['number_invalid'])
  end

  loop do
    prompt(MESSAGES['number_prompt2'])
    num2 = gets.chomp

    break if number?(num2)
    prompt(MESSAGES['number_invalid'])
  end

  prompt(operator_prompt)

  loop do
    operator = gets.chomp

    if %w(1 2 3 4).include?(operator)
      break
    else
      prompt(MESSAGES['operation_invalid'])
    end
  end

  prompt("#{operation_to_message(operator)} #{MESSAGES['operation_status']}")

  num1 = integer?(num1) ? num1.to_i : num1.to_f
  num2 = integer?(num2) ? num2.to_i : num2.to_f

  puts case operator
       when '1' then "#{num1} + #{num2} = #{num1 + num2}"
       when '2' then "#{num1} - #{num2} = #{num1 - num2}"
       when '3' then "#{num1} * #{num2} = #{num1 * num2}"
       when '4' then "#{num1} / #{num2} = #{num1.to_f / num2}"
       end

  prompt(MESSAGES['restart_prompt'])
  answer = gets.chomp.downcase
  break unless answer.downcase.start_with?('y')
end

prompt(MESSAGES['farewell'])
