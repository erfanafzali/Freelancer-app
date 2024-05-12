import { FaUserAlt } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import LogOut from "../modules/LogOut";
function HeaderMenu() {
  return (
    <div className="">
      <ul className="flex justify-center items-center gap-x-4 ">
        <li>
          <Link>
            <FaUserAlt className="w-5 h-5 text-primary-900" />
          </Link>
        </li>
        <li>
          <DarkModeToggle />
        </li>
        <li>
          <LogOut />
        </li>
      </ul>
    </div>
  );
}

export default HeaderMenu;
