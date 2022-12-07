import { Border, Media } from '../styles';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Button from '../components/Button';
import Section from '../layouts/Section';
import styled from '@emotion/styled';

const TodoDetail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  if (!state) {
    navigate('/');
  }

  const handlePrevButtonClick = () => {
    navigate(-1);
  };

  return (
    <Section>
      <TodoDetailBox>
        <TodoDetailHeader>
          <div>ID: {id}</div>
          <div>
            <Button btnType="secondary" onClick={handlePrevButtonClick}>
              이전으로
            </Button>
          </div>
        </TodoDetailHeader>
        <TodoDetailContents>
          <h2> {state.title}</h2>
          <p> {state.contents}</p>
        </TodoDetailContents>
      </TodoDetailBox>
    </Section>
  );
};

const TodoDetailBox = styled.div`
  margin: 120px auto 120px auto;
  max-width: 480px;
  min-height: 300px;
  padding: 18px;
  border-radius: ${Border.containerRadius};
  border: 1px solid rgba(13, 13, 13, 0.2);
  @media ${Media.mobile_lg} {
    margin: 30px auto 30px auto;
  }
`;

const TodoDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const TodoDetailContents = styled.div`
  margin-top: 10px;
`;

export default TodoDetail;
