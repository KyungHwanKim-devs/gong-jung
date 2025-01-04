"use client";
import { useModal } from "@/hooks/modal";
import { useGetMyInfo } from "@/queries/query/user";
import { useSession } from "next-auth/react";
import React from "react";
import Withdrawal from "./_components/withdrawal";

export default function MyPage() {
  const { status } = useSession();
  const { data: myInfo, isSuccess } = useGetMyInfo(status);
  const { Modal, isOpen, openModal, closeModal } = useModal();

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="flex rounded p-6 bg-main-800 gap-4 -lg:w-5/6">
        {/* <ul className="flex flex-col gap-4 justify-between">
          <li>My Account</li>
        </ul> */}

        {/* <div className="w-1 border-r-2 border-main-900"></div> */}

        <div className="w-full flex flex-col gap-4 ">
          <h1 className="text-2xl font-semibold text-center text-white">
            My Account
          </h1>

          {isSuccess && (
            <div className="pb-10 pt-5">
              <ul className="flex flex-col gap-4 -lg:gap-6">
                <li className="flex -lg:flex-col gap-2 -lg:gap-1">
                  <span className="font-bold w-40">Email</span>

                  {myInfo.email}
                </li>

                <li className="flex -lg:flex-col gap-2 -lg:gap-1">
                  <span className="font-bold w-40">Generation Count</span>

                  {myInfo.generationCount}
                </li>
              </ul>
            </div>
          )}

          <div className="flex justify-center">
            <button
              className="px-2 py-1 rounded bg-error hover:bg-error/80 transition-all duration-300"
              onClick={() => {
                openModal();
              }}
            >
              Withdrawal
            </button>

            <Modal
              className="!w-fit -lg:max-w-[90%] -lg:!w-full !h-fit -lg:max-h-3/4 !bg-main-dark rounded"
              isOpen={isOpen}
              closeModal={closeModal}
              closeColor="white"
            >
              <Withdrawal />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
