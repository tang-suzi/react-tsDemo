import { useEffect, useState, ChangeEvent } from "react";
import styles from "./index.module.scss";
import initLoginBg from "./init";
import { Button, Input, message, Space } from "antd";
import "./index.less";
import { captchaAPI, loginAPI } from "@/request/api";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [captchaImg, setCaptchaImg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const navgate = useNavigate();
  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onCaptchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptcha(e.target.value);
  };
  const getCaptchaImg = async () => {
    try {
      const { code, img, uuid } = await captchaAPI();
      if (code === 20000) {
        setCaptchaImg(img);
        localStorage.setItem("uuid", uuid);
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  const onSubmitLogin = async () => {
    if (!username || !password || !captcha) {
      message.error("请输入完整信息");
      return;
    }
    const params = {
      username,
      password,
      code: captcha,
      uuid: localStorage.getItem("uuid"),
    };
    try {
      const { code, msg, token } = await loginAPI(params);
      if (code === 20000) {
        message.success(msg);
        localStorage.setItem("ccc-token", token);
        localStorage.removeItem("uuid");
        navgate("/");
      }
    } catch (error) {
      throw message.error(error);
    }
  };
  useEffect(() => {
    getCaptchaImg();
    initLoginBg();
    window.onreset = () => initLoginBg();
  }, []);
  return (
    <div className={styles.loginPage}>
      {/* background */}
      <canvas id="canvas" style={{ display: "block" }}></canvas>
      <div className={`${styles.loginBox} loginBox`}>
        <div className={styles.title}>
          <h1>React 系统登陆</h1>
          <p>Demo</p>
        </div>
        {/* Form */}
        <div className="form">
          <Space
            direction="vertical"
            size={"large"}
            style={{ display: "flex" }}
          >
            <Input placeholder="用户名" onChange={onUsernameChange} />
            <Input.Password placeholder="密码" onChange={onPasswordChange} />
            <div className="captchaBox">
              <Input placeholder="验证码" onChange={onCaptchaChange} />
              <div className="captchaImg" onClick={getCaptchaImg}>
                <img height={"30px"} width={"100px"} src={captchaImg} alt="" />
              </div>
            </div>
            <Button
              className="loginBtn"
              block
              type="primary"
              onClick={onSubmitLogin}
            >
              登陆
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Login;
