import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
 
import Loader from "../../components/modules/Loader";
import SelectForm from "../../components/templates/SelectForm";
 
import useUserStatus from "../../hooks/useUserStatus";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { isUpdating, userStatus } = useUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    userStatus(
      { userId, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["users"] });
          onClose();
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectForm
          name="status"
          label="تغییر وضعیت"
          register={register}
          required
          options={options}
        />

        <div className="mt-4">
          {isUpdating ? (
            <Loader />
          ) : (
            <button
              type="submit"
              className="w-full bg-primary-800 py-1 md:py-2 text-secondary-0 font-bold rounded-lg shadow-md shadow-secondary-600"
            >
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeUserStatus;
