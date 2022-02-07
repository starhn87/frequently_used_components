import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import PropType from "prop-types";

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

function Modal({
  value,
  onChange,
  onValueChange,
  buttonTextColor = "white",
  buttonColor = "#4800ce",
  outsideClose = false,
}) {
  const modal = useRef();

  const openModal = useCallback(() => {
    if (!value) {
      onChange(true);
    }
  }, [value, onChange]);

  const closeModal = useCallback(() => {
    if (value) {
      onChange(false);
    }
  }, [value, onChange]);

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
    <>
      <Button
        buttonColor={buttonColor}
        buttonTextColor={buttonTextColor}
        onMouseUp={openModal}
      >
        Open Modal
      </Button>
      <ModalBox ref={modal} clicked={value}>
        <ModalContent>
          <CloseWrapper>
            <Close onMouseUp={closeModal}>&times;</Close>
          </CloseWrapper>
          {onValueChange()}
        </ModalContent>
      </ModalBox>
    </>
  );
}

Modal.propTypes = {
  value: PropType.bool.isRequired,
  onChange: PropType.func.isRequired,
  onValueChange: PropType.func.isRequired,
  modalText: PropType.string,
  modalTextColor: PropType.string,
  buttonTextColor: PropType.string,
  buttonColor: PropType.string,
  outsideClose: PropType.bool,
};

export default Modal;
