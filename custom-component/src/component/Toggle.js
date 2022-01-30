import React, { useState } from 'react';
import styled from 'styled-components';
import '../style/toggle.css';
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

const Text = styled.div`
  margin-top: 10px;
  color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};
`;

const Toggle = () => {
  const [theme, setTheme] = useState('dark');

  const handleToggle = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <ToggleContainer theme={theme}>
      <ToggleTitle theme={theme}>Toggle</ToggleTitle>
      <label className="toggle">
        <input type="checkbox" />
        <span className="slider" onClick={handleToggle} />
      </label>
      <Text theme={theme}>{theme} mode</Text>
    </ToggleContainer>
  );
};

export default Toggle;
