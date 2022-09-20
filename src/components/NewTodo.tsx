import { useRef } from 'react';
import classes from './NewTodo.module.css';

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo = ({ onAddTodo }: NewTodoProps) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
