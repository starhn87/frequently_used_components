import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Wrapper from "./common/Wrapper";

const Button = styled.button`
  width: 120px;
  height: 55px;
  border-radius: 55px;
  border-color: transparent;
  background-color: ${(props) => props.buttonColor};
  color: ${(props) => props.buttonTextColor};
  cursor: pointer;
`;

const ModalBox = styled.div`
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);

  ${(props) =>
    props.clicked
      ? `
        display: block;
    `
      : "display: none;"}
`;

const ModalContent = styled.div`
  width: 300px;
  height: 120px;
  margin: 20% auto;
  padding: 10px;
  border: 1px solid #888;
  border-radius: 12px;
  border-color: transparent;
  background-color: #fefefe;
`;

const CloseWrapper = styled.div`
  padding-bottom: 30px;
`;

const Close = styled.div`
  width: fit-content;
  color: #aaa;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  margin: 0 auto;
  cursor: pointer;
`;

const Text = styled.p`
  color: ${(props) => props.modalTextColor};
`;

function Modal({
  modalText = "HELLO CODESTATES!",
  modalTextColor = "#4800ce",
  buttonTextColor = "white",
  buttonColor = "#4800ce",
  outsideClose = false,
}) {
  const modal = useRef();
  const [clicked, setClicked] = useState(false);

  const openModal = useCallback(() => {
    if (!clicked) {
      setClicked(true);
    }
  }, [clicked]);

  const closeModal = useCallback(() => {
    if (clicked) {
      setClicked(false);
    }
  }, [clicked]);

  const outsideCloseModal = useCallback(
    (event) => {
      if (event.target === modal.current) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (outsideClose) {
      window.addEventListener("mouseup", outsideCloseModal);
    }

    return () => {
      if (outsideClose) {
        window.addEventListener("mouseup", outsideCloseModal);
      }
    };
  }, [outsideCloseModal, outsideClose]);

  return (
    <Wrapper title="Modal">
      <Button
        buttonColor={buttonColor}
        buttonTextColor={buttonTextColor}
        onMouseUp={openModal}
      >
        Open Modal
      </Button>
      <ModalBox ref={modal} clicked={clicked}>
        <ModalContent>
          <CloseWrapper>
            <Close onMouseUp={closeModal}>&times;</Close>
          </CloseWrapper>
          <Text modalTextColor={modalTextColor}>{modalText}</Text>
        </ModalContent>
      </ModalBox>
    </Wrapper>
  );
}

export default Modal;
