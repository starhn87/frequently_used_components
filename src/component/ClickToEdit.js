import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  padding: 10px;
`;

const Label = styled.label`
  padding-right: 10px;
`;

const Input = styled.input`
  border: 1px solid #d1d1d1;
  padding: 10px;
`;

function ClickToEdit({ title, name, value, onChange }) {
  const [editingValue, setEditingValue] = useState(value);

  const onBlur = () => {
    onChange(editingValue);
  };

  return (
    <Box>
      <Label htmlFor="username">{title}</Label>
      <Input
        type="text"
        name={name}
        value={editingValue}
        onChange={(event) => setEditingValue(event.target.value)}
        onBlur={onBlur}
      />
    </Box>
  );
}

export default ClickToEdit;
