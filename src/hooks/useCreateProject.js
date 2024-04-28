import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject } from "../services/project";
import toast from "react-hot-toast";

export default function useCreateProject() {
  const queryClient = useQueryClient();
  const mutationFn = createProject;

  const { mutate: createNewProject, isPending: isCreating } = useMutation({
    mutationFn,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { createNewProject, isCreating };
}
