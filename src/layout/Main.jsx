import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import '../index.css'
import Footer from "../component/Footer";

const Main = () => {
  return (
    <div className="h-screen bg-white">
      <Navbar/>
      <Outlet />
      <Footer/>
      </div>
  );
};

export default Main;
