HOURS_PER_DAY = 24
MINUTES_PER_HOUR = 60
MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR

def after_midnight(time)
  hours, minutes = time.split(':').map(&:to_i)
  (hours * MINUTES_PER_HOUR + minutes) % MINUTES_PER_DAY
end

def before_midnight(time)
  delta_min = MINUTES_PER_DAY - after_midnight(time)
  delta_min = 0 if delta_min == MINUTES_PER_DAY
  delta_min
end

p after_midnight('00:00') == 0
p after_midnight('12:34') == 754
p after_midnight('24:00') == 0
p before_midnight('00:00') == 0
p before_midnight('12:34') == 686
p before_midnight('24:00') == 0

p after_midnight("00:35") == 35
p after_midnight("13:20") == 800
p after_midnight("02:00") == 120
p before_midnight("23:57") == 3
p before_midnight("00:03") == 1437
p before_midnight("01:29") == 1351
