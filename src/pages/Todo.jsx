import Section from '../layouts/Section';
import TodoForm from '../components/todos/TodoForm';
import { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  const addTodo = ({ title, contents }) => {
    setTodos(prev => prev.concat({ id: prev.length + 1, title, contents, status: 'progress' }));
  };
  return (
    <>
      <Section>
        <TodoForm addTodo={addTodo} />
      </Section>
      <Section></Section> {/*TODO: Todo-list Section */}
    </>
  );
};
export default Todo;
