import { HiViewGrid } from "react-icons/hi";
import { HiCurrencyDollar } from "react-icons/hi2";
import { BsCollectionFill } from "react-icons/bs";

import Stat from "../../components/templates/Stat";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map(
    (project) => project.status === 2
  ).length;

  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  console.log(numOfProjects, numOfAcceptedProjects, numOfProposals);

  return (
    <div className="w-full  gap-x-8 mt-8">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 min-h-60 gap-x-4 gap-y-4">
        <Stat
          color="primary"
          numOfProjects={numOfProjects}
          title="پروژه ها"
          icon={
            <HiViewGrid className="sm:w-24 sm:h-24   w-14 h-14   p-2 rounded-full bg-primary-300 " />
          }
        />
        <Stat
          color="green"
          numOfProjects={numOfProjects}
          title="پروژه های واگذار شده"
          icon={
            <HiCurrencyDollar className="sm:w-24 sm:h-24   w-14 h-14 min-w-14   p-2 rounded-full bg-green-300 " />
          }
        />
        <Stat
          color="yellow"
          numOfProjects={numOfProjects}
          title="درخواست ها"
          icon={
            <BsCollectionFill className="sm:w-24 sm:h-24   w-14 h-14   p-2 rounded-full bg-yellow-300 " />
          }
        />
      </div>
    </div>
  );
}

export default Stats;
