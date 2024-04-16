import { useQuery } from "@tanstack/react-query";
import { getOwnerProjects } from "../services/project";

const useOwnerProjects = () => {
  const queryKey = ["owner-projects"];
  const queryFn = getOwnerProjects;

  const { isLoading, data } = useQuery({ queryKey, queryFn });
  const { projects } = data || {};

  return { isLoading, projects };
};

export default useOwnerProjects;
