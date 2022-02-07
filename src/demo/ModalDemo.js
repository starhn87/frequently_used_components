import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Wrapper from "../component/common/Wrapper";
import Modal from "../component/Modal";

const Button = styled.button`
  width: 120px;
  height: 55px;
  border-radius: 55px;
  border-color: transparent;
  background-color: ${(props) => props.buttonColor};
  color: ${(props) => props.buttonTextColor};
  cursor: pointer;
`;

function ModalDemo() {
  const [value, setValue] = useState(false);

  const onChange = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  const openModal = useCallback(() => {
    if (!value) {
      onChange(true);
    }
  }, [value, onChange]);

  return (
    <Wrapper title="Modal">
      <Button
        buttonColor={"#4800ce"}
        buttonTextColor={"white"}
        onMouseUp={openModal}
      >
        Open Modal
      </Button>
      <Modal
        value={value}
        onChange={onChange}
        content={"HELLO CODESTATES!"}
        outsideClose={true}
      />
    </Wrapper>
  );
}

export default ModalDemo;
