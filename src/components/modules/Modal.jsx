import { IoCloseCircle } from "react-icons/io5";
import useOutsideClick from "../../hooks/useOutsideClick";

function Modal({ onOpen, onClose, title, children }) {
  const ref = useOutsideClick(onClose);
  return (
    <div className="">
      {onOpen && (
        <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-opacity-30 bg-secondary-800 z-50">
          <div
            ref={ref}
            className="fixed top-[47%] max-h-[calc(100vh-4rem)] overflow-y-auto left-1/2  -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out w-80 sm:w-[400px] md:w-[500px] lg:w-[650px]"
          >
            <div className="w-full flex justify-between items-center border-b mb-4 pb-3 border-secondary-700 ">
              <p className="text-lg md:text-xl font-bold dark:text-white" >{title}</p>
              <button onClick={onClose}>
                <IoCloseCircle className="w-6 h-6 text-error md:w-8 md:h-8" />
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
