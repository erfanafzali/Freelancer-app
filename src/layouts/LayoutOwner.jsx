import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function LayoutOwner({ children }) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[10rem_1fr] md:grid-cols-[10rem_1fr] lg:grid-cols-[15rem_1fr]">
      <Header />
      {children}
      <div className="bg-secondary-100 p-8 overflow-y-auto w-full mx-auto">
        <div className="max-w-screen-md md:max-w-screen-lg w-full mx-auto   flex flex-col gap-y-12 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayoutOwner;
