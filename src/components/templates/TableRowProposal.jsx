import Table from "./Table";
import truncateText from "../../utils/truncateText";
import Modal from "../modules/Modal";
import { useState } from "react";
import ChangeProposalStatus from "./ChangeProposalStatus";

function TableRowPorposal({ proposal, index }) {
  const [open, setOpen] = useState(false);

  const statusStyle = [
    { label: "رد شده", className: "bg-red-500" },
    { label: "در انتظار تایید", className: "bg-yellow-500" },
    { label: "تایید شده", className: "bg-green-500" },
  ];

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>{truncateText(proposal.description, 50)}</td>
      <td>{proposal.duration} روز</td>
      <td>{proposal.price} تومان</td>
      <td>
        <span
          className={` px-2 py-0.5 rounded-lg ${
            statusStyle[proposal.status].className
          }`}
        >
          {statusStyle[proposal.status].label}
        </span>
      </td>
      <td>
        <Modal
          title="تغییر وضعیت درخواست"
          onOpen={open}
          onClose={() => setOpen(false)}
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button
          onClick={() => setOpen(true)}
          className="text-primary-900 font-bold"
        >
          تغیر وضعیت
        </button>
      </td>
    </Table.Row>
  );
}

export default TableRowPorposal;
