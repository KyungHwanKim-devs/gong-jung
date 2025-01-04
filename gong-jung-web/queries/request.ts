"use client";

import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getSession } from "next-auth/react";

export const requests = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

requests.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const session: any = await getSession();

    if (session) {
      if (config.headers) {
        config.headers.authorization = session?.user?.accessToken || "";
      }
    }
    return Promise.resolve({ ...config } as InternalAxiosRequestConfig);
  },
  (error: AxiosError<AxiosRequestConfig>) => {
    return Promise.reject(error);
  }
);

requests.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> => {
    return response;
  },
  (error: AxiosError | Error) => {
    return Promise.reject(error);
  }
);
