import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [navigateTo, setNavigateTo] = useState("");

  const showModal = (msg, navigateTo) => {
    setMessage(msg);
    setNavigateTo(navigateTo);
    setModalOpen(true);
  };

  const values = { showModal, message, navigateTo, isModalOpen, setModalOpen };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
