import Empty from "../../components/modules/Empty";
import Loader from "../../components/modules/Loader";
import Table from "../../components/templates/Table";
import useUsers from "../../hooks/useUsers";
import UserRow from "./UserRow";

function UsersTable() {
  const { users, isLoading } = useUsers();

  if (isLoading) return <Loader />;
  if (!users.length) return <Empty resroucename="کاربری یافت نشد" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>تام</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow key={user._id} index={index} user={user} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
