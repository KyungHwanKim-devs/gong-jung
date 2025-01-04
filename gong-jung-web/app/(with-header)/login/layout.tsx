import { FOOTER_HEIGHT, HEADER_HEIGHT } from "@/constants";
import { isAuthCheck } from "@/lib/is-auth-check";
import React from "react";

const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  isAuthCheck("Unauthenticated page");

  return (
    <div
      className="flex w-full items-center justify-center"
      style={{
        height: `calc(100dvh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`,
      }}
    >
      {children}
    </div>
  );
};

export default LoginLayout;
