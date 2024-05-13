import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { HiCollection } from "react-icons/hi";

function Sidebar({children}) {
  
  return (
    <div className="bg-secondary-0 row-span-2 row-start-1 w-full pt-3">
    {children}
    </div>
  );
}

export default Sidebar;
