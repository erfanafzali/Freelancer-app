import { useState } from "react";

import Table from "../../components/templates/Table";
import Modal from "../../components/modules/Modal";
import ChangeUserStatus from "./ChangeUserStatus";

const statusStyle = [
  { label: "رد شده", className: "bg-red-500" },
  { label: "در انتظار تایید", className: "bg-yellow-500" },
  { label: "تایید شده", className: "bg-green-500" },
];

function UserRow({ user, index }) {
  const [open, setOpen] = useState(false);
  const { status } = user;
  

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span
          className={` px-2 py-0.5 rounded-lg ${statusStyle[status].className}`}
        >
          {statusStyle[status].label}
        </span>
      </td>

      <td className="flex justify-start items-center  gap-x-1">
        <Modal
          onOpen={open}
          title="تغییر وضعیت کاربر"
          onClose={() => setOpen(false)}
        >
          <ChangeUserStatus userId={user._id} />
        </Modal>
        <button
          className="text-primary-800 font-bold"
          onClick={() => setOpen(true)}
        >
          تغییر وضعیت
        </button>
      </td>
    </Table.Row>
  );
}

export default UserRow;
