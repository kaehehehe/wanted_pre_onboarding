import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../style/container';
import { Title } from '../style/title';

const ClickToEditContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  margin-bottom: 10px;
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    font-size: 1rem;
  }
  input {
    width: 150px;
    outline: none;
    border: 1px solid gray;
    padding-left: 3px;
    height: 30px;
    border-radius: 5px;
    font-size: 1rem;
  }
`;

const Text = styled.div`
  margin-top: 20px;
  font-size: 1.3rem;
`;

const ClickToEdit = () => {
  const [name, setName] = useState('Kae');
  const [age, setAge] = useState(10);
  const refName = useRef(null);
  const refAge = useRef(null);

  const handleInputName = () => {
    const newName = refName.current.value;
    if (newName === '') {
      refName.current.value = name;
    }
    setName(refName.current.value);
  };

  const handleInputAge = () => {
    const newAge = refAge.current.value;
    if (newAge === '' || newAge < 0) {
      refAge.current.value = age;
    } else {
      setAge(newAge);
    }
  };
  return (
    <ClickToEditContainer>
      <Title>ClickToEdit</Title>
      <Section>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          defaultValue={name}
          ref={refName}
          onBlur={handleInputName}
        />
      </Section>
      <Section>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          placeholder="Age"
          min="0"
          id="age"
          defaultValue={age}
          ref={refAge}
          onBlur={handleInputAge}
        />
      </Section>
      <Text>
        Name : {name} <br />
        Age : {age}
      </Text>
    </ClickToEditContainer>
  );
};

export default ClickToEdit;
