import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../style/container';
import { Title } from '../style/title';

const TabContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

const TabMenu = styled.ul`
  list-style: none;
  margin-top: 50px;
  display: flex;
  width: 100%;
  font-size: 1.3rem;
  position: absolute;
  color: white;
  cursor: pointer;

  li {
    width: 25%;
    height: 100%;
    padding: 10px;
    background-color: pink;
  }

  li.focused {
    background-color: hotpink;
  }
`;

const TabContents = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const Tab = () => {
  const [target, setTarget] = useState('1');

  const handleTab = (e) => {
    setTarget(e.target.id);
  };

  return (
    <TabContainer>
      <Title>Tab</Title>
      <TabMenu>
        <li
          id="1"
          onClick={handleTab}
          className={target === '1' ? 'focused' : ''}
        >
          Tab 1
        </li>
        <li
          id="2"
          onClick={handleTab}
          className={target === '2' ? 'focused' : ''}
        >
          Tab 2
        </li>
        <li
          id="3"
          onClick={handleTab}
          className={target === '3' ? 'focused' : ''}
        >
          Tab 3
        </li>
        <li
          id="4"
          onClick={handleTab}
          className={target === '4' ? 'focused' : ''}
        >
          Tab 4
        </li>
      </TabMenu>
      <TabContents>This is Tab {target} contents.</TabContents>
    </TabContainer>
  );
};

export default Tab;
