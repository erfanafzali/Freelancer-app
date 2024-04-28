function SelectForm({
  label,
  name,
  register,
  options,
  required,
  validationSchema,
  errors,
}) {
  return (
    <div className="md:mb-3  mb-2 flex flex-col justify-center items-start">
      <label htmlFor="name" className="text-sm md:text-base">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        {...register(name, validationSchema)}
        id={name}
        className="bg-secondary-200 w-full py-1 md:py-2 px-3 rounded-lg mt-1"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="w-full">
            {option.label}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="text-error bolck text-sm mt-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default SelectForm;
