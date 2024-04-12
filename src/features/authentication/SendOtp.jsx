function SendOtp({ phoneNumber, setPhoneNumber }) {
  const submitHandler = (event) => {
    event.preventDefault();
    if (phoneNumber?.length !== 11) return null;
    console.log(phoneNumber);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full pt-16 mb-4 max-w-xl mx-auto"
    >
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
      <button className="w-full bg-primary-900 mt-4 py-1.5 rounded-lg text-white font-semibold hover:bg-primary-600">
        ارسال کد تایید
      </button>
    </form>
  );
}

export default SendOtp;
