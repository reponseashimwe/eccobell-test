import { GlobeAltIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo-svg.svg";

const Header = () => {
  return (
    <div className="flex justify-between gap-5 items-center">
      <div>
        <img src={logo} className="w-8 opacity-80 aspect-square" />
      </div>

      <div className="text-gray-500 flex items-center gap-2 md:gap-5">
        <div className="uppercase">en</div>
        <GlobeAltIcon className="w-6" />
      </div>
    </div>
  );
};

export default Header;
