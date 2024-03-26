import { Link } from "react-router-dom";
import { jsxComponent } from "../../../interfaces/general";

const Layout = ({ children }: { children?: jsxComponent }) => {
  return (
    <div>
      <div className="flex">
        <div className="w-[160px] h-[100vh] bg-gray-200 space-y-6 pt-4 text-center">
          <h1 className="font-bold text-xl">Admin DashBoard</h1>
          <div>
            <Link to="/">Regime Info</Link>
          </div>
          <div>
            <Link to="/">Admins</Link>
          </div>
          <div>
            <Link to="/">Scan Clients</Link>
          </div>
          <div>
            <Link to="/">Withdrawal</Link>
          </div>
          <hr className="border border-gray-500 w-[90%] mx-auto" />
        </div>

        <div className="flex-1 w-full ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
