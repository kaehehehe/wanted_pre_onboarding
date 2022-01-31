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
`;

const TabContents = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const TabOne = styled.li`
  width: 25%;
  height: 100%;
  padding: 10px;
  background-color: ${({ target }) => (target === '1' ? 'hotpink' : 'pink')};

  &:hover {
    background-color: hotpink;
  }
`;

const TabTwo = styled(TabOne)`
  background-color: ${({ target }) => (target === '2' ? 'hotpink' : 'pink')};
`;

const TabThree = styled(TabOne)`
  background-color: ${({ target }) => (target === '3' ? 'hotpink' : 'pink')};
`;

const TabFour = styled(TabOne)`
  background-color: ${({ target }) => (target === '4' ? 'hotpink' : 'pink')};
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
        <TabOne id="1" onClick={handleTab} target={target}>
          Tab 1
        </TabOne>
        <TabTwo id="2" onClick={handleTab} target={target}>
          Tab 2
        </TabTwo>
        <TabThree id="3" onClick={handleTab} target={target}>
          Tab 3
        </TabThree>
        <TabFour id="4" onClick={handleTab} target={target}>
          Tab 4
        </TabFour>
      </TabMenu>
      <TabContents>This is Tab {target} contents.</TabContents>
    </TabContainer>
  );
};

export default Tab;
