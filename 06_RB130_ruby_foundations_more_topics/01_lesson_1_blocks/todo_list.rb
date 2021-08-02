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

  # rest of class needs implementation

  def add(todo)
    @todos << todo if todo.instance_of? Todo
  end

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
    todos.map(&:title)
  end

  def done?
    todos.all? { |todo| todo.done == true }
  end

  def item_at(pos)
    todos[pos]
  end

  def mark_done_at(pos)
    todos[pos].done!
  end

  def mark_undone_at(pos)
    todos[pos].undone!
  end

  def done!
    todos.each(&:done!)
  end

  private

  attr_reader :todos
end

todo1 = Todo.new("Buy milk")
todo2 = Todo.new("Clean room")
todo3 = Todo.new("Go to gym")
list = TodoList.new("Today's Todos")

list.add(todo1)                 # adds todo1 to end of list, returns list
list.add(todo2)                 # adds todo2 to end of list, returns list
list.add(todo3)                 # adds todo3 to end of list, returns list
# list.add(1)

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

list.done!
p list.done?

# TODO
# Add type error for adding todo of wrong class
# How to create alias methods for << and add
# How to create Argument error for item_at method + mark_done_at + mark done at
