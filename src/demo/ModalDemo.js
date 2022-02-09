import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "../component/common/Wrapper";
import Modal from "../component/Modal";

const Button = styled.button`
  width: 120px;
  height: 55px;
  border-radius: 55px;
  border-color: transparent;
  background-color: #4800ce;
  color: white;
  cursor: pointer;
`;

function ModalDemo() {
  const [value, setValue] = useState(false);

  const closeModal = () => {
    if (value) {
      setValue(false);
    }
  };

  return (
    <Wrapper title="Modal">
      <Button onClick={() => setValue(true)}>Open Modal</Button>
      <Modal
        value={value}
        closeModal={closeModal}
        content={"HELLO CODESTATES!"}
        outsideClose={true}
      />
    </Wrapper>
  );
}

export default ModalDemo;
