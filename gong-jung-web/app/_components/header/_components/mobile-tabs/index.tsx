import { CloseIcon, HamburgerIcon, LogoIcon } from "@/assets/svg/icon";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MobileTabs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div
      className="lg:hidden flex items-center p-4 pr-0 cursor-pointer"
      onClick={() => setIsOpen(true)}
    >
      <HamburgerIcon fill="white" />

      {isOpen && (
        <div
          className={`fixed top-0 left-0 right-0 w-screen h-screen bg-main-950`}
        >
          <div className="h-[72px] px-4 flex justify-between items-center">
            <LogoIcon />

            <CloseIcon
              className="w-5 h-5 fill-white cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            />
          </div>

          <div className="px-8">
            {/* 비회원 */}
            {session === null && (
              <>
                <div
                  className="py-4 border-b border-main-900 cursor-pointer"
                  onClick={() => signIn()}
                >
                  Login
                </div>

                <div
                  className="py-4 border-b border-main-900 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                    router.push("/signup");
                  }}
                >
                  SignUp
                </div>
              </>
            )}

            {/* 회원 */}
            {session && session.user && (
              <>
                <div
                  className="py-4 border-b border-main-900 cursor-pointer"
                  onClick={() => router.push("/image-generate")}
                >
                  Images
                </div>

                <div
                  className="py-4 border-b border-main-900 cursor-pointer"
                  onClick={() => router.push("/mypage")}
                >
                  MyPage
                </div>

                <div
                  className="py-4 border-b border-main-900 cursor-pointer"
                  onClick={() => signOut()}
                >
                  LogOut
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileTabs;
