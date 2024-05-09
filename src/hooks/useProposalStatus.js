import { useMutation } from "@tanstack/react-query";
import { changeProposalStatus } from "../services/proposal";
import toast from "react-hot-toast";

export default function useProposalStatus() {
  const mutationFn = changeProposalStatus;

  const { isPending: isUpdating, mutate: propsalStatus } = useMutation({
    mutationFn,
    onSuccess: (data) => {
      toast.success(data.message);
      
    },
    onError: (err) => toast.error(err?.respnse?.data?.message),
  });

  return { isUpdating, propsalStatus };
}
