import { requests } from "../request";

export const postInquiry = async (payload: { inquiry: string }) => {
  const { data } = await requests({
    method: "POST",
    url: `/api/common/inquiry`,
    data: payload,
  });
  return data;
};
