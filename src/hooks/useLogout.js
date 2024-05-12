import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOut } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutationFn = logOut;

  const { mutate: logout, isPending } = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
  });

  return { logout, isPending };
}
