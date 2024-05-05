import { useForm } from "react-hook-form";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import TextFeild from "../../components/templates/TextFeild";
import SelectForm from "../../components/templates/SelectForm";
import DatePickerForm from "../../components/templates/DatePickerForm";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "../../hooks/useCreateProject";
import Loader from "../../components/modules/Loader";
import useEditProject from "../../hooks/useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    description,
    budget,
    deadline,
    category,
    tags: prevTags,
  } = projectToEdit;

  let editValue = {};
  if (isEditSession) {
    editValue = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { myCategories } = useCategories();
  const { isCreating, createNewProject } = useCreateProject();
  const { editNewProject } = useEditProject();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValue });

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editNewProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createNewProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form className="pb-5 " onSubmit={handleSubmit(onSubmit)}>
      <TextFeild
        register={register}
        required
        name="title"
        label="عنوان پروژه"
        validationSchema={{
          required: "عنوان ضروری",
          minLength: {
            value: 10,
            message: "طول عنوان نامعتبر است",
          },
        }}
        errors={errors}
      />
      <TextFeild
        register={register}
        required
        name="description"
        label="توضیحات پروژه"
        validationSchema={{
          required: "توضیحات ضروری",
          minLength: {
            value: 10,
            message: "طول توضیحات نامعتبر است",
          },
        }}
        errors={errors}
      />
      <TextFeild
        register={register}
        required
        name="budget"
        type="number"
        label="بودجه پروژه"
        validationSchema={{
          required: "بودجه ضروری",
          minLength: {
            value: 10,
            message: "طول بودجه نامعتبر است",
          },
        }}
        errors={errors}
      />
      <SelectForm
        label="دسته بندی"
        name="category"
        register={register}
        options={myCategories}
        required
        errors={errors}
        validationSchema={{
          required: "انتخاب دسته بندی ضروری",
        }}
      />
      <div className="mb-3 md:mb-5">
        <label htmlFor="tags">تگ ها</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerForm date={date} setDate={setDate} label="دد لاین" />
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
  );
}

export default CreateProjectForm;
