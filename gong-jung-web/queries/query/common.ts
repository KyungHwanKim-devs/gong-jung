import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postInquiry } from "../api/common";

export function usePostInquiry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: { inquiry: string }) =>
      await postInquiry(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["inquiry"],
      });
    },
  });
}
