import PropTypes from 'prop-types';
import TodoCard from './TodoCard';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

const TodoList = ({ listTitle, done }) => {
  const { todos } = useSelector(state => state.todo);
  return (
    <div>
      <div style={{ paddingLeft: '16px' }}>
        <h3>{listTitle}</h3>
      </div>
      <CardsContainer>
        {todos
          ?.filter(todo => todo.done === done)
          .map(filtered => (
            <TodoCard key={filtered.id} {...filtered} />
          ))}
      </CardsContainer>
    </div>
  );
};

TodoList.propTypes = {
  listTitle: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

const CardsContainer = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;

export default TodoList;
