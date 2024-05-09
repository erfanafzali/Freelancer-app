import { useForm } from "react-hook-form";
import SelectForm from "./SelectForm";
import useProposalStatus from "../../hooks/useProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../modules/Loader";
 

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

function ChangeProposalStatus({ proposalId, onClose }) {
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm();
  const { isUpdating, propsalStatus } = useProposalStatus();
  const queryClient = useQueryClient();

 
 
  const onSubmit = (data) => {
    propsalStatus(
      { id: proposalId, data },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
          onClose();
          console.log(data);
        },
      }
    );
    console.log(data);
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

export default ChangeProposalStatus;
