"use client";

import ReactQueryProvider from "@/app/_components/provider/react-query-provider";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { Toaster } from "sonner";

interface Props {
  children: ReactNode;
}
function Providers({ children }: Props) {
  return (
    <ReactQueryProvider>
      <SessionProvider>
        {children}
        <div id="modal-root" />
        <Toaster />
      </SessionProvider>
    </ReactQueryProvider>
  );
}

export default Providers;
