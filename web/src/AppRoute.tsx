import { Route, Routes } from "react-router-dom";
import Login from "./Login&Logout/Login";
import Logout from "./Login&Logout/Logout";
import Register from "./Login&Logout/Register";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Logout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoute;
