function Stat({ numOfProjects, title, icon, color }) {
  const colors = {
    primary: "bg-primary-200 text-primary-700",
    green: "bg-green-200 text-green-700",
    yellow: "bg-yellow-200 text-yellow-700",
  };

  return (
    <div
      className={`bg-primary-200 rounded-xl dark:bg-blue-800 flex justify-start items-center gap-x-4 sm:gap-x-6 px-2 py-1 md:py-3 min-w-28 max-h-20 sm:max-h-32 ${colors[color]}`}
    >
      {icon}
      <div className="flex flex-col justify-center items-start gap-y-2 text-xl">
        <h1 className="text-xs sm:text-lg md:text-xl  font-bold text-primary-700 dark:text-blue-200 ">
          {title}
        </h1>
        <p className=" text-xl sm:text-3xl font-bold">{numOfProjects}</p>
      </div>
    </div>
  );
}

export default Stat;
