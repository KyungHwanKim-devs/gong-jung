"use client";

//?=============================================================
//?                      HOW TO USE MODAL
//?=============================================================
// const { Modal, isOpen, openModal, closeModal } = useModal();

// <Button onClick={openModal}>

// <Modal isOpen={isOpen} closeModal={closeModal}>
//   <ModalContents />
// </Modal>
//?=============================================================

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Overlay from "./_components/overlay";
import Wrapper from "./_components/wrapper";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: any;
  isCloseBtn?: boolean;
  className?: string;
  closeColor?: string;
}

export function Modal({
  children,
  isOpen,
  isCloseBtn = true,
  className = "",
  closeModal,
  closeColor,
}: ModalProps) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const closeHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    closeModal();
  };

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

  if (!showModal) return null;

  return ReactDOM.createPortal(
    <Overlay closeHandler={closeHandler}>
      <Wrapper
        isOpen={isOpen}
        closeHandler={closeHandler}
        isCloseBtn={isCloseBtn}
        className={className}
        closeColor={closeColor as string}
      >
        {children}
      </Wrapper>
    </Overlay>,
    document.getElementById("modal-root") as HTMLElement
  );
}
