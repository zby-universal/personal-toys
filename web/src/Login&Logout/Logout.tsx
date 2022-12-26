import { Button, Form, Input } from "antd";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as UUID } from "uuid";
import AiStructrue from "../layouts/AiStructrue";
import "./index.scss";
const Logout = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const accountRef = useRef<any>();
  const passwordRef = useRef<any>();
  const handleSubmit = (e: any) => {
    let userdata = {
      Nickname: "暗世尘",
      HeadImgID: "",
      PersonalSign: "",
      Phone: "15850678199",
      Mail: "244317839@qq.com",
    };
    let nanoid = UUID();
    console.log("nanoid", nanoid);
    console.log("userdata", userdata);
    e.preventDefault();
    const account = accountRef.current.input.value;
    const password = passwordRef.current.input.value;
    //使用接口验证数据
    // axios({
    //   method: "GET",
    //   url: `https://localhost/user/${account}`,
    // }).then((response) => {
    //   if (response.data.password === password) {
    //     console.log("登录成功");
    //     setLogin(true);
    //   }
    // });
    //本地验证数据
    if (account === "小猛子" && password === "xiaomengzi") {
      console.log("登录成功");
      setLogin(true);
    } else {
      console.log("用户名或密码错误");
      console.log("account", account);
      console.log("password", password);
    }
  };
  const handleRegister = () => {
    navigate("/register");
  };
  useEffect(() => {
    if (login) {
      console.log("登录成功,正在跳转界面");
      navigate("/login");
    } else {
      console.log("等待用户登录");
    }
  });

  return (
    <AiStructrue>
      <div>
        <h1>登录界面</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="账号"
            name="account"
            rules={[{ required: true, message: "Please input your account!" }]}
          >
            <Input className="loadInput" ref={accountRef} placeholder="account" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input className="loadInput" ref={passwordRef} type="password" placeholder="password" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              登录
            </Button>
            <Button className="registerButton" type="default" onClick={handleRegister}>
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AiStructrue>
  );
};

export default Logout;
