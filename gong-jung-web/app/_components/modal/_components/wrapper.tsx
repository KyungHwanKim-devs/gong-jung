import { CloseIcon } from "@/assets/svg/icon";
import React, { ReactNode, useEffect, useState } from "react";

interface WrapperProps {
  children: ReactNode;
  isOpen: boolean;
  closeHandler: any;
  className?: string;
  isCloseBtn?: boolean;
  closeColor?: string;
}

export default function Wrapper({
  children,
  isOpen,
  closeHandler,
  className = "",
  isCloseBtn = true,
  closeColor,
}: WrapperProps) {
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {}, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed left-[50%] top-[50%] z-50 grid max-w-screen w-1/2 translate-x-[-50%] translate-y-[-50%] gap-4 bg-white p-7 shadow-lg sm:rounded-sm ${
        isOpen ? "animate-fadeIn" : "animate-fadeOut"
      } ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {isCloseBtn && (
        <button
          className="absolute p-1 right-2 top-2 text-gray-600 hover:text-gray-900"
          onClick={closeHandler}
          aria-label="Close"
        >
          <CloseIcon className={`w-4 h-4 fill-${closeColor}`} />
        </button>
      )}

      {children}
    </div>
  );
}
