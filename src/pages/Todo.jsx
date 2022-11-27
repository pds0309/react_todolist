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
  //TODO: delete 기능 추가

  useEffect(() => {
    SampleTodos.forEach((todo, idx) => setTodos(prev => prev.concat({ ...todo, id: idx })));
  }, []);

  return (
    <>
      <Section>
        <TodoForm addTodo={addTodo} />
      </Section>
      <Section>
        <TodoList listTitle="Working... 🔥">
          {todos
            ?.filter(raw => !raw.done)
            .map(todo => (
              <TodoCard key={todo.id} {...todo} updateTodo={() => updateTodo(todo.id)} />
            ))}
        </TodoList>
        <TodoList listTitle="Done..! 🎉">
          {todos
            ?.filter(raw => raw.done)
            .map(todo => (
              <TodoCard key={todo.id} {...todo} updateTodo={() => updateTodo(todo.id)} />
            ))}
        </TodoList>
      </Section>
    </>
  );
};
export default Todo;
