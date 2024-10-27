import logo from "@/assets/house.svg";
import { Link } from "react-router-dom";
import { UserNavigationMenu } from "../business/UserNavigationMenu";

function Navbar() {
  return (
    <div
      role="presentation"
      className="w-full h-20 shadow-sm flex flex-row justify-end border-b gap-2"
    >
      <div className="flex items-center justify-between w-full m-2">
        <div className="flex items-center justify-center">
          <img src={logo} alt="SettleBuddy logo" className="w-6 h-6 ml-4" />
          <h4 className="ml-2 text-md font-semibold tracking-tight scroll-m-20 ">
            <Link to="/">SettleBuddy</Link>
          </h4>
        </div>
        <div className="flex items-center gap-4 mr-4">
          <UserNavigationMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
