import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../services/project";

const useProjects = () => {
  const queryKey = ["projects"];
  const queryFn = getProjects;

  const { isLoading, data } = useQuery({ queryKey, queryFn });
  const { projects } = data || {};

  return { isLoading, projects };
};

export default useProjects;
