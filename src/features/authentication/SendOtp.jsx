import { useMutation } from "@tanstack/react-query";
import { sendOtp } from "../../services/auth";
import toast from "react-hot-toast";
import Loader from "../../components/modules/Loader";
 
function SendOtp({ phoneNumber, setPhoneNumber, setStep }) {
  const mutationFn = sendOtp;

  const { mutateAsync, isPending } = useMutation({ mutationFn });

  const submitHandler = async (event) => {
    event.preventDefault();
    if (phoneNumber?.length !== 11) return null;

    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form onSubmit={submitHandler} className="w-full  mb-4 max-w-xl mx-auto">
      <h1 className="text-xl text-center font-bold ">ارسال کد یک بار مصرف</h1>

      <div className="flex flex-col justify-center items-start ">
        <label
          htmlFor="phoneNumber"
          className="mt-4 mb-2 text-lg font-semibold text-primary-900"
        >
          شماره موبایل:
        </label>
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="number"
          id="phoneNumber"
          placeholder="09XXXXXXXXX"
          dir="ltr"
          className="w-full py-1.5 border-primary-600 border-2 rounded-lg outline-0 px-3 bg-secondary-200"
        />
      </div>
      <div>
        {isPending ? (
          <Loader />
        ) : (
          <button
            type="submit"
            className="w-full bg-primary-900 mt-4 py-1.5 rounded-lg text-white font-semibold hover:bg-primary-600"
          >
            ارسال کد تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default SendOtp;
