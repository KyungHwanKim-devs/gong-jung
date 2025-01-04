import { useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

const MESSAGE = `Leave site?
Changes you made may not be saved.`;

const usePageLeavingGuard = ({ isDirty }: { isDirty: boolean }) => {
  const router = useRouter();
  const isInitialRender = useRef(true);

  const handleBeforeUnload = useCallback(
    (event: BeforeUnloadEvent) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = "!!!";
      }
    },
    [isDirty]
  );

  const handleRouteChange = useCallback(
    (href: string) => {
      if (isDirty && href === "/" && !confirm(MESSAGE)) {
        return false;
      }
      return true;
    },
    [isDirty]
  );

  const handlePopState = useCallback(() => {
    if (isDirty && !confirm(MESSAGE)) {
      history.pushState(null, "", "");
    } else {
      history.back();
    }
  }, [isDirty]);

  useEffect(() => {
    const originalPush = router.push;
    router.push = (href, options) => {
      if (!handleRouteChange(href)) return;

      originalPush(href, options);
    };

    window.onbeforeunload = handleBeforeUnload;

    return () => {
      // 정리
      router.push = originalPush;
      window.onbeforeunload = null;
    };
  }, [router, handleBeforeUnload, handleRouteChange]);

  useEffect(() => {
    if (isInitialRender.current) {
      history.pushState(null, "", "");
      isInitialRender.current = false;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [handlePopState]);
};

export default usePageLeavingGuard;
