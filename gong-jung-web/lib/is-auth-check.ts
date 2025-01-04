import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const isAuthCheck = (
  type: "Authentication page" | "Unauthenticated page"
) => {
  const token =
    cookies().get("next-auth.session-token") ||
    cookies().get("__Secure-next-auth.session-token");

  if (type === "Authentication page" && !token?.value) {
    return redirect("/");
  }

  if (type === "Unauthenticated page" && token?.value) {
    return redirect("/");
  }
};
