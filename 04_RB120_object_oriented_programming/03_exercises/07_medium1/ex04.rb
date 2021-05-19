class CircularQueue
  def initialize(buffer_size)
    @queue = Array.new(buffer_size)
  end

  def dequeue
    return nil if empty_queue?

    oldest = oldest_obj
    @queue[oldest_obj_idx] = nil
    oldest
  end

  def enqueue(obj)
    if empty_idx?
      @queue[next_empty_idx] = obj
    else
      @queue[oldest_obj_idx] = obj
    end
  end

  private

  def next_empty_idx
    @queue.find_index(&:nil?)
  end

  def empty_queue?
    @queue.all?(&:nil?)
  end

  def empty_idx?
    @queue.any?(&:nil?)
  end

  def oldest_obj
    @queue.compact.min
  end

  def oldest_obj_idx
    @queue.find_index(oldest_obj)
  end
end

queue = CircularQueue.new(3)
puts queue.dequeue.nil?

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue.nil?

queue = CircularQueue.new(4)
puts queue.dequeue.nil?

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 4
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue.nil?
