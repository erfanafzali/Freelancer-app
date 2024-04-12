import OTPInput from "react-otp-input";

function CheckOtp({ otp, setOtp, phoneNumber, setStep }) {
  return (
    <form>
      <h1></h1>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
      />
    </form>
  );
}

export default CheckOtp;
