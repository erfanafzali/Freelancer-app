import { useSearchParams } from "react-router-dom";
import SelectFilter from "../../components/templates/SelectFilter";

function FilterDropDown({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get(filterField) || "";

  const handleChange = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <SelectFilter
        options={options}
        onChange={handleChange}
        value={filterValue}
      />
    </div>
  );
}

export default FilterDropDown;
