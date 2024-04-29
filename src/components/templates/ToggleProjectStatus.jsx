import useToggle from "../../hooks/useToggle";
import Loader from "../modules/Loader";
import Toggle from "../modules/Toggle";

function ToggleProjectStatus({ project }) {
  const { isUpdating, toggleStatus } = useToggle();

  const toggleHandler = () => {
    const newStatus = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleStatus({
      id: project._id,
      data: { status: newStatus },
    });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loader />
      ) : (
        <Toggle
          toggleHandler={toggleHandler}
          label={project.status === "OPEN" ? "باز" : "بسته"}
          enabled={project.status === "OPEN" ? true : false}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
