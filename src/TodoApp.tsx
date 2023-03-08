import React from "react";
import { Todo } from "./TodoItem";
import TodoList1 from "./Todolist1";
import TodoList12 from "./Todolist2";

export type TodoAppState = {
  todos: Todo[];
  newTodo: string;
  addbtn: boolean;
};


class TodoApp extends React.Component<{}, TodoAppState> {
  state: TodoAppState = {
    todos: [
      { id: 1, text: "Learn TypeScript", done: false },
      { id: 2, text: "Build a React app", done: false },
      {id: 3 , text: "Write an article about @xstate/test ", done: true}
    ],
    newTodo: "",
    addbtn: false,
  };

  handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTodo: event.target.value });
  };

  handleNewTodoSubmit = () => {
    const { newTodo, todos } = this.state;
    if (newTodo.trim() !== "") {
      this.setState({
        todos: [
          ...todos,
          {
            id: todos.length + 1,
            text: newTodo.trim(),
            done: false,
          },
        ],
        newTodo: "",
      });    
      this.handleNewTodoCencel();

    }     

  };

  handleNewTodoCencel = () => {
    this.setState({addbtn:this.state.addbtn=false})
  };

  addtodobtn = () => {
  this.setState({addbtn:this.state.addbtn = true})
}

  handleTodoToggle = (id: number) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    });
  };

  render() {
    const { todos, newTodo ,addbtn} = this.state;
    return (
      <div className="space-y-4 m-14">
        <h1 className="text-2xl"> XTodo </h1> <br></br>
        <h1 className="font-bold text-2xl"> Things to get done </h1>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-md">
          {" "}
          Refresh{" "}
        </button>
        <h2>Things to do </h2>
        <TodoList1 todos={todos} onToggle={this.handleTodoToggle} />
        
    {addbtn?
        <div className=" border-2 p-4 space-y-4 ">
          <h2 className="text-xl"> Create a Todo </h2>

          <input
            type="text"
            value={newTodo}
            onChange={this.handleNewTodoChange}
            placeholder="Write an article about XState"
            className="border-2 py-2 space "
          />
          <div>
            <button
              onClick={this.handleNewTodoSubmit}
              className="bg-yellow-500 text-white px-4 py-2 rounded-md  "
            >
              Save
            </button>
            <button
              onClick={this.handleNewTodoCencel}
              className=" px-4 py-2 rounded-md ml-4 border-2  "
            >
              Cencel
            </button>
          </div>
        </div> : <button className="py-2 px-4 bg-yellow-500 rounded-md" onClick={this.addtodobtn}> + Add a todo</button>}
        <TodoList12 todos={todos} onToggle={this.handleTodoToggle} />
      </div>

    );
  }
}

export default TodoApp;
