import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
function DatePickerForm({ label, date, setDate }) {
  return (
    <div className="mb-4  md:mb-6">
      <label htmlFor="">{label}</label>
      <DatePicker
        containerClassName="w-full"
        inputClass="w-full py-1.5 md:py-3 px-4 rounded-xl text-secondary-900 border border-secondary-100 bg-secondary-200 hover:border-primary-500 focus:border-primary-500 focus:bg-secondary-0 transition-all duration-300 ease-out focus:shadow-lg focus:shadow-primary-200 dark:focus:shadow-secondary-200"
        calendarPosition="bottom-center"
        value={date}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}

export default DatePickerForm;
