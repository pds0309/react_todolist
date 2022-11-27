import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const TodoList = ({ listTitle, children }) => {
  return (
    <div>
      <div style={{ paddingLeft: '16px' }}>
        <h3>{listTitle}</h3>
      </div>
      <CardsContainer>{children}</CardsContainer>
    </div>
  );
};

TodoList.propTypes = {
  listTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
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
