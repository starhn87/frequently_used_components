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

function ClickToEdit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(-1);

  const onBlurName = (event) => {
    const {
      target: { value },
    } = event;

    setName(value);
  };

  const onBlurAge = (event) => {
    const {
      target: { value },
    } = event;

    if (isNaN(value)) {
      alert("입력값이 올바르지 않습니다.");
      event.target.value = "";
      setAge(-1);
      event.target.focus();
      return;
    }

    setAge(value);
  };

  return (
    <Wrapper title={"ClickToEdit"}>
      <Container>
        <Box>
          <Label htmlFor="username">이름</Label>
          <Input
            type="text"
            id="username"
            name="username"
            onBlur={onBlurName}
          />
        </Box>
        <Box>
          <Label htmlFor="age">나이</Label>
          <Input type="text" id="age" name="age" onBlur={onBlurAge} />
        </Box>
      </Container>
      <span>{`이름 ${name} 나이 ${age !== -1 ? age : ""}`}</span>
    </Wrapper>
  );
}

export default ClickToEdit;
