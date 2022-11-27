import { Border } from '../../styles';
import Button from '../Button';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const TodoCard = ({ title, contents, done, updateTodo, deleteTodo }) => {
  return (
    <StyledCard>
      <h3>{title}</h3>
      <div style={{ minHeight: '80px' }}>
        <p>{contents}</p>
      </div>
      <HalfButtonContainer>
        <Button onClick={updateTodo} btnType="secondary" btnColor="success">
          {done ? '취소' : '완료'}
        </Button>
        <Button onClick={deleteTodo} btnType="secondary" btnColor="warning">
          삭제하기
        </Button>
      </HalfButtonContainer>
    </StyledCard>
  );
};

TodoCard.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const StyledCard = styled.div`
  padding: 0 20px 20px 20px;
  max-width: 300px;
  border-radius: ${Border.containerRadius};
  box-shadow: 0 0 5px 1px rgba(253, 126, 64, 0.5);
`;

const HalfButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  & > button {
    font-size: 0.875rem;
  }
`;

export default TodoCard;
