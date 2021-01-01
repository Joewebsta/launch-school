require 'yaml'

MESSAGES = YAML.load_file('04_loan_calculator_messages.yml')
name = nil
amount = nil

def loan_calculator(amount, apr, duration)
  apr /= 100.0
  monthly_interest_rate = apr / 12

  calculate_monthly_payment(amount, monthly_interest_rate, duration).round(2)
end

def calculate_monthly_payment(amount, monthly_interest_rate, duration)
  amount * (monthly_interest_rate / (1 - (1 + monthly_interest_rate)**(-duration)))
end

def prompt(input)
  puts "=> #{input}"
end

def message(key)
  MESSAGES[key]
end

def valid_name?(name)
  !name.empty?
end

prompt(message('welcome'))
prompt(message('name_prompt'))

loop do
  name = gets.chomp
  break if valid_name?(name)
  prompt(message('name_invalid'))
end

prompt("#{message('greeting')} #{name}!")

prompt(message('amount_prompt'))
amount = gets.chomp.to_f

prompt(message('apr_prompt'))
apr = gets.chomp.to_f

prompt(message('duration_prompt'))
duration = gets.chomp.to_i

monthly_amt = loan_calculator(amount, apr, duration)

prompt("#{message('result')}#{monthly_amt}.")
