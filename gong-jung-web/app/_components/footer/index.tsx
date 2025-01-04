"use client";
import { scrollTo } from "@/lib/scroll-to-target";
import { useRouter } from "next/navigation";
import HelpCenter from "./_components/help-center";
import TermsOfService from "./_components/terms-of-service";
import PrivacyPolicy from "./_components/privacy-policy";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();

  const scrollToFAQ = () => {
    if (window.location.href !== process.env.NEXT_PUBLIC_HOME_URL) {
      router.push("/");

      setTimeout(() => scrollTo("FAQ"), 300);
    }
  };

  return (
    <div className="max-w-[1200px] m-auto w-full px-4 py-8 border-t-2 border-main-100/20 bg-main-950 flex -lg:flex-col justify-between gap-4">
      <Link href="/" className="font-bold text-lg">
        <div className="border-2 border-error p-4">홈</div>
      </Link>

      <div className="flex flex-[0.25] justify-between">
        <div className="text-white/60 flex flex-col gap-2">
          <div className="font-bold text-white">Support</div>

          <HelpCenter />

          <div className="text-sm cursor-pointer" onClick={scrollToFAQ}>
            FAQs
          </div>
        </div>

        <div className="text-white/60 flex flex-col gap-2">
          <div className="font-bold text-white">Legal</div>

          <TermsOfService />

          <PrivacyPolicy />
        </div>
      </div>
    </div>
  );
};

export default Footer;
