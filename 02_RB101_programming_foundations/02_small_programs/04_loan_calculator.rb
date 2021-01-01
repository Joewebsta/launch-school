require 'yaml'

MESSAGES = YAML.load_file('04_loan_calculator_messages.yml')

def loan_calculator(amount, apr, duration)
  apr /= 100.0
  monthly_interest_rate = apr / 12

  calculate_monthly_payment(amount, monthly_interest_rate, duration)
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

prompt(message('welcome'))
prompt(message('name_prompt'))
name = gets.chomp
prompt("#{message('greeting')} #{name}!")

loan_calculator(10_000, 6, 128)
