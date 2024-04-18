import { IoCloseCircle } from "react-icons/io5";

function Modal({ onOpen, onClose, title, children }) {
  return (
    <div>
      {onOpen && (
        <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-opacity-30 bg-secondary-800 z-40">
          <div className="fixed top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out w-64 md:w-[500px] ">
            <div className="w-full flex justify-between items-center border-b mb-4 pb-3 border-secondary-700">
              <p className="text-lg md:text-xl font-bold">{title}</p>
              <button onClick={onClose}>
                <IoCloseCircle className="w-6 h-6 text-error" />
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
