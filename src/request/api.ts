import request from "./index";

// mock地址：https://www.ahsj.link/api/mock/trueExam.do?id=166427475470512000394
export const captchaAPI = (): Promise<CaptchaAPIResp> =>
  request.get("/prod-api/captchaImage");
// mock地址：https://www.ahsj.link/api/mock/trueExam.do?id=166427475470512000395
