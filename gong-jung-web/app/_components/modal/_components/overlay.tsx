import React, { ReactNode } from "react";

export default function Overlay({
  children,
  closeHandler,
}: {
  children: ReactNode;
  closeHandler: any;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 w-full h-full"
      onClick={closeHandler}
    >
      {children}
    </div>
  );
}
