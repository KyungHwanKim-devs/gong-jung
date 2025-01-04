import { Modal } from "@/app/_components/modal";
import { useEffect, useState } from "react";

//?=============================================================
//?                      HOW TO USE MODAL
//?=============================================================
// const { Modal, isOpen, openModal, closeModal } = useModal();

// <Button onClick={openModal}>

// <Modal isOpen={isOpen} closeModal={closeModal}>
//   <ModalContents />
// </Modal>
//?=============================================================

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return {
    Modal,
    isOpen,
    openModal,
    closeModal,
  };
};
