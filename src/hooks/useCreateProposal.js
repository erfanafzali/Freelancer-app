import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProposal } from "../services/proposal";

export default function useCreateProposal() {
  const queryClient = useQueryClient();
  const mutationFn = createProposal;

  const { mutate: createproposal, isPending: isCreating } = useMutation({
    mutationFn,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["proposals"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { createproposal, isCreating };
}
