import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Main = () => {
  return (
    <div className="h-screen bg-white">
      <Navbar/>
      <Outlet />
      <footer>Footer</footer>
      </div>
  );
};

export default Main;
