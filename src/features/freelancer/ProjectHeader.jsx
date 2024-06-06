import useCategories from "../../hooks/useCategories";
import FilterDropDown from "./FilterDropDown";

function ProjectHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="w-full flex justify-between items-center text-secondary-800 mb-8">
      <h1 className="font-bold text-lg">لیست پروژه ها</h1>
      <div>
        <FilterDropDown
          filterField="category"
          options={[
            { value: "ALL", label: "دسته بندی (همه)" },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
