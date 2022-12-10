import { Button, Checkbox, Form, Input } from "antd";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AiStructrue from "../layouts/AiStructrue";

const Logout = () => {
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();
  console.log("navigate", navigate);
  const usernameRef = useRef<any>();
  const passwordRef = useRef<any>();

  const handleSubmit = (e: any) => {
    console.log("e", e);
    e.preventDefault();
    const username = usernameRef.current.input.value;
    const password = passwordRef.current.input.value;
    //使用接口验证数据
    // axios({
    //   method: "GET",
    //   url: `https://localhost/user/${username}`,
    // }).then((response) => {
    //   if (response.data.password === password) {
    //     console.log("登录成功");
    //     setLogin(true);
    //   }
    // });
    //本地验证数据
    if (username === "小猛子" && password === "xiaomengzi") {
      console.log("登录成功");
      setLogin(true);
    } else {
      console.log("用户名或密码错误");
      console.log("username", username);
      console.log("password", password);
    }
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
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input style={{ width: "20vw" }} ref={usernameRef} placeholder="username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              style={{ width: "20vw" }}
              ref={passwordRef}
              type="password"
              placeholder="password"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AiStructrue>
  );
};

export default Logout;
