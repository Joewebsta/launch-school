class InvoiceEntry
  attr_accessor :quantity, :product_name

  def initialize(product_name, number_purchased)
    @quantity = number_purchased
    @product_name = product_name
  end

  def update_quantity(updated_count)
    self.quantity = updated_count if updated_count >= 0
  end
end

# You are altering the public interface of the class.

# Providing the instance variable @quantity a setter method will change the
# public interface of the class. This means @quantity can be modified directly
# (by using the quantity= method) rather than using the update_quantity method.
