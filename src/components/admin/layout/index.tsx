import { Link } from "react-router-dom";
import { jsxComponent } from "../../../interfaces/general";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

const Layout = ({ children }: { children?: jsxComponent }) => {
 const [toggleHamburger, setToggleHamburger] = useState(false);

 const handleHamburgerMenu = () => {
  setToggleHamburger(!toggleHamburger)
 }

  return (
    <div>
      <div className="flex">
        <div className={`w-[160px] h-[100vh] bg-gray-200 text-center absolute md:relative ${toggleHamburger ? 'block' : 'hidden'}`}>
          <div className="flex justify-end text-2xl text-red-500 mt-2 md:hidden" onClick={handleHamburgerMenu}><IoMdCloseCircleOutline /></div>
          <h1 className="font-bold text-xl mt-1 mb-7">Admin DashBoard</h1>
          <div className="my-7">
            <Link to="/">Regime Info</Link>
          </div>
          <div className="my-7">
            <Link to="/">Admins</Link>
          </div>
          <div className="my-7">
            <Link to="/">Scan Clients</Link>
          </div>
          <div className="my-7">
            <Link to="/">Withdrawal</Link>
          </div>
          <hr className="border border-gray-500 w-[90%] mx-auto" />
        </div>


        <div className="flex-1 w-full ">
        <nav className="flex justify-between px-4 py-2 bg-gray-200 h-[13vh]">
            <div className="flex items-center space-x-3" onClick={handleHamburgerMenu}>
              <span><RxHamburgerMenu /></span>
             <h1 className="font-bold text-xl md:text-2xl">Dashboard</h1>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-4xl"><CgProfile/></span>
                <div><p className="font-bold">Gojou</p>
                <p className="block text-center">Admin</p></div>
              </div>
          </nav>
          <div className="h-[87vh] overflow-y-scroll scrollbar-hide">{children}</div>
          </div>
      </div>
    </div>
  );
};

export default Layout;
