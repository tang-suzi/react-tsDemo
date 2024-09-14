import Mock from "mockjs";
import captchaApi from './mockServeData/captchaAPI'

Mock.mock(/prod-api\/captchaImage/, captchaApi.captchaAPI)