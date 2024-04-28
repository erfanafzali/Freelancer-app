import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { editProject } from "../services/project";

export default function useEditProject() {
  const queryClient = useQueryClient();
  const mutationFn = editProject;

  const { mutate: editNewProject, isPending: isEditing } = useMutation({
    mutationFn,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { editNewProject, isEditing };
}
