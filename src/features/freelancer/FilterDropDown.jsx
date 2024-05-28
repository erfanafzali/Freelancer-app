import { useSearchParams } from "react-router-dom";

function FilterDropDown({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get(filterField);

  const handleChange = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <select value={category} onChange={handleChange} className="">
        {options.map((item) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterDropDown;
