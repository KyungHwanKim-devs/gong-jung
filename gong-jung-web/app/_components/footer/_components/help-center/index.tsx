import { useModal } from "@/hooks/modal";
import { usePostInquiry } from "@/queries/query/common";
import { toast } from "@/components/toast";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const HelpCenter = () => {
  const { status } = useSession();
  const { Modal, isOpen, openModal, closeModal } = useModal();

  const [inquiry, setInquiry] = useState("");
  const { mutateAsync: postInquiry } = usePostInquiry();

  const inquirySubmitHandler = async () => {
    if (inquiry.length === 0) {
      return toast.error("Please enter your inquiry");
    }

    try {
      await postInquiry({ inquiry });
      toast.success("Your inquiry has been submitted successfully");
      closeModal();
    } catch (error: any) {
      const err = error.response.data;
      toast.error(err.message);
    }
  };

  return (
    <div
      className="text-sm cursor-pointer"
      onClick={() =>
        status === "authenticated"
          ? openModal()
          : toast.error("Please login to use it.")
      }
    >
      Help Center
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        closeColor="white"
        className="!w-fit -lg:max-w-[90%] -lg:!w-full !bg-main-800 rounded"
      >
        <div className="flex flex-col gap-8 overflow-y-auto h-fit">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Help Center</h1>

            <p>
              Fill out your inquiry,
              <br />
              We will respond to your email address you signed up with.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-bold">How can we help?</p>

            <textarea
              className="flex overflow-y-auto w-full h-60 resize-none gap-3 break-all rounded border border-gray px-2 py-1 text-left text-xs text-black min-h-20"
              onChange={(e) => setInquiry(e.target.value)}
            />
          </div>

          <button
            className="px-2 py-1 rounded bg-main-950 hover:bg-main-50 hover:text-main-950 transition-all duration-300"
            onClick={inquirySubmitHandler}
          >
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default HelpCenter;
