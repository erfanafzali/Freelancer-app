import Loader from "../../components/modules/Loader";
import Empty from "../../components/modules/Empty";
import Table from "../../components/templates/Table";
 
import useProjects from "../../hooks/useProjects";
import TableRowProject from './TableRowProject';

function ProjectsTable() {
  const { projects, isLoading } = useProjects();

  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty resroucename="پروژه ای یافت نشد" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>هزینه</th>
        <th>زمان تحویل</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <TableRowProject key={project._id} index={index} project={project} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
