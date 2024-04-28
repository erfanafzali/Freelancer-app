import { MdAdd } from "react-icons/md";
import Modal from "../modules/Modal";
import { useState } from "react";
import CreateProjectForm from "../../features/project/CreateProjectForm";

function AddProject() {
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div className="w-full px-3 flex justify-between items-center pb-8 overflow-x-auto gap-x-32 pl-8">
      <h1 className="whitespace-nowrap font-bold text-lg md:text-xl">
        پروژه های شما
      </h1>
      <button
        onClick={() => setIsAddOpen(true)}
        className="  flex justify-center items-center gap-x-1 bg-primary-900 text-secondary-0 px-3 py-1.5 rounded-lg font-bold"
      >
        <span>
          <MdAdd className=" h-6 w-6" />
        </span>
        <span className="whitespace-nowrap">اضافه کردن پروژه</span>
      </button>
      <Modal
        onOpen={isAddOpen}
        title="اضافه کردن پروژه جدید"
        onClose={() => setIsAddOpen(false)}
      >
        <CreateProjectForm onClose={() => setIsAddOpen(false)} />
      </Modal>
    </div>
  );
}

export default AddProject;
