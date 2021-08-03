# This class represents a todo item and its associated
# data: name and description. There's also a "done"
# flag to show whether this todo item is done.

class Todo
  DONE_MARKER = 'X'
  UNDONE_MARKER = ' '

  attr_accessor :title, :description, :done

  def initialize(title, description='')
    @title = title
    @description = description
    @done = false
  end

  def done!
    self.done = true
  end

  def done?
    done
  end

  def undone!
    self.done = false
  end

  def to_s
    "[#{done? ? DONE_MARKER : UNDONE_MARKER}] #{title}"
  end

  def ==(other_todo)
    title == other_todo.title &&
      description == other_todo.description &&
      done == other_todo.done
  end
end

# This class represents a collection of Todo objects.
# You can perform typical collection-oriented actions
# on a TodoList object, including iteration and selection.

class TodoList
  attr_accessor :title

  def initialize(title)
    @title = title
    @todos = []
  end

  def add(todo)
    raise TypeError, 'can only add Todo objects' unless todo.instance_of? Todo

    todos << todo
  end

  alias << add

  def size
    todos.size
  end

  def first
    todos.first
  end

  def last
    todos.last
  end

  def to_a
    todos.clone
  end

  def done?
    todos.all?(&:done?)
  end

  def item_at(pos)
    todos.fetch(pos)
  end

  def mark_done_at(pos)
    item_at(pos).done!
  end

  def mark_undone_at(pos)
    item_at(pos).undone!
  end

  def done!
    todos.each(&:done!)
  end

  def shift
    todos.shift
  end

  def pop
    todos.pop
  end

  def remove_at(pos)
    todos.delete(item_at(pos))
  end

  def to_s
    puts "---- #{title} ----"
    todos.each { |todo| puts todo }
  end

  private

  attr_reader :todos
end

todo1 = Todo.new("Buy milk")
todo2 = Todo.new("Clean room")
todo3 = Todo.new("Go to gym")
list = TodoList.new("Today's Todos")

list << (todo1) # adds todo1 to end of list, returns list
list << (todo2) # adds todo2 to end of list, returns list
list.add(todo3) # adds todo3 to end of list, returns list

# p list.size
# p list.first
# p list.last
# p list.to_a
# p list.done?

# p list.item_at
# p list.item_at(1)
# p list.item_at(100)

# list.mark_done_at
# list.mark_done_at(1)
# list.mark_done_at(0)
# p list
# list.mark_done_at(100)

# list.mark_undone_at(1)
# list.mark_undone_at(0)
# p list

# list.done!
# p list.done?

# p list.shift
# p list.pop

# list.remove_at
# p list.remove_at(0)
# list.remove_at(100)
# p list

# list.to_s
