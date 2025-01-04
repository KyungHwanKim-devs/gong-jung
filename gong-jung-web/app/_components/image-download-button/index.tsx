"use client";
import React from "react";
import { Loading } from "../loading";
import { useImageHealthCheck } from "@/queries/query/image";
import { downloadImage } from "@/lib/download-image";

const ImageDownloadButton = ({
  imageName = "00092-3841419464.png",
}: {
  imageName: string;
}) => {
  const { data, isLoading } = useImageHealthCheck(imageName);

  if (isLoading || !data?.ok) {
    return (
      <div className="h-1/2">
        <Loading />
      </div>
    );
  }

  return (
    <button
      className="flex items-center justify-center rounded-md w-fit px-4 py-2 border-2 border-main-50"
      onClick={() => {
        downloadImage(data, imageName);
      }}
    >
      다운로드
    </button>
  );
};

export default ImageDownloadButton;
