function SelectFilter({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="text-white bg-primary-900 rounded-lg py-1.5 px-3 text-sm  font-bold"
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default SelectFilter;
