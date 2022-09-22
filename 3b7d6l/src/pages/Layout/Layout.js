import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
