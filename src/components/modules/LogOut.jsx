import { IoLogOut } from "react-icons/io5";
import useLogout from "../../hooks/useLogout";
import Loader from "./Loader";

function LogOut() {
  const { isPending, logout } = useLogout();

  return (
    <div>
      {isPending ? (
        <Loader />
      ) : (
        <button onClick={logout} className="flex justify-center items-center">
          <IoLogOut className="w-5 h-5 md:h-7 md:w-7 text-red-900" />
        </button>
      )}
    </div>
  );
}

export default LogOut;
