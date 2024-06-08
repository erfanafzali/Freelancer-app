import useCategories from "../../hooks/useCategories";
import FilterDropDown from "./FilterDropDown";
import FilterStatus from "./FilterStatus";

const sortOptions = [
  { label: "مرتب سازی (جدید ترین)", value: "latest" },
  { label: "مرتب سازی (قدیمی ترین)", value: "earliest" },
];

const statusOptions = [
  { label: "همه", value: "ALL" },
  { label: "باز", value: "OPEN" },
  { label: "بسته", value: "CLOSED" },
];

function ProjectHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="w-full flex justify-between items-center text-secondary-800 mb-8 whitespace-nowrap flex-nowrap overflow-x-auto gap-x-14 md:gap-x-0">
      <h1 className="font-bold text-lg">لیست پروژه ها</h1>
      <div className="flex justify-center items-center gap-x-4">
        <FilterStatus filterField="status" options={statusOptions} />
        <FilterDropDown filterField="sort" options={sortOptions} />
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
