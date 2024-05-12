import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/auth";

const useUser = () => {
  const queryKey = ["profile"];
  const queryFn = getUser;

  const { data, isLoading } = useQuery({ queryKey, queryFn });

  const { user } = data || {};

  return { user, isLoading };
};

export default useUser;
