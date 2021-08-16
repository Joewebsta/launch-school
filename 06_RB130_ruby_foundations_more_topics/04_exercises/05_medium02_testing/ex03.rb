# We now have the foundation of our CashRegister test class set up.
# Let's start testing! We'll start with the CashRegister#accept_money method.
# Write a test for the #accept_money method.

require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < Minitest::Test
  # def setup
  #   @transaction = Transaction.new(50)
  #   @register = CashRegister.new(100)
  # end

  def test_accept_money
    register = CashRegister.new(1000)
    transaction = Transaction.new(50)
    transaction.amount_paid = 50

    prev_amount = register.total_money
    register.accept_money(transaction)

    assert_equal(prev_amount + 50, register.total_money)
  end
end
