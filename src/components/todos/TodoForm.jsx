import { Border, Media } from '../../styles';

import Button from '../Button';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputContents, setInputContents] = useState('');

  const handleInputTitleChange = event => {
    setInputTitle(event.target.value);
  };

  const handleInputContentsChange = event => {
    setInputContents(event.target.value);
  };

  const clearInputs = () => {
    setInputTitle('');
    setInputContents('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!inputTitle || !inputContents) {
      alert('제목 또는 내용을 입력하세요');
      return;
    }
    addTodo({ title: inputTitle, contents: inputContents });
    clearInputs();
  };

  return (
    <FormBlock>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <InputBox>
            <Label htmlFor="title">제목:</Label>
            <Input
              name="title"
              type="text"
              id="title"
              value={inputTitle}
              onChange={handleInputTitleChange}
            />
            &nbsp;
            <Label htmlFor="contents">내용:</Label>
            <Input
              name="contents"
              type="text"
              id="contents"
              value={inputContents}
              onChange={handleInputContentsChange}
            />
          </InputBox>
          <div>
            <Button>추가</Button>
          </div>
        </FormContainer>
      </form>
    </FormBlock>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const FormBlock = styled.div`
  padding: 26px 30px 16px 30px;
  margin-bottom: 15px;
  border-radius: ${Border.containerRadius};
  box-shadow: 0 1px 1px 1px #dfd9d6;
  @media ${Media.mobile_lg} {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${Media.tablet} {
    flex-direction: column;
    grid-column-gap: 16px;
    grid-row-gap: 36px;
  }
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  @media ${Media.tablet} {
    flex-direction: column;
  }
`;

const Label = styled.label`
  font-weight: 700;
`;

const Input = styled.input`
  border-radius: ${Border.elementRadius};
  border: 1px solid;
  min-height: 38px;
  min-width: 240px;
`;

export default TodoForm;
