import React, { useState } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
function App() {
  const [input, setInput] = useState("");
  const [hidden, setHidden] = useState(false);
  const [todo, setTodo] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodo([...todo, input]);
    setInput("");
  };
  return (
    <div className="app">
      <h1>Todo App</h1>

      <form>
        <FormControl>
          <InputLabel>Enter a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todo &&
          todo.map((to) => (
            <Todo
              key={to}
              todo={to}
              total={todo}
              hidden={hidden}
              setInputs={setHidden}
              setTodo={setTodo}
            />
          ))}
      </ul>
    </div>
  );
}

export default App;
