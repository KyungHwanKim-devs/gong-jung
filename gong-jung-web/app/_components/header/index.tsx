"use client";
import React from "react";
import Link from "next/link";
import Tabs from "./_components/tabs";

export default function Header() {
  return (
    <div className="flex items-center justify-center w-full sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center w-[1200px] h-[72px] px-4">
        <Link href="/" className="font-bold text-lg">
          <div className="border-2 border-error p-4">홈</div>
        </Link>

        <Tabs />
      </div>
    </div>
  );
}
