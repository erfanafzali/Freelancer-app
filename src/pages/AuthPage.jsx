import { useState } from "react";
import CheckOtp from "../features/authentication/CheckOtp";
import SendOtp from "../features/authentication/SendOtp";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  return (
    <div className="w-full pt-16">
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
        />
      )}
    </div>
  );
}

export default AuthPage;
