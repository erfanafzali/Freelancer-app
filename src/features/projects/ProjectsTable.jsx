import useOwnerProjects from "../../hooks/useOwnerProjects";
import Loader from "../../components/modules/Loader";
import Empty from "../../components/modules/Empty";

function ProjectsTable() {
  const { projects, isLoading } = useOwnerProjects();

  if (isLoading) return <Loader />;
  if (projects.length) return <Empty resroucename="پروژه ای یافت نشد" />;

  return (
    <div className="bg-seconday-0 overflow-x-auto flex justify-center items-center w-full">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{project.title}</td>
              <td>{project.category.title}</td>
              <td>{project.budget}</td>
              <td>{project.deadline}</td>
              <td>
                <div className="flex flex-wrap items-center max-w-[200px]">
                  {project.tags.map((tag) => (
                    <span className="budge budge-secondary" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td>{project.freelancer?.name || "-"}</td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="budge budge--success">باز</span>
                ) : (
                  <span className="budge budge--danger">بسته</span>
                )}
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectsTable;
