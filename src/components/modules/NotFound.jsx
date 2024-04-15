import { IoArrowBackOutline } from "react-icons/io5";
import useMoveBack from "../../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="w-full max-w-lg mx-auto pt-8">
      <h1 className="font-bold text-xl">صفحه ای که دنبالش بودید پیدا نشد 😵‍💫</h1>
      <button onClick={moveBack} className="w-full flex justify-start items-center gap-x-4 mt-5">
        <p className="font-bold text-lg text-primary-800">برگشت</p>
        <IoArrowBackOutline className="text-primary-800 font-bold text-2xl"/>
      </button>
    </div>
  );
}

export default NotFound;
