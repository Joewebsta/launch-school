require 'yaml'

MESSAGES = YAML.load_file('04_loan_calculator_messages.yml')
name = nil
amount = nil
apr = nil
years = nil

def loan_calculator(amount, apr, years)
  apr = apr.to_f / 100
  monthly_interest_rate = apr / 12

  calculate_monthly_payment(amount.to_f, monthly_interest_rate,
                            years.to_i).round(2)
end

def calculate_monthly_payment(amount, monthly_interest_rate, years)
  amount * (monthly_interest_rate / (1 - (1 + monthly_interest_rate)**(-years)))
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

def valid_years?(years)
  !(years.empty? || years.to_i.negative?)
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

  prompt(message('years_prompt'))

  loop do
    years = gets.chomp
    break if valid_years?(years)
    puts(message('years_invalid'))
  end

  monthly_amt = loan_calculator(amount, apr, years)

  prompt("#{message('result')}#{monthly_amt}.")

  prompt(message('new_calculation'))
  new_calculation = gets.chomp.downcase
  break unless new_calculation == 'y'
end

prompt(message('farewell'))
