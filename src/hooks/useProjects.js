import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../services/project";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const useProjects = () => {
  const { search } = useLocation();
  const queryObj = queryString.parse(search);

  const queryKey = ["projects", queryObj];
  const queryFn = () => getProjects(search);

  const { isLoading, data } = useQuery({ queryKey, queryFn });
  const { projects } = data || {};

  return { isLoading, projects };
};

export default useProjects;
