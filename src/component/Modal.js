import React from "react";
import styled from "styled-components";
import PropType from "prop-types";
import { useModal } from "../context/ModalContext";

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
  text-align: center;
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

const Modal = ({ value, closeModal, content, onOutOfModalClick }) => {
  const { modalRef } = useModal();

  return (
    <ModalBox
      ref={modalRef}
      onClick={onOutOfModalClick}
      className={`${value ? "active" : ""}`}
    >
      <ModalContent>
        <CloseWrapper>
          <Close onMouseUp={closeModal}>&times;</Close>
        </CloseWrapper>
        <ModalText>{content}</ModalText>
      </ModalContent>
    </ModalBox>
  );
};

Modal.propTypes = {
  value: PropType.bool.isRequired,
  closeModal: PropType.func.isRequired,
  content: PropType.node.isRequired,
  onOutOfModalClick: PropType.func.isRequired,
};

export default Modal;
