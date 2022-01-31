import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../style/container';
import { Title } from '../style/title';

const TagContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  width: 400px;
  height: auto;
  outline: none;
  border-style: solid;
  border-width: ${({ isFocus }) => (isFocus ? '3px' : '1px')};
  border-color: ${({ isFocus }) => (isFocus ? 'skyblue' : 'lightgray')};
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 5px;
`;

const StyledTag = styled.div`
  background-color: lightsteelblue;
  padding: 2px 5px;
  margin: 5px 5px 5px 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

const Text = styled.div`
  margin-right: 10px;
`;

const CloseBtn = styled.button`
  font-size: 20px;
`;

const Input = styled.input`
  width: 50%;
  margin: 5px;
  font-size: 16px;
  padding: 2px;
`;

const Tag = () => {
  const [tags, setTags] = useState(['hello']);
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);

  const deleteTag = (e) => {
    const index = tags.indexOf(e.target.id);
    const updateTags = [...tags];
    updateTags.splice(index, 1);
    setTags(updateTags);
  };

  const addTag = (e) => {
    const name = inputRef.current.value;
    if (e.key === 'Enter') {
      if (name === '' || tags.includes(name)) {
        inputRef.current.value = '';
      } else {
        const updateTags = [...tags];
        updateTags.push(name);
        setTags(updateTags);
        inputRef.current.value = '';
      }
    }
  };
  return (
    <TagContainer>
      <Title>Tag</Title>
      <Form isFocus={isFocus}>
        {tags.map((item) => (
          <StyledTag key={item}>
            <Text>{item}</Text>
            <CloseBtn id={item} onClick={deleteTag}>
              &times;
            </CloseBtn>
          </StyledTag>
        ))}
        <Input
          placeholder="Press enter to add tags"
          onKeyUp={addTag}
          ref={inputRef}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      </Form>
    </TagContainer>
  );
};

export default Tag;
