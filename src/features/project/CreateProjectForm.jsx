import { useForm } from "react-hook-form";
import TextFeild from "../../components/templates/TextFeild";
import SelectForm from "../../components/templates/SelectForm";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import DatePickerForm from "../../components/templates/DatePickerForm";

function CreateProjectForm() {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
        options={[]}
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
      <button
        type="submit"
        className="w-full bg-primary-900 rounded-lg text-secondary-0 py-2 font-bold"
      >
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
