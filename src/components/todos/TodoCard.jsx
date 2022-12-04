import { Border, Media } from '../../styles';
import { remove, update } from '../../redux/todo';

import Button from '../Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

const TodoCard = ({ id, title, contents, done }) => {
  const todoDispatch = useDispatch();
  return (
    <StyledCard>
      <DetailLink to={`/${id}`} state={{ title, contents }}>
        상세보기
      </DetailLink>
      <TitleHeader>{title}</TitleHeader>
      <div style={{ minHeight: '80px' }}>
        <ContentParagraph>{contents}</ContentParagraph>
      </div>
      <HalfButtonContainer>
        <Button onClick={() => todoDispatch(update(id))} btnType="secondary" btnColor="success">
          {done ? '취소' : '완료'}
        </Button>
        <Button onClick={() => todoDispatch(remove(id))} btnType="secondary" btnColor="warning">
          삭제하기
        </Button>
      </HalfButtonContainer>
    </StyledCard>
  );
};

TodoCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

const StyledCard = styled.div`
  padding: 20px 20px 20px 20px;
  width: 300px;
  @media ${Media.mobile_lg} {
    width: 250px;
  }
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

const TitleHeader = styled.h3`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const ContentParagraph = styled.p`
  overflow: auto;
  height: 80px;
`;

const DetailLink = styled(Link)`
  color: gray;
  text-decoration: none;

  :hover {
    opacity: 0.7;
  }
`;

export default TodoCard;
