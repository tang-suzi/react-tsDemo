interface CaptchaAPIResp {
  msg: string;
  img: string;
  code: number;
  captchaEnabled: boolean;
  uuid: string;
}

interface LoginReq {
  username: string;
  password: string;
  code: string;
  uuid: string;
}

interface LoginResp {
    msg: string;
    code: number;
    token: string
}
