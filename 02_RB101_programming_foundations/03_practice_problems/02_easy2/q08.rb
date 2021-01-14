# Shorten this sentence:

advice = "Few things in life are as important as house training your pet dinosaur."
# ...remove everything starting from "house".

# Review the String#slice! documentation, and use that method to make the return value "Few things in life are as important as ".
# But leave the advice variable as "house training your pet dinosaur.".

# ATTEMPT 1
# sliced_advice = advice.slice!(0..38)
# p sliced_advice
# p advice

# CORRECT ANSWER
p advice.slice!(0, advice.index('house'))
p advice
