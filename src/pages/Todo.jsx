import Section from '../layouts/Section';
import { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Section></Section> {/*TODO: Todo Input Section */}
      <Section></Section> {/*TODO: Todo-list Section */}
    </>
  );
};
export default Todo;
