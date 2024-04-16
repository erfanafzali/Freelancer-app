import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { HiCollection } from "react-icons/hi";

function Sidebar() {
  const isActive2 = "text-primary-700 bg-primary-200";
  return (
    <div className="bg-secondary-0 row-span-2 row-start-1 w-full pt-3">
      <ul className="w-full flex flex-col justify-center items-start gap-y-2 py-4 px-3">
        <NavLink
          to="/owner/dashboard"
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
          to="/owner/projects"
          className={({ isActive }) =>
            isActive
              ? `flex justify-start items-center gap-x-2 text-base md:text-lg text-secondary-800 w-full px-4 rounded-md py-1 ${isActive2}`
              : "flex justify-start items-center gap-x-2 text-base md:text-lg text-secondary-800 w-full px-4 rounded-md py-1"
          }
        >
          <span>
            <HiCollection />
          </span>
          <span>پروژه ها</span>
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
