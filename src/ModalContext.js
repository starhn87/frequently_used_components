import { createContext, useContext, useState } from "react";
import Modal from "./component/Modal";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <ModalContext.Provider value={{ modal }}>
      {children}
      <Modal value={modal} closeModal={closeModal} />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
