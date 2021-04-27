module Taste
  def flavor(flavor)
    puts flavor.to_s
  end
end

class Orange
  include Taste
end

class HotSauce
  include Taste
end

# Orange lookup chain
# Orange > Taste > Object > Kernel > BasicObject

# HotSauce lookup chain
# HotSauce > Taste > Object > Kernel > BasicObject

HotSauce.new.flavor("Super hot!")
p HotSauce.ancestors
