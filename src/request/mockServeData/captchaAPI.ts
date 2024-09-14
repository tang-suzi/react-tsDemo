import Mock from "mockjs";

const list = [];
const captchaTemplate = Mock.Random.string("number", 4);
export default {
  captchaAPI: () => {
    return {
      code: 20000,
      msg: "操作成功",
      img: captchaTemplate,
      captchaEnabled: true,
      uuid: Mock.Random.guid(),
    };
  },
};
