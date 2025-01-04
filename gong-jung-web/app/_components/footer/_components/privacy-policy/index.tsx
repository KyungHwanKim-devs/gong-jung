import { useModal } from "@/hooks/modal";
import React from "react";

const PrivacyPolicy = () => {
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <div className="text-sm cursor-pointer" onClick={openModal}>
      Privacy Policy
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        className="!w-2/3 -lg:!w-[90%] !h-2/3 -lg:!h-3/4 !bg-main-800 rounded"
      >
        Privacy Policy
      </Modal>
    </div>
  );
};

export default PrivacyPolicy;
