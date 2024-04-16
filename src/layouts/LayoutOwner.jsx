import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function LayoutOwner() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[8rem_1fr] md:grid-cols-[10rem_1fr] lg:grid-cols-[15rem_1fr]">
      <Header />
      <Sidebar />
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="max-w-screen-md  flex flex-col gap-y-12 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayoutOwner;
