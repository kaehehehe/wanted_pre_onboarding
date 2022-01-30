import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../style/container';
import { Title } from '../style/title';

const ModalContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 420px;
  height: 50%;
  padding: 10px;
  border-radius: 8px;
  background-color: lightsalmon;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Text = styled.span`
  font-size: 1.3rem;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 3px;
  right: 10px;
  font-size: 27px;
`;

const Button = styled.button`
  display: ${({ open }) => (open ? 'none' : 'block')};
  font-size: 1rem;
  padding: 0.8rem 1.2rem;
  border-radius: 30px;
  background-color: lightgreen;
  transition: all 250ms linear;

  &:hover {
    transform: scale(0.9);
  }
`;

const Modal = () => {
  const [open, setOpen] = useState(false);

  const handleClickBackground = (e) => {
    if (e.target.id === 'bg') {
      setOpen(false);
    }
  };

  return (
    <ModalContainer>
      {open && (
        <Background id="bg" onClick={handleClickBackground}>
          <Card>
            <CloseBtn onClick={() => setOpen(false)}>&times;</CloseBtn>
            <Text>Hi! I'm a frontend engineer Kae.</Text>
          </Card>
        </Background>
      )}
      <Title>Modal</Title>
      <Button onClick={() => setOpen(true)} open={open}>
        Open Modal
      </Button>
    </ModalContainer>
  );
};

export default Modal;
