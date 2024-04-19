import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeOwnerProjects } from "../services/project";
import toast from "react-hot-toast";

export default function useRemoveOwnerProjects() {
  const QueryClient = useQueryClient();
  const mutationFn = removeOwnerProjects;
  const queryKey = ["owner-projects"];

  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
      QueryClient.invalidateQueries({ queryKey });
    },

    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { removeProject, isDeleting };
}
