import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import numReducer from "@/store/numReducer";

const Page1: React.FC = () => {
  const dispatch = useDispatch();
  // 未模块前
  // const {num, sarr} = useSelector((state: RootState) => state);
  // console.log(num);

  // 模块化后
  const { num, sarr } = useSelector((state: RootState) => ({
    num: state.numReducer.num,
    sarr: state.arrReducer.sarr,
  }));

  const add = () => {
    dispatch({ type: "ADD" });
  };
  const asyncAdd = () => {
    // dispatch((dis: Function) => {
    //   setTimeout(() => {
    //     dis({ type: "ASYNC_ADD" });
    //   }, 1000);
    // });
    // thunk写法
    console.log(numReducer)
    dispatch(numReducer.asyncActions.asyncAdd)
  };
  const add2 = (value: number) => {
    dispatch({ type: "ADD2", value });
  };
  console.log(sarr);
  const pushArr = (value: number) => {
    dispatch({ type: "sarrPush", value });
  };
  return (
    <div>
      {num}
      <Button onClick={add}>add</Button>
      <Button onClick={asyncAdd}>异步add</Button>
      <Button onClick={() => add2(2)}>add2</Button>
      <Button onClick={() => pushArr(2)}>pushArr</Button>
    </div>
  );
};

export default Page1;
