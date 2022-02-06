import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../style/container';
import { Title } from '../style/title';

const ToggleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme === 'dark' ? '#1c2128' : 'skyblue'};
`;

const ToggleTitle = styled(Title)`
  color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};
`;

const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 65px;
  height: 32px;
  cursor: pointer;
`;

const DarkModeIcon = styled.div`
  display: ${({ theme }) => (theme === 'dark' ? 'block' : 'none')};
  position: absolute;
  font-size: 25px;
  top: -1px;
  z-index: 100;
`;

const LightModeIcon = styled(DarkModeIcon)`
  display: ${({ theme }) => (theme === 'dark' ? 'none' : 'block')};
  left: 35px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #9da7b2;
    background-color: ${({ theme }) =>
  theme === 'dark' ? '#9da7b2' : '#1c2128'};
  border-radius: 32px;

  &::before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 300ms;
    border-radius: 50%;
    transform: ${({ theme }) => theme === 'dark' && 'translateX(33px)'};
  }

  &::after {
    content: '';
    position: absolute;
    font-size: 22px;
  }
`;

const Text = styled.div`
  margin-top: 10px;
  color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};
  font-size: 1.2rem;
`;

const Toggle = () => {
  const [theme, setTheme] = useState('dark');

  const handleToggle = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <ToggleContainer theme={theme}>
      <ToggleTitle theme={theme}>Toggle</ToggleTitle>
      <StyledToggle>
        <DarkModeIcon theme={theme}>🌜</DarkModeIcon>
        <LightModeIcon theme={theme}>🌞</LightModeIcon>
        <Input type="checkbox" onClick={handleToggle} />
        <Slider theme={theme} />
      </StyledToggle>
      <Text theme={theme}>{theme} mode</Text>
    </ToggleContainer>
  );
};

export default Toggle;
