import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/auth";

const useUser = () => {
  const queryKey = ["profile"];
  const queryFn = getUser;

  return useQuery({ queryKey, queryFn });
};

export default useUser;
