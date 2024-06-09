import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { completeProfile } from "../../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../modules/Loader";

function ProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const mutationFn = completeProfile;
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({ mutationFn });

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const { message, user } = await mutateAsync({ name, email, role });
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("بروفایل شما در انتظار تایید است", { icon: "🫡" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      // if (user.role === "ADMIN") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full mb-4 max-w-xl mx-auto pt-12"
    >
      <div className="w-full flex flex-col justify-center items-center">
        {/* name & lastName */}
        <div className="w-full flex flex-col justify-center items-start mb-5  gap-y-2">
          <label htmlFor="name" className="font-bold text-base md:text-lg">
            نام و نام خانوادگی :
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="نام خود را وارد کنید"
            type="text"
            className="w-full border-2 rounded-md py-1 px-2 border-primary-600"
          />
        </div>
        {/* email */}
        <div className="w-full flex flex-col justify-center items-start mb-5  gap-y-2">
          <label htmlFor="email" className="font-bold text-base md:text-lg">
            ایمیل :
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="ایمیل خود را وارد کنید"
            type="text"
            className="w-full border-2 rounded-md py-1 px-2 border-primary-600"
          />
        </div>
        {/* role */}
        <div className="w-full flex justify-around mt-5">
          <div className="flex justify-center items-center gap-x-2">
            <label htmlFor="owner">کارفرما</label>
            <input
              type="radio"
              name="role"
              id="owner"
              value="OWNER"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <label htmlFor="freelancer">فریلنسر</label>
            <input
              type="radio"
              name="role"
              id="freelancer"
              value="FREELANCER"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "FREELANCER"}
            />
          </div>
        </div>
      </div>
      {isPending ? (
        <Loader />
      ) : (
        <button
          type="submit"
          className="w-full flex justify-center items-center bg-primary-900 mt-4 py-1 rounded-md text-white"
        >
          تایید
        </button>
      )}
    </form>
  );
}

export default ProfileForm;
