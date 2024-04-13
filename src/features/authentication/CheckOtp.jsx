import { useMutation } from "@tanstack/react-query";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/auth";
import toast from "react-hot-toast";

function CheckOtp({ otp, setOtp, phoneNumber, setStep }) {
  const mutationFn = checkOtp;

  const { mutateAsync } = useMutation({ mutationFn });

  const checkOtpHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await mutateAsync({ phoneNumber, otp });
      toast.success(response.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={checkOtpHandler} 
      className="w-full flex justify-center items-center flex-col   mb-4 max-w-xl mx-auto"
    >
      <h1 className="my-5 mb-8 font-bold text-xl">کد تایید را وارد کنید</h1>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span></span>}
        renderInput={(props) => <input type="number" {...props} />}
        containerStyle="w-full flex flex-row-reverse gap-x-2 justify-center "
        placeholder="XXXXXX"
        shouldAutoFocus
        inputStyle={{
          width: "2.5rem",
          height: "3rem",
          border: "3px solid rgb(var(--color-primary-600))",
          borderRadius: "0.5rem",
          fontWeight: "bold",
        }}
      />
      <button
        type="submit"
        className="w-[57%] bg-primary-900 mt-4 py-1.5 rounded-lg text-white font-semibold hover:bg-primary-600"
      >
        ارسال کد تایید
      </button>
    </form>
  );
}

export default CheckOtp;
