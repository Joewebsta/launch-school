def loan_calculator(amount, apr, duration)
  apr /= 100.0
  monthly_interest_rate = apr / 12

  calculate_monthly_payment(amount, monthly_interest_rate, duration)
end

def calculate_monthly_payment(amount, monthly_interest_rate, duration)
  amount * (monthly_interest_rate / (1 - (1 + monthly_interest_rate)**(-duration)))
end

p loan_calculator(10_000, 6, 128)
