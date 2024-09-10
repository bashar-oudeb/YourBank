import { useState } from "react";
import logo from "../assets/logo.svg";
import btn from "../assets/navbar/Button.svg";




const Navbar = () => {
  const [oppen , setOppen] = useState(false)

  return (
    <nav className=" px-10 py-7 flex items-center  justify-between">
      <div className="flex items-center gap-1">
        <img src={logo} alt="" />
        <span className=" text-white text-lg font-Poppins font-medium ">YourBanK</span>
      </div>
      <div className=" hidden lg:block">
        <ul className="flex items-center gap-6 ">
          {["Home", "Careers", "About", "Security"].map((item) => (
            <li>
              <a href="" className=" text-white">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className=" hidden  lg:flex items-center">
        <button>
          <a href="" className=" text-white">Sign Up</a>
        </button>
        <button>
          <a href="" className=" text-white">Login</a>
        </button>
      </div>

      <div className=" lg:hidden">
        <button onClick={()=> setOppen(!oppen)}>
          {!oppen ? <img src={btn} alt="" /> : <img src={logo} alt="" />}
          
        </button>
      </div>

     
    </nav>
  );
};

export default Navbar;
