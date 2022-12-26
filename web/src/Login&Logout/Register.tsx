/* eslint-disable no-template-curly-in-string */
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Upload } from "antd";
import Button from "antd/es/button";
import { useNavigate } from "react-router-dom";
import { v4 as UUID } from "uuid";
import AiStructrue from "../layouts/AiStructrue";
import "./index.scss";
const Login = () => {
  const navigate = useNavigate();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      password: "${label} is not a valid password!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values: any) => {
    console.log(values);

    let nanoid = UUID();
    let userdata = {
      Nickname: values.users.Nickname,
      PersonalSign: values.users.PersonalSign,
      HeadImgID: values.users.HeadImg.file.uid,
      Phone: values.users.Phone,
    };
    let registerMessage = {
      account: values.users.email,
      password: values.users.password,
      userdata: JSON.stringify(userdata),
      id: nanoid,
    };
    console.log("registerMessage", registerMessage);
  };
  return (
    <AiStructrue>
      <div>
        <h1>注册界面</h1>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item name={["user", "Nickname"]} label="昵称" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={["user", "password"]} label="密码" rules={[{ required: true }]}>
            <Input type="password" />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="邮箱"
            rules={[{ required: true }, { type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "Phone"]} label="手机号">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "PersonalSign"]} label="个性签名">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="头像" name={["user", "HeadImg"]}>
            <Upload action="" listType="picture-card" maxCount={1}>
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
            <Button
              type="default"
              className="backButton"
              onClick={() => {
                navigate("/");
              }}
            >
              返回
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AiStructrue>
  );
};

export default Login;
