class Television
  def self.manufacturer
    "manufacturer"
    # method logic
  end

  def model
    "model"
    # method logic
  end
end

tv = Television.new
# p tv.manufacturer # NoMethodError
p tv.model # works

p Television.manufacturer # works
# p Television.model # NoMethodError
