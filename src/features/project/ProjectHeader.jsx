import { FaArrowRightLong } from "react-icons/fa6";
import useMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();
  return (
    <div className="w-full flex justify-start items-center gap-x-4 mb-8">
      <button onClick={moveBack}>
        <FaArrowRightLong className="w-5 h-5 text-primary-900" />
      </button>
      <h1>
        <span>لیست درخواست های </span>
        <span>{project.title}</span>
      </h1>
    </div>
  );
}

export default ProjectHeader;
