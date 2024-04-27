import { useState } from "react";
import CheckOtp from "../features/authentication/CheckOtp";
import SendOtp from "../features/authentication/SendOtp";
import { sendOtp } from "../services/auth";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
 

function AuthPage() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const mutationFn = sendOtp;

  const { mutateAsync } = useMutation({ mutationFn });

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
    <div className="w-full pt-16 container">
      {step === 1 && (
        <SendOtp
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <CheckOtp
          otp={otp}
          setOtp={setOtp}
          phoneNumber={phoneNumber}
          setStep={setStep}
          reSendOtp={submitHandler}
        />
      )}
    </div>
  );
}

export default AuthPage;
