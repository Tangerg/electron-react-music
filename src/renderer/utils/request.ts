// eslint-disable-next-line no-unused-vars
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import RequestConfig from "../config/request";

interface ResponseData<T> {}

axios.defaults.headers = RequestConfig.HEADERS;
axios.defaults.baseURL = RequestConfig.BASE_URL;
axios.defaults.timeout = RequestConfig.TIME_OUT;
axios.interceptors.request.use(); // TODO 请求拦截
axios.interceptors.response.use((response: AxiosResponse<any>) => {
  const { status, statusText, data } = response;
  console.log(status);
  console.log(statusText);
  console.log(data);
  return response as any;
}); // TODO 响应拦截
function request(config: AxiosRequestConfig) {
  return axios.request(config);
}
export default request;
