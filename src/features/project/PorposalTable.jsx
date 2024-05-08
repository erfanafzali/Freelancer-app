import Empty from "../../components/modules/Empty";
import Table from "../../components/templates/Table";
import TableRowPorposal from "../../components/templates/TableRowProposal";
function PorposalTable({ proposals }) {
  if (!proposals?.length) return <Empty resroucename="درخواستی وجود ندارد" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <TableRowPorposal
            key={proposal._id}
            index={index}
            proposal={proposal}
          />
        ))}
      </Table.Body>
    </Table>
  );
}

export default PorposalTable;
