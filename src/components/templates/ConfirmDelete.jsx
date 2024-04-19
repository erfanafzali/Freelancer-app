function ConfirmDelete({ resroucename, onClose, disabled, onConfirm }) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-full pt-2 pb-6 font-bold text-base md:text-lg">
        <span>آیا از حذف</span>
        <span className="text-red-500"> {resroucename} </span>
        <span>مطمئن هستید ؟</span>
      </h1>
      <div className="w-full flex justify-around items-center text-lg font-bold pb-3 py-4">
        <button
          onClick={onClose}
          className="bg-primary-900 px-8 md:px-14 md:py-3 py-2 text-secondary-0 rounded-lg shadow-md shadow-primary-400"
        >
          لغو
        </button>
        <button
          onClick={onConfirm}
          disabled={disabled}
          className="bg-red-500 px-8 md:px-14 py-2 md:py-3 text-secondary-0 rounded-lg shadow-md shadow-red-400"
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
