import { FaArrowRightLong } from "react-icons/fa6";
import useMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();
  return (
    <div className="w-full flex justify-start items-center gap-x-4 mb-8">
      <button onClick={moveBack}>
        <FaArrowRightLong className="w-5 h-5 text-primary-900" />
      </button>
      <h1 className="font-bold">
        <span className="text-sm md:text-base">لیست درخواست های </span>
        <span className="text-sm md:text-base">{project.title}</span>
      </h1>
    </div>
  );
}

export default ProjectHeader;
