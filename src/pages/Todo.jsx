import Section from '../layouts/Section';
import TodoForm from '../components/todos/TodoForm';
import TodoList from '../components/todos/TodoList';

const Todo = () => {
  return (
    <>
      <Section>
        <TodoForm />
      </Section>
      <Section>
        <TodoList listTitle="Working... 🔥" done={false} />
        <TodoList listTitle="Done..! 🎉" done={true} />
      </Section>
    </>
  );
};
export default Todo;
