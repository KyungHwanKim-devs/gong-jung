import { deleteUserRequestBody, SignUpRequestBody } from "@/types/auth/auth";
import { requests } from "../request";

export const getMyInfo = async () => {
  const { data } = await requests({
    method: "get",
    url: `/api/user/myinfo`,
  });
  return data;
};

export const signUpUser = async (payload: SignUpRequestBody) => {
  const { data } = await requests({
    method: "post",
    url: `/api/signup`,
    data: payload,
  });
  return data;
};

export const deleteUser = async (payload: deleteUserRequestBody) => {
  const { data } = await requests({
    method: "DELETE",
    url: `/api/user`,
    data: payload,
  });
  return data;
};
