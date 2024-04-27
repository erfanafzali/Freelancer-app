function TextFeild({
  name,
  label,
  register,
  type = "text",
  validationSchema,
  required,
  errors,
}) {
  return (
    <div className="flex flex-col w-full justify-center items-start mb-3">
      <label htmlFor={name}>
        {label} : {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        type={type}
        id={name}
        name={name}
        autoComplete="off"
        className="bg-secondary-200 w-full py-2 px-3 rounded-lg mt-1 "
      />
      {errors && errors[name] && (
        <span className="text-error bolck text-sm mt-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextFeild;
