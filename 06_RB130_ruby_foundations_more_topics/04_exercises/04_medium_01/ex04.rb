def types(birds)
  yield(birds)
end

birds = %w(raven finch hawk eagle)
types(birds) { |_, _, *raptors| p raptors }
