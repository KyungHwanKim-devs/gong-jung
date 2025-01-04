import { deleteUser } from "@/queries/api/user";
import { useGetMyInfo } from "@/queries/query/user";
import { toast } from "@/components/toast";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";

const Withdrawal = () => {
  const { status } = useSession();
  const { data: myInfo, isSuccess } = useGetMyInfo(status);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reason, setReason] = useState("");

  const withdrawalHandler = async () => {
    if (myInfo.email !== enteredEmail) {
      setEnteredEmail("error");

      return toast.error(
        "The email you entered does not match your registered email."
      );
    }

    await deleteUser({ reason });
    signOut();
  };

  return (
    isSuccess && (
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-center text-white">
          Withdrawal
        </h1>

        <div className="">
          To proceed with the withdrawal,
          <br />
          please enter your email and provide the reason for leaving.
        </div>

        <div className="flex flex-col gap-1">
          <label>Email</label>

          <input
            className={`text-black rounded px-2 py-1 text-xs 
                          border-2 ${
                            enteredEmail === "error" && "border-error"
                          }`}
            type="text"
            placeholder="Email"
            onChange={(e) => setEnteredEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Reasons for withdrawal</label>

          <textarea
            className="flex overflow-y-auto h-full resize-none gap-3 break-all rounded border border-gray px-2 py-1 text-left text-xs text-black min-h-20"
            placeholder="Reason(optional)"
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </div>

        <button
          className=" px-2 py-1 rounded bg-error hover:bg-error/80 transition-all duration-300"
          onClick={withdrawalHandler}
        >
          Withdrawal
        </button>
      </div>
    )
  );
};

export default Withdrawal;
