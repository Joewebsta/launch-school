require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < Minitest::Test
  def setup
    @register = CashRegister.new(1000)
    @transaction = Transaction.new(50)
  end

  def test_accept_money
    @transaction.amount_paid = 50
    prev_amount = @register.total_money
    @register.accept_money(@transaction)

    assert_equal(prev_amount + 50, @register.total_money)
  end

  def test_change
    @transaction.amount_paid = 60
    assert_equal(10, @register.change(@transaction))
  end

  def test_give_receipt
    assert_output("You've paid $50.\n") do
      @register.give_receipt(@transaction)
    end
  end
end

class TransactionTest < Minitest::Test
  def setup
    @transaction = Transaction.new(100)
  end

  def test_prompt_for_payment
    input = StringIO.new("110/n")
    output = StringIO.new
    @transaction.prompt_for_payment({ input: input, output: output })

    assert_equal(110, @transaction.amount_paid)
  end
end
