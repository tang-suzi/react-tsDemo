import { useEffect } from "react";
import styles from "./index.module.scss";
import initLoginBg from "./init";
const Login = () => {
  useEffect(() => {
    initLoginBg();
    window.onreset =  () => initLoginBg()
  }, []);
  return (
    <div className={styles.loginPage}>
      <canvas id="canvas" style={{ display: "block" }}></canvas>
    <div className={styles.loginBox}>
      <div className={styles.title}>
        <h1>asdasdasda</h1>
        <p>ccccc</p>
      </div>
    </div>
    </div>
  );
};

export default Login;
