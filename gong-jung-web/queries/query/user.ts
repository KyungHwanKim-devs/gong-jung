"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteUser, getMyInfo, signUpUser } from "../api/user";
import { deleteUserRequestBody, SignUpRequestBody } from "@/types/auth/auth";

export function useGetMyInfo(status: string = "authenticated") {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await getMyInfo();
      return data;
    },
    enabled: status === "authenticated",
  });
}

export function useSignUpUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: SignUpRequestBody) => signUpUser(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["signUpUser"],
      });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: deleteUserRequestBody) => deleteUser(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["deleteUser"],
      });
    },
  });
}
