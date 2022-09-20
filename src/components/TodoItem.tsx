import Todo from '../models/todo';
import classes from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  onRemoveTodo: () => void;
}

const TodoItem = ({ todo, onRemoveTodo }: TodoItemProps) => {
  return (
    <li className={classes.item} key={todo.id} onClick={onRemoveTodo}>
      {todo.text}
    </li>
  );
};

export default TodoItem;
