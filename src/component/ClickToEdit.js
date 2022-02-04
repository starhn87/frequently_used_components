import React, { useEffect, useState } from "react";
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

function ClickToEdit({ defaultName, defaultAge, onNameChange, onAgeChange }) {
  const [name, setName] = useState(defaultName);
  const [age, setAge] = useState(defaultAge);
  const [editedName, setEditedName] = useState(defaultName);
  const [editedAge, setEditedAge] = useState(defaultAge);

  const onChange = (event, setter) => {
    const {
      target: { value },
    } = event;

    setter(value);
  };

  const onBlurName = (event) => {
    const {
      target: { value },
    } = event;

    setEditedName(value);
  };

  const onBlurAge = (event) => {
    const {
      target: { value },
    } = event;

    if (isNaN(value)) {
      alert("입력값이 올바르지 않습니다.");
      setAge(editedAge);
      event.target.focus();
      return;
    }

    setEditedAge(value);
  };

  useEffect(() => {
    onNameChange?.(editedName);
  }, [editedName, onNameChange]);

  useEffect(() => {
    onAgeChange?.(editedAge);
  }, [editedAge, onAgeChange]);

  return (
    <Wrapper title={"ClickToEdit"}>
      <Container>
        <Box>
          <Label htmlFor="username">이름</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={name || ""}
            onChange={(event) => onChange(event, setName)}
            onBlur={onBlurName}
          />
        </Box>
        <Box>
          <Label htmlFor="age">나이</Label>
          <Input
            type="text"
            id="age"
            name="age"
            value={age || ""}
            onChange={(event) => onChange(event, setAge)}
            onBlur={onBlurAge}
          />
        </Box>
      </Container>
      <span>
        {editedName && editedAge && `이름 ${editedName} 나이 ${editedAge}`}
      </span>
    </Wrapper>
  );
}

export default ClickToEdit;
