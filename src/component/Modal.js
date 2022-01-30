import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Box, Container, Title } from "./GlobalStyles";

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
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  ${(props) =>
    props.clicked
      ? `
        display: block;
    `
      : "display: none;"}
`;

const ModalContent = styled.div`
  margin: 20% auto;
  padding: 10px;
  width: 300px;
  height: 120px;
  border: 1px solid #888;
  border-radius: 12px;
  border-color: transparent;
  background-color: #fefefe;
`;

const Wrapper = styled.div`
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
  const modalBtn = useRef();
  const closeBtn = useRef();
  const modal = useRef();

  const [clicked, setClicked] = useState(false);
  const [closeOption, setCloseOption] = useState(outsideClose);

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
    const modalBtnCurrent = modalBtn.current;
    modalBtnCurrent.addEventListener("mouseup", openModal);

    const closeBtnCurrent = closeBtn.current;
    closeBtnCurrent.addEventListener("mouseup", closeModal);

    if (closeOption) {
      window.addEventListener("mouseup", outsideCloseModal);
    }

    return () => {
      modalBtnCurrent.removeEventListener("mouseup", openModal);
      closeBtnCurrent.removeEventListener("mouseup", closeModal);

      if (closeOption) {
        window.addEventListener("mouseup", outsideCloseModal);
      }
    };
  }, [clicked, openModal, closeModal, outsideCloseModal, closeOption]);

  return (
    <Box>
      <Title>Modal</Title>
      <Container>
        <Button
          ref={modalBtn}
          buttonColor={buttonColor}
          buttonTextColor={buttonTextColor}
        >
          Open Modal
        </Button>
        <ModalBox ref={modal} clicked={clicked}>
          <ModalContent>
            <Wrapper>
              <Close ref={closeBtn}>&times;</Close>
            </Wrapper>
            <Text modalTextColor={modalTextColor}>{modalText}</Text>
          </ModalContent>
        </ModalBox>
      </Container>
    </Box>
  );
}

export default Modal;
