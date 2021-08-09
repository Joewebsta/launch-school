# Modify the compute method so it takes a single argument and yields that argument
# to the block. Provide at least 3 examples of calling this new version of
# compute, including a no-block call.

def compute(num)
  return yield(num) if block_given?
  "Does not compute."
end

p compute(5) { |num| num + 5 + 3 }
p compute('c') { |char| 'a' + 'b' + char }

p compute(5)

# def compute
#   if block_given?
#     yield
#   else
#     'Does not compute.'
#   end
# end

# p compute { 5 + 3 } == 8
# p compute { 'a' + 'b' } == 'ab'
# p compute == 'Does not compute.'
