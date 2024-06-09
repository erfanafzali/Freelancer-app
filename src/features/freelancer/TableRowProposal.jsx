import Table from "../../components/templates/Table";
import truncateText from "../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

const statusStyle = [
  { label: "رد شده", className: "bg-red-500" },
  { label: "در انتظار تایید", className: "bg-yellow-500" },
  { label: "تایید شده", className: "bg-green-500" },
];
function TableRowProposals({ proposal, index }) {
   
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(proposal.description, 60)}</td>
      <td>{proposal.duration}</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>
        <span
          className={` px-2 py-0.5 rounded-lg ${
            statusStyle[proposal.status].className
          }`}
        >
          {statusStyle[proposal.status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default TableRowProposals;
