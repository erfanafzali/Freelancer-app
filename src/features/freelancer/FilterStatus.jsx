import { useSearchParams } from "react-router-dom";

function FilterStatus({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentField = searchParams.get(filterField) || options.at(0).value;

  const handleChange = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-primary-900 px-2 py-1 rounded-lg text-white gap-x-2">
        <span className="font-bold">وضعیت:</span>
        <div className="flex justify-center items-center gap-x-2 bg-secondary-0 text-black  rounded-lg whitespace-nowrap w-full">
          {options.map((item) => {
            const isActive = item.value === currentField;
            return (
              <button
                key={item.value}
                disabled={isActive}
                onClick={() => handleChange(item.value)}
                className={`text-sm py-1 ease-in w-full min-w-14  transition-all duration-300 rounded-md dark:text-white ${
                  isActive
                    ? "bg-primary-900 text-white px-3 "
                    : "bg-secondary-0 text-black w-full px-1"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FilterStatus;
