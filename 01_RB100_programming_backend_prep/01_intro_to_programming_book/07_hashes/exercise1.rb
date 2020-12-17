family = { uncles: %w[bob joe steve],
           sisters: %w[jane jill beth],
           brothers: %w[frank rob david],
           aunts: %w[mary sally susan] }

immediate_family = family.select do |key, _val|
  %i[sisters brothers].include?(key)
end.values.flatten

p immediate_family
