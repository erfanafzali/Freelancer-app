import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeUserStatus } from "../services/auth";

export default function useUserStatus() {
  const mutationFn = changeUserStatus;

  const { isPending: isUpdating, mutate: userStatus } = useMutation({
    mutationFn,
    onSuccess: (data) => {
      toast.success(data.message);
      
    },
    onError: (err) => toast.error(err?.respnse?.data?.message),
  });

  return { isUpdating, userStatus };
}
