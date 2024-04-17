import useOwnerProjects from "../../hooks/useOwnerProjects";
import Loader from "../../components/modules/Loader";
import Empty from "../../components/modules/Empty";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function ProjectsTable() {
  const { projects, isLoading } = useOwnerProjects();

  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty resroucename="پروژه ای یافت نشد" />;

  return (
    <div className="bg-seconday-0 overflow-x-auto flex justify-center items-center w-full">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>فریلنسر</th>
            <th>توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th>تگ ها</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{truncateText(project.title, 30)}</td>
              <td>{project.category.title}</td>
              <td>{toPersianNumbersWithComma(project.budget)}</td>
              <td>{toLocalDateShort(project.deadline)}</td>
              <td>
                <div className="flex flex-wrap items-center max-w-[200px]">
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
                {project.status === "OPEN" ? (
                  <span className=" inline-block whitespace-nowrap rounded-xl px-2 py-0.5  bg-green-500 text-white">
                    باز
                  </span>
                ) : (
                  <span className=" inline-block whitespace-nowrap rounded-xl px-2 py-0.5   bg-red-500 text-white ">
                    بسته
                  </span>
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
