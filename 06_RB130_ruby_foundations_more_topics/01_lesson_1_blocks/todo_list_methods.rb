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

  def title_matches?(other_title)
    title.downcase.include?(other_title.downcase)
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

  def each
    todos.each { |todo| yield(todo) }
    self
  end

  def select
    list = TodoList.new(title)

    each do |todo|
      list << todo if yield(todo)
    end

    list
  end

  def find_by_title(title)
    select do |todo|
      return todo if todo.title_matches?(title)
    end
  end

  def all_done
    select(&:done?)
  end

  def all_not_done
    select { |todo| !todo.done? }
  end

  def mark_done(title)
    each do |todo|
      if todo.title_matches?(title) && !todo.done?
        todo.done!
        return todo
      end
    end

    nil
  end

  def mark_all_done
    each(&:done!)
  end

  def mark_all_undone
    each(&:undone!)
  end

  private

  attr_reader :todos
end

todo1 = Todo.new("Buy milk")
todo2 = Todo.new("Clean room")
todo3 = Todo.new("Go to gym")
todo4 = Todo.new("Clean the gym")

list = TodoList.new("Today's Todos")
list.add(todo1)
list.add(todo2)
list.add(todo3)
list.add(todo4)

# p list.find_by_title("gym")
# p list.all_done
# p list.all_not_done
# p list.mark_done("gym")

# p list.mark_all_done
# p list.mark_all_undone
