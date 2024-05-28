import { useForm } from "react-hook-form";
import TextFeild from "../../components/templates/TextFeild";
import Loader from "../../components/modules/Loader";
import useCreateProposal from "../../hooks/useCreateProposal";
function CreatedProposals({ onClose, projectId }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isCreating, createproposal } = useCreateProposal();

  const onSubmit = (data) => {
    createproposal(
      { ...data, projectId },
      {
        onSuccess: onClose(), 
      }
    );

    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <TextFeild
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "حداقل ۱۰ کارکتر را وارد کنید",
            },
          }}
          errors={errors}
        />
        <TextFeild
          label="قیمت"
          name="price"
          register={register}
          required
          validationSchema={{
            required: "قیمت ضروری است",
          }}
          errors={errors}
        />
        <TextFeild
          label="مدت زمان"
          name="duration"
          register={register}
          required
          validationSchema={{
            required: "مدت زمان ضروری است",
          }}
          errors={errors}
        />
        <div className="!mt-8">
          {isCreating ? (
            <Loader />
          ) : (
            <button
              type="submit"
              className="w-full bg-primary-900 rounded-lg text-secondary-0 py-2 font-bold"
            >
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreatedProposals;
