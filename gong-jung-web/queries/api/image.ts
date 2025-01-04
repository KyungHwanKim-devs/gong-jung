import { GenerateImageRequestBody } from "@/types/image/generate";
import { requests } from "../request";

export const generateImage = async (payload: GenerateImageRequestBody) => {
  const { data } = await requests({
    method: "post",
    url: `/api/image/generate`,
    data: payload,
  });
  return data;
};

export const imageHealthCheck = async (imageName: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}/${imageName}`,
    { method: "GET" }
  );

  return response;
};
