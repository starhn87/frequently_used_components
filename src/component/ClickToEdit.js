import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "./common/Wrapper";

const Container = styled.div`
  display: block;
  padding-bottom: 50px;
`;

const Box = styled.div`
  padding: 20px;
`;

const Label = styled.label`
  padding-right: 10px;
`;

const Input = styled.input`
  border: 1px solid #d1d1d1;
  padding: 10px;
`;

function ClickToEdit({ defaultName = "이승우", defaultAge = 28 }) {
  const [name, setName] = useState(defaultName);
  const [age, setAge] = useState(defaultAge);

  const onBlur = (event, setter) => {
    const {
      target: { value },
    } = event;

    setter(value);
  };

  return (
    <Wrapper title={"ClickToEdit"}>
      <Container>
        <Box>
          <Label for="username">이름</Label>
          <Input
            type="text"
            id="username"
            name="username"
            onBlur={(event) => onBlur(event, setName)}
          />
        </Box>
        <Box>
          <Label for="age">나이</Label>
          <Input
            type="text"
            id="age"
            name="age"
            onBlur={(event) => onBlur(event, setAge)}
          />
        </Box>
      </Container>
      <span>{`이름 ${name} 나이 ${age}`}</span>
    </Wrapper>
  );
}

export default ClickToEdit;
