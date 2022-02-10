import React, { createContext, useContext, useState } from "react";
import Modal from "../component/Modal";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [value, setValue] = useState(false);
  const [content, setContent] = useState("");
  const [strictMode, setStrictMode] = useState(true);

  const openModal = (newContent, mode = true) => {
    setContent(newContent);
    setStrictMode(mode);
    setValue(true);
  };

  const closeModal = () => {
    setValue(false);
  };

  const onOutOfModalClick = (event) => {
    if (!strictMode) {
      if (event.target !== event.currentTarget) {
        return;
      }

      closeModal();
    }
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      {value && (
        <Modal
          closeModal={closeModal}
          content={content}
          onOutOfModalClick={onOutOfModalClick}
        />
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
