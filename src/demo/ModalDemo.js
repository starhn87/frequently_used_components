import React from "react";
import styled from "styled-components";
import Wrapper from "../component/common/Wrapper";
import { useModal } from "../ModalContext";

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
  const { openModal } = useModal();

  return (
    <Wrapper title="Modal">
      <Button onClick={() => openModal("HELLO CODESTATES!", false)}>
        Open Modal
      </Button>
    </Wrapper>
  );
}

export default ModalDemo;
