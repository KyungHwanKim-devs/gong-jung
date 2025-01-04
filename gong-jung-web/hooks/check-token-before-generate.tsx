import { useGetMyInfo } from "@/queries/query/user";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const useCheckTokenBeforeGenerate = (requiredToken: number) => {
  const { status } = useSession();
  const { data: myInfo, isSuccess } = useGetMyInfo(status);
  const [canBeGenerate, setCanBeGenerate] = useState(false);

  useEffect(() => {
    if (isSuccess && myInfo?.imageToken >= requiredToken) {
      setCanBeGenerate(true);
      return;
    }
    setCanBeGenerate(false);
  }, [isSuccess, myInfo, requiredToken]);

  return { canBeGenerate };
};

export default useCheckTokenBeforeGenerate;
