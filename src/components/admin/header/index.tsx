import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between px-4 py-2 bg-gray-200">
            <div className="flex items-center space-x-3">
              <span><RxHamburgerMenu /></span>
             <h1 className="font-bold text-2xl">Dashboard</h1>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-4xl"><CgProfile/></span>
                <div><p>Gojou Sensei</p>
                <p className="block text-center">Admin</p></div>
              </div>
          </nav>
    </div>
  )
}

export default Header;
