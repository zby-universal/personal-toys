import { Button, Checkbox, Form, Input } from "antd";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as UUID } from "uuid";
import AiStructrue from "../layouts/AiStructrue";
import "./login.scss";

let loadData = window.localStorage.getItem("loadData") ?? "";
console.log("loadData", loadData);
const parseloadData = loadData && JSON.parse(loadData);
const Logout = () => {
  const [login, setLogin] = useState(false);
  const [Remember, setRemember] = useState(parseloadData.Remember ?? false);
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
    savePWD();
  };
  //更改记住状态
  const onRememberChange = () => {
    setRemember(!Remember);
  };
  //保存账号密码
  const savePWD = () => {
    loadData = JSON.stringify({
      account: accountRef.current.input.value,
      password: passwordRef.current.input.value,
      Remember: Remember,
    });

    localStorage.setItem("loadData", loadData);
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
            label="account"
            name="account"
            rules={[{ required: true, message: "Please input your account!" }]}
          >
            <Input
              className="loadInput"
              ref={accountRef}
              placeholder="account"
              value={parseloadData.account ?? ""}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              className="loadInput"
              ref={passwordRef}
              type="password"
              placeholder="password"
              value={parseloadData.password ?? ""}
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox defaultChecked={Remember} onChange={onRememberChange}>
              Remember me
            </Checkbox>
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
