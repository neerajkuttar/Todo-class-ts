import React from "react";

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

export default TodoItem;