import request from "../utils/request";

export const getApi = (id?: number) => {
  return request({
    url: `/personalized${id}`,
    method: "get"
  });
};
export const getApi2 = () => {
  return request({
    url: "/personalized",
    method: "get"
  });
};
