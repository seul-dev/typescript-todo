import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos([...todos, newTodo]);
    //setTodos((prevTodos) => {
    //   return prevTodos.concat(newTodo)
    // })
  };

  const removeTodoHandler = (todoId: string) => {
    const newTodoList = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodoList);
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
