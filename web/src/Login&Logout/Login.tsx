import Button from "antd/es/button";
import { useNavigate } from "react-router-dom";
import AiStructrue from "../layouts/AiStructrue";

const Login = () => {
  const navigate = useNavigate();
  const LogoutClick = () => {
    navigate("/");
  };
  return (
    <AiStructrue>
      <h1>Welcome to the AI speak system~</h1>
      <Button onClick={() => LogoutClick()}>退出登录</Button>
    </AiStructrue>
  );
};

export default Login;
