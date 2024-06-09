import { NavLink } from "react-router-dom";
import LayoutOwner from "./LayoutOwner";
import Sidebar from "./Sidebar";
import { HiCollection, HiHome } from "react-icons/hi";
import { PiGridFourFill } from "react-icons/pi";

import { FaUser } from "react-icons/fa";



 

function AdminLayout() {
  const isActive2 = "text-primary-700 bg-primary-200 dark:bg-primary-800";

  return (
    <LayoutOwner>
      <Sidebar>
        <ul className="w-full flex flex-col justify-center items-start gap-y-2 py-4 px-3">
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              isActive
                ? `flex justify-start items-center gap-x-2 text-base md:text-lg text-secondary-800 w-full px-4 rounded-md py-1 ${isActive2}`
                : "flex justify-start items-center gap-x-2 text-base md:text-lg text-secondary-800 w-full px-4 rounded-md py-1"
            }
          >
            <span>
              <HiHome />
            </span>
            <span>داشبورد</span>
          </NavLink>
          <NavLink
            to="users"
            className={({ isActive }) =>
              isActive
                ? `flex justify-start items-center gap-x-2 text-base md:text-lg text-secondary-800 w-full px-4 rounded-md py-1 ${isActive2}`
                : "flex justify-start items-center gap-x-2 text-base md:text-lg text-secondary-800 w-full px-4 rounded-md py-1"
            }
          >
            <span>
              <FaUser />
            </span>
            <span>کاربران</span>
          </NavLink>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive
                ? `flex justify-start items-center gap-x-2 text-base md:text-lg text-secondary-800 w-full px-4 rounded-md py-1 ${isActive2}`
                : "flex justify-start items-center gap-x-2 text-base md:text-lg text-secondary-800 w-full px-4 rounded-md py-1"
            }
          >
            <span>
              <PiGridFourFill />
            </span>
            <span className="whitespace-nowrap">پروژه ها</span>
          </NavLink>
          <NavLink
            to="proposals"
            className={({ isActive }) =>
              isActive
                ? `flex justify-start items-center gap-x-2 text-base md:text-lg text-secondary-800 w-full px-4 rounded-md py-1 ${isActive2}`
                : "flex justify-start items-center gap-x-2 text-base md:text-lg text-secondary-800 w-full px-4 rounded-md py-1"
            }
          >
            <span>
              <HiCollection />
            </span>
            <span className="whitespace-nowrap"> درخواست ها</span>
          </NavLink>
        </ul>
      </Sidebar>
    </LayoutOwner>
  );
}

export default AdminLayout;
