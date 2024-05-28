import Loader from "../../components/modules/Loader";
import Empty from "../../components/modules/Empty";
import Table from "../../components/templates/Table";
import TableRowProposal from "./TableRowProposal";
import useProposals from "../../hooks/useProposals";

function ProjectsTable() {
  const { proposals, isLoading } = useProposals();
  console.log(proposals)

  if (isLoading) return <Loader />;
  if (!proposals.length) return <Empty resroucename="پروژه ای یافت نشد" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <TableRowProposal
            key={proposal._id}
            index={index}
            proposal={proposal}
          />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
