import DashboardHeader from "../features/owner/DashboardHeader";
import Stats from "../features/owner/Stats";
import useOwnerProjects from "../hooks/useOwnerProjects";
import Loader from "../components/modules/Loader";

function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default DashboardLayout;
