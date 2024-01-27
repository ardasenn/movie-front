import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { useModal } from "../../contexts/CustomModalContext";

export const CustomModal = () => {
  const navigate = useNavigate();
  const { message, navigateTo, isModalOpen, setModalOpen } = useModal();
  return (
    <>
      <Modal
        appElement={document.getElementById("root")}
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Example Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#370665",
            minWidth: "255px",
            maxWidth: "360px",
          },
        }}
      >
        <div className="relative h-16">
          <h2 className=" font-extrabold text-white ">{message}</h2>
          <div className="absolute right-0 mt-2">
            <Button
              backgroundColor="bg-primary"
              onClick={() => {
                setModalOpen(false);
                navigate(`${navigateTo}`);
              }}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
