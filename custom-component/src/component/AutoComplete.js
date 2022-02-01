import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../style/container';
import { Title } from '../style/title';
import { FaSearch } from 'react-icons/fa';
import { words } from '../data/words';

const AutoCompleteContainer = styled(Container)`
  display: flex;
  justify-content: center;
  background-color: lightyellow;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchBar = styled.div`
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 400px;
  height: 45px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: ${({ hasOptions }) => (hasOptions ? '20px 20px 0 0' : '40px')};
  border-bottom: ${({ hasOptions }) => hasOptions && 'none'};
  margin-top: 55px;
`;

const Icon = styled.div`
  font-size: 15px;
  width: 20px;
  height: 20px;
  color: gray;
  margin: 0 8px;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  height: 30px;
  width: 100%;
  font-size: 15px;
`;

const AutoCompleteBox = styled.ul`
  list-style: none;
  background-color: white;
  font-size: 15px;
  visibility: ${({ hasOptions }) => (hasOptions ? 'block' : 'hidden')};
  border-radius: 0 0 5px 5px;
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 12px;

  li {
    padding: 10px;
    cursor: pointer;
  }

  li:hover {
    background-color: lightgray;
  }

  li.focused {
    background-color: lightgray;
  }
`;

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [hasOptions, setHasOptions] = useState(false);
  const [options, setOptions] = useState([]);
  const [focusIndex, setFocusIndex] = useState(-1);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filteredWords = [...words].filter(
      (word) => word.slice(0, value.length) === value
    );
    if (value === '') {
      setHasOptions(false);
    } else if (filteredWords.length > 0) {
      setHasOptions(true);
      setOptions(filteredWords);
    }
  };

  const handleOptionsClick = (targetWord) => {
    setInputValue(targetWord);
    setHasOptions(false);
  };

  const handleKeyUp = (e) => {
    if (options.length > 0) {
      if (e.key === 'ArrowUp') {
        if (focusIndex > 0) {
          setFocusIndex(focusIndex - 1);
        }
      } else if (e.key === 'ArrowDown') {
        if (focusIndex < options.length) {
          setFocusIndex(focusIndex + 1);
        }
      } else if (e.key === 'Enter') {
        handleOptionsClick(options[focusIndex]);
        setFocusIndex(-1);
        setHasOptions(false);
      }
    }
  };

  return (
    <AutoCompleteContainer>
      <Title>AutoComplete</Title>
      <Wrapper>
        <SearchBar hasOptions={hasOptions}>
          <Icon>
            <FaSearch />
          </Icon>
          <Input
            type="text"
            value={inputValue}
            placeholder="Type to search..."
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
          />
        </SearchBar>
        <AutoCompleteBox hasOptions={hasOptions}>
          {options.map((item, index) => (
            <li
              id={item}
              className={index === focusIndex ? 'focused' : ''}
              key={index}
              onClick={(e) => handleOptionsClick(e.target.id)}
            >
              {item}
            </li>
          ))}
        </AutoCompleteBox>
      </Wrapper>
    </AutoCompleteContainer>
  );
};

export default AutoComplete;
