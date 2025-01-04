"use client";

import { GenerateImageRequestBody } from "@/types/image/generate";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { generateImage, imageHealthCheck } from "../api/image";

export function useGenerateImage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: GenerateImageRequestBody) =>
      await generateImage(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["image"],
      });
    },
  });
}

export function useImageHealthCheck(imageName: string) {
  return useQuery({
    queryFn: async () => {
      const data = await imageHealthCheck(imageName);
      return data;
    },
    refetchInterval: (data) => {
      if (data instanceof Response) {
        return data.ok === false ? 5000 : false;
      }

      return 5000;
    },
    refetchIntervalInBackground: true,
    enabled: true,
    queryKey: ["imageHealthCheck", imageName],
  });
}
