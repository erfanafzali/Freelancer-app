import { useMutation } from "@tanstack/react-query";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/modules/Loader";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from "react";

const RESEND_TIME = 90;

function CheckOtp({ otp, setOtp, phoneNumber, setStep, reSendOtp }) {
  const [time, setTime] = useState(RESEND_TIME);

  const navigate = useNavigate();
  const mutationFn = checkOtp;

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const { mutateAsync, isPending } = useMutation({ mutationFn });

  const checkOtpHandler = async (event) => {
    event.preventDefault();

    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);

      if (user.active) {
        //push to panel based on role
        //if (user.role === "owner") navigate("/owner")
        //if (user.role === "freelancer") navigate("/freelancer")
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={checkOtpHandler}
      className="w-full flex justify-center items-center flex-col   mb-4 max-w-xl mx-auto"
    >
      <div className="w-full flex justify-between items-start max-w-xs">
        <h1 className="my-5 mb-8 font-bold text-base flex flex-col justify-center items-start gap-y-2">
          <span>کد تایید به شماره موبایل زیر ارسال شد</span>
          <span className="text-sm text-secondary-500">( {phoneNumber} )</span>
        </h1>
        <button onClick={() => setStep((s) => s - 1)}>
          <IoMdArrowRoundBack className="text-2xl text-primary-800" />
        </button>
      </div>
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
      <div className="w-full mx-auto flex justify-center items-center">
        {isPending ? (
          <Loader />
        ) : (
          <button
            type="submit"
            className="w-[57%] bg-primary-900 mt-4 py-1.5 rounded-lg text-white font-semibold hover:bg-primary-600"
          >
            ارسال کد تایید
          </button>
        )}
      </div>

      <div className="w-full flex flex-col gap-y-2 mt-3 justify-center items-center">
        {time > 0 ? (
          <p>
            <span>({time}) </span>
            <span className="text-secondary-700">ثانیه تا ارسال مجدد کد</span>
          </p>
        ) : (
          <button
            onClick={reSendOtp}
            className="font-bold py-1 px-2 bg-primary-900 text-white rounded-md text-xs"
          >
            ارسال مجدد کد تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CheckOtp;
