import request from "../utils/request";

export const getApi = (id?: number) => {
  if (id === 123) {
    return "绝对路径成功";
  }
  /* return request({
    url: `/personalized${id}`,
    method: "get"
  }); */
};
export const getApi2 = () => {
  return request({
    url: "/personalized",
    method: "get"
  });
};
