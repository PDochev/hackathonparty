import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "@/assets/settlebuddyicon.png";
import badge from "@/assets/piggy-bank.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserStore } from "@/store";

function Navbar() {
  const userName = useUserStore(({ name }) => name);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNav = () => {
    navbarOpen ? setNavbarOpen(false) : setNavbarOpen(true);
  };

  return (
    <nav role="navigation">
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
            <small className="text-sm font-medium leading-none">
              {userName}
            </small>
            <Avatar>
              <AvatarImage src={badge} alt="@shadcn" />
              <AvatarFallback>Badge</AvatarFallback>
            </Avatar>
            <a onClick={toggleNav} className="text-xl w-6">
              {navbarOpen ? "x" : "^"}
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${
          !navbarOpen
            ? "hidden"
            : "bg-grey-100 w-full h-16 flex flex-row items-center justify-center border-b-2"
        }`}
      >
        <a href="/" className="flex-1 text-center">
          Home
        </a>
        <a href="/badges" className="flex-1 text-center border-x-2">
          Badges
        </a>
        <a href="/files" className="flex-1 text-center">
          Files
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
