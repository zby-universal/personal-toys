import { Route, Routes } from "react-router-dom";
import Login from "./Login&Logout/Login";
import Logout from "./Login&Logout/Logout";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Logout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoute;
