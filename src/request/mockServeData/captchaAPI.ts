import { Random } from "mockjs";

// const list = [];
// const captchaTemplate = Random.string("number", 4);
export default {
  captchaAPI: () => {
    return {
      code: 20000,
      msg: "操作成功",
      img: Random.dataImage(),
      captchaEnabled: true,
      uuid: Random.guid(),
    };
  },
  loginAPI: () => {
    return {
      code: 20000,
      msg: "操作成功",
      token: Random.guid(),
    };
  },
};
