import { MdSunny } from "react-icons/md";
import { useDarkMode } from "../../context/DarkModeContext";
import { IoMdMoon } from "react-icons/io";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="flex justify-center items-center">
      {isDarkMode ? (
        <IoMdMoon className="w-6 h-6 text-blue-500" />
      ) : (
        <MdSunny className="w-6 h-6 text-yellow-500" />
      )}
    </button>
  );
}

export default DarkModeToggle;
