import { useEffect, useState } from 'react';

import { SampleTodos } from '../constants/sampleTodos';
import Section from '../layouts/Section';
import TodoCard from '../components/todos/TodoCard';
import TodoForm from '../components/todos/TodoForm';
import TodoList from '../components/todos/TodoList';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = ({ title, contents }) => {
    setTodos(prev => prev.concat({ id: prev.length + 1, title, contents, done: false }));
  };

  const updateTodo = id => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const genTodos = done => {
    return todos
      ?.filter(raw => raw.done === done)
      .map(todo => (
        <TodoCard
          key={todo.id}
          {...todo}
          updateTodo={() => updateTodo(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ));
  };

  useEffect(() => {
    SampleTodos.forEach((todo, idx) => setTodos(prev => prev.concat({ ...todo, id: idx })));
  }, []);

  return (
    <>
      <Section>
        <TodoForm addTodo={addTodo} />
      </Section>
      <Section>
        <TodoList listTitle="Working... 🔥">{genTodos(false)}</TodoList>
        <TodoList listTitle="Done..! 🎉">{genTodos(true)}</TodoList>
      </Section>
    </>
  );
};
export default Todo;
