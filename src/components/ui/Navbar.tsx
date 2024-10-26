import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "@/assets/settlebuddyicon.png";

function Navbar() {
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
              Immigration App
            </h4>
          </div>
          <div className="flex items-center gap-4 mr-4">
            <small className="text-sm font-medium leading-none">
              Your name/email
            </small>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>Plamen</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
