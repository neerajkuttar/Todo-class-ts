import React from "react";
// import TodoItem, { Todo } from "./TodoItem";
// import React from "react";

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodoProps = {
  todo: Todo;
  onToggle: (id: number) => void;
};

class TodoItem extends React.Component<TodoProps> {
  handleToggle = () => {
    const { todo, onToggle } = this.props;
    onToggle(todo.id);
  };
    id: number | undefined;
    done: any;

  render() {
    const { todo } = this.props;
    return (
      <li
        onClick={this.handleToggle}
      >
        <input type="checkbox" className="accent-yellow-500 " checked /> {todo.text}
      </li>
    );
  }
}

// export default TodoItem;


export type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
  };
  
  class TodoList2 extends React.Component<TodoListProps> {
    render() {
      const { todos, onToggle } = this.props;
      const todos2 = todos.filter(checktodo);
    function checktodo(todos: Todo) {
        return todos.done == true;
    }
      
      return (
        <> 
        <ul>
          {todos2.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
          ))}
        </ul>
</>      );
    }
  }
  export default TodoList2;