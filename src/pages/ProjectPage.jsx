import Loader from "../components/modules/Loader";
import PorposalTable from "../features/project/PorposalTable";
import ProjectHeader from "../features/project/ProjectHeader";
import useProject from "../hooks/useProject";

function ProjectPage() {
  const { project, isLoading } = useProject();
 
  if (isLoading) return <Loader />;

  return (
    <div>
      <ProjectHeader project={project} />
      <PorposalTable proposals={project?.proposals} />
    </div>
  );
}

export default ProjectPage;
