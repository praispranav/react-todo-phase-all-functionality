import "./styles.css";
import TodoItems from "./todoitems";
import TodoData from "./tododata";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Todos: TodoData
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.Todos.map((todo) => {
        if (todo.id === id) {
          todo.complete = true;
        }
        return todo;
      });
      return {
        Todos: updatedTodos
      };
    });
  }
  render() {
    const TodoItem = TodoData.map((item) => (
      <TodoItems item={item} handleChange={this.handleChange} key={item.id} />
    ));

    return <div>{TodoItem}</div>;
  }
}

export default App;
