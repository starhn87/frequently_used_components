import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import PropType from "prop-types";

const ModalBox = styled.div`
  position: fixed;
  overflow: auto;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);

  &.active {
    display: block;
  }
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

const ModalText = styled.p`
  color: #4800ce;
`;

function Modal({ value, closeModal, content, outsideClose = false }) {
  const modal = useRef();

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
    <ModalBox ref={modal} className={`${value ? "active" : ""}`}>
      <ModalContent>
        <CloseWrapper>
          <Close onMouseUp={closeModal}>&times;</Close>
        </CloseWrapper>
        <ModalText>{content}</ModalText>
      </ModalContent>
    </ModalBox>
  );
}

Modal.propTypes = {
  value: PropType.bool.isRequired,
  closeModal: PropType.func.isRequired,
  content: PropType.string.isRequired,
  outsideClose: PropType.bool,
};

export default Modal;
