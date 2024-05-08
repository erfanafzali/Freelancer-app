import { useQuery } from "@tanstack/react-query";
import { getProject } from "../services/project";
import { useParams } from "react-router-dom";

const useProject = () => {
  const { id } = useParams();

  const queryKey = ["project", id];
  const queryFn = () => getProject(id);

  const { data, isLoading } = useQuery({ queryKey, queryFn });

  const { project  } = data || {};
  

  return { project, isLoading };
};

export default useProject;
