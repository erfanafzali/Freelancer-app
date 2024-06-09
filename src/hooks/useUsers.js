import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/auth";
 

const useUsers = () => {
  const queryKey = ["users"];
  const queryFn = getUsers;

  const { data, isLoading } = useQuery({ queryKey, queryFn });

  const { users } = data || {};

  return { users, isLoading };
};

export default useUsers;
