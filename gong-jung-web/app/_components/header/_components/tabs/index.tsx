"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function Tabs() {
  const { data: session } = useSession();

  const router = useRouter();

  return (
    <div className="flex gap-4 -lg:hidden">
      {/* 비회원 */}
      {/* {session === null && (
        <>
          <button
            className="font-bold text-lg"
            onClick={() => router.push("/signup")}
          >
            회원가입
          </button>
          <button className="font-bold text-lg" onClick={() => signIn()}>
            로그인
          </button>
        </>
      )} */}

      {/* 회원 */}
      {/* {session && session.user && ( */}
      <>
        <button
          className="font-bold text-lg "
          onClick={() => router.push("/input-data")}
        >
          입력
        </button>

        <button
          className="font-bold text-lg "
          onClick={() => router.push("/data-list")}
        >
          목록
        </button>

        {/* <button className="font-bold text-lg" onClick={() => signOut()}>
            LogOut
          </button> */}
      </>
      {/* )} */}
    </div>
  );
}

export default Tabs;
