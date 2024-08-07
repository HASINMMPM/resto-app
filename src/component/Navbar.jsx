import { Link } from "react-router-dom"
import { LuPhoneCall } from "react-icons/lu";
import logo from "/images/logo.png"

const Navbar = () => {
  const navItems =(
    <>
    <li className="text-red hover:text-black "><Link to="/">Home</Link></li>
    <li>
      <details>
        <summary className="text-red hover:text-black ">Menu</summary>
        <ul className="p-2 bg-white">
        <li className="text-red hover:text-black "><Link to="/#">All</Link></li>
        <li className="text-red hover:text-black "><Link to="/#">Salad</Link></li>
        <li className="text-red hover:text-black "><Link to="/#">Pizza</Link></li>
        </ul>
      </details>
    </li>
    {/* survises*/}
    <li>
      <details>
        <summary className="text-red hover:text-black ">Survices</summary>
        <ul className="p-2  bg-white">
        <li className="text-red hover:text-black "><Link to="/#">Online Order</Link></li>
        <li className="text-red hover:text-black "><Link to="/#">Table Booking</Link></li>
        <li className="text-red hover:text-black "><Link to="/#">Order Tracking</Link></li>
        </ul>
      </details>
    </li>
    <li className="text-red hover:text-black "><a>Offers</a></li>
    <li className="text-red hover:text-black block md:hidden "><Link to="/">Cart</Link></li>
    </>
  )



  return (
    <header className="max-w-screen-2xl  container  mx-auto">
        <div className="navbar  xl:px-24">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-red">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white  rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {navItems}
        </ul>
      </div>
      <a href="#" className="text-xl text-red font-bold">
        <img src={logo} alt="" />
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 text-red">
       
       {navItems}

      </ul>
    </div>
   

   
    <div className="navbar-end">
      {/* search */}
      <button className="btn btn-ghost btn-circle text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
      {/* Cart */}
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-black mr-3 hidden md:flex">
        <div className="indicator ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item bg-red text-white p-2 flex items-center ">8</span>
        </div>
      </div>
      {/* Cart end   */}
      <a className="btn bg-red text-yellow rounded-full flex items-center "><LuPhoneCall/>Contact</a>
    </div>
  </div>
    </header>
  )
}

export default Navbar 