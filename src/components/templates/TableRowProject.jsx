import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import Table from "./Table";
import { HiEye } from "react-icons/hi";

import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import Modal from "../modules/Modal";
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
import useRemoveOwnerProjects from "../../hooks/useRemoveOwnerProjects";
import CreateProjectForm from "../../features/project/CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

function TableRowProject({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  console.log(project )

  const { removeProject } = useRemoveOwnerProjects();
  

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center max-w-[200px] gap-x-1 gap-y-1">
          {project.tags.map((tag) => (
            <span
              className="inline-block whitespace-nowrap rounded-xl px-2 py-0.5  bg-secondary-200 text-secondary-600"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td className="flex justify-center items-center  gap-x-1">
        <button
          onClick={() => setIsEditOpen(true)}
          className={isEditOpen ? "z-40" : "z-0"}
        >
          <FaEdit className="w-6 h-6 text-primary-800 " />
        </button>
        <Modal
          onOpen={isEditOpen}
          title={`ویرایش ${project.title}`}
          onClose={() => setIsEditOpen(false)}
        >
          <CreateProjectForm
            projectToEdit={project}
            onClose={() => setIsEditOpen(false)}
          />
        </Modal>
        <button
          onClick={() => setIsDeleteOpen(true)}
          className={isDeleteOpen ? "z-40" : "z-0"}
        >
          <FaTrash className="text-error h-5 w-5" />
        </button>
        <Modal
          onOpen={isDeleteOpen}
          title={`حذف ${project.title}`}
          onClose={() => setIsDeleteOpen(false)}
        >
          <ConfirmDelete
            resroucename={project.title}
            onClose={() => setIsDeleteOpen(false)}
            onConfirm={() =>
              removeProject(project._id, {
                onSuccess: () => setIsDeleteOpen(false),
              })
            }
            disabled={false}
          />
        </Modal>
      </td>
      <td>
        <Link to={project._id} className="flex justify-center items-center">
          <HiEye className="w-5 h-5 text-primary-900"/>
        </Link>
      </td>
    </Table.Row>
  );
}

export default TableRowProject;
