import Loader from "../../components/modules/Loader";
import useProjects from "../../hooks/useProjects";
import useProposals from "../../hooks/useProposals";
import useUsers from "../../hooks/useUsers";
import DashboardHeader from "../owner/DashboardHeader";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading: isLoading1, proposals } = useProposals();
  const { isLoading: isLoading2, projects } = useProjects();
  const { isLoading: isLoading3, users } = useUsers();

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <Stats users={users} proposals={proposals} projects={projects}/>
    </div>
  );
}

export default DashboardLayout;
