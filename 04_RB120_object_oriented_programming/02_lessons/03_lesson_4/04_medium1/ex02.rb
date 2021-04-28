class InvoiceEntry
  attr_reader :product_name
  attr_accessor :quantity

  def initialize(product_name, number_purchased)
    @quantity = number_purchased
    @product_name = product_name
  end

  def update_quantity(updated_count)
    # prevent negative quantities from being set
    self.quantity = updated_count if updated_count >= 0
  end
end

inv_entry = InvoiceEntry.new("book", 5)
p inv_entry
inv_entry.update_quantity(10)
p inv_entry

# The quantity setter method did not exist
