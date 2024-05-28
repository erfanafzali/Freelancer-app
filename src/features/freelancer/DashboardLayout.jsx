import Loader from "../../components/modules/Loader";
import useProposals from "../../hooks/useProposals";
 
import DashboardHeader from "../owner/DashboardHeader";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
