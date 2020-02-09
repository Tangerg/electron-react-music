interface Request {
  BASE_URL?: string;
  HEADERS?: object;
  TIME_OUT?: number;
}
const RequestConfig: Request = {
  BASE_URL: "http://119.23.220.235:3000/",
  HEADERS: { "Content-Type": "application/json;charset=utf-8" },
  TIME_OUT: 10000
};
export default RequestConfig;
