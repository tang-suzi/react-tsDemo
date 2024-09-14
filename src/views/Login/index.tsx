import { useEffect, useState, ChangeEvent } from "react";
import styles from "./index.module.scss";
import initLoginBg from "./init";
import { Button, Input, Space } from "antd";
import "./index.less";
import { captchaAPI } from "@/request/api";
const Login = () => {
  const [captchaImg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
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
    const res = await captchaAPI();
    console.log(res);
  };
  const onSubmitLogin = () => {
    console.log(username, password, captcha);
  };
  useEffect(() => {
    getCaptchaImg()
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
                <img height={"30px"} src={captchaImg} alt="" />
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
