require 'yaml'

MESSAGES = YAML.load_file('04_loan_calculator_messages.yml')
name = nil
amount = nil
apr = nil

def loan_calculator(amount, apr, duration)
  apr = apr.to_f / 100
  monthly_interest_rate = apr / 12

  calculate_monthly_payment(amount.to_f, monthly_interest_rate,
                            duration).round(2)
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

def valid_amount?(amount)
  !(amount.empty? || amount.to_f.negative?)
end

def valid_apr?(apr)
  !(apr.empty? || apr.to_f.negative?)
end

prompt(message('welcome'))
prompt(message('name_prompt'))

loop do
  name = gets.chomp
  break if valid_name?(name)
  prompt(message('name_invalid'))
end

prompt("#{message('greeting')} #{name}!")

loop do
  prompt(message('amount_prompt'))

  loop do
    amount = gets.chomp
    break if valid_amount?(amount)
    prompt(message('amount_invalid'))
  end

  prompt(message('apr_prompt'))
  prompt(message('apr_prompt_example'))

  loop do
    apr = gets.chomp
    break if valid_apr?(apr)
    prompt(message('apr_invalid'))
  end

  prompt(message('duration_prompt'))
  duration = gets.chomp.to_f

  monthly_amt = loan_calculator(amount, apr, duration)

  prompt("#{message('result')}#{monthly_amt}.")

  prompt(message('new_calculation'))
  new_calculation = gets.chomp.downcase
  break unless new_calculation == 'y'
end

prompt(message('farewell'))
