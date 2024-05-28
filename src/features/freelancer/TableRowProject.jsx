import { useState } from "react";
import Table from "../../components/templates/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { MdAssignment } from "react-icons/md";
import Modal from "../../components/modules/Modal";
import CreatedProposals from "./CreatedProposals";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "bg-green-500 text-white",
  },
  CLOSED: {
    label: "بسته",
    className: "bg-red-500 text-white",
  },
};

function TableRowProject({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <span
          className={`px-6 rounded-lg ${
            projectStatus[project.status].className
          }`}
        >
          {projectStatus[project.status].label}
        </span>
      </td>
      <td>
        <Modal
          onOpen={open}
          onClose={() => setOpen(false)}
          title={`درخواست انجام پروژه ${project.title}`}
        >
          <CreatedProposals
            onClose={() => setOpen(false)}
            projectId={project._id}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignment className="w-7 h-7 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default TableRowProject;
