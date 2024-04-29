import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectStatus } from "../services/project";
import toast from "react-hot-toast";

export default function useToggle() {
  const queryClient = useQueryClient();
  const mutationFn = toggleProjectStatus;

  const { isPending: isUpdating, mutate: toggleStatus } = useMutation({
    mutationFn,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.respnse?.data?.message),
  });

  return { isUpdating, toggleStatus };
}
