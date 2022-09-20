import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

interface TodosProps {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}

const Todos = ({ items, onRemoveTodo }: TodosProps) => {
  return (
    <ul className={classes.todos}>
      {items.map((todo) => (
        <TodoItem todo={todo} onRemoveTodo={onRemoveTodo.bind(null, todo.id)} />
      ))}
    </ul>
  );
};

export default Todos;
