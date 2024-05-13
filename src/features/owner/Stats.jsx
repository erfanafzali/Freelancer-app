import { HiViewGrid } from "react-icons/hi";

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
    <div className="w-full  gap-x-8">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 min-h-60 gap-x-4 ">
        <div className="bg-primary-200 rounded-xl dark:bg-blue-800">
          <HiViewGrid />
        </div>
        <div className="">
          <HiViewGrid />
        </div>
        <div className="">
          <HiViewGrid />
        </div>
        <div className="">
          <HiViewGrid />
        </div>
      </div>
    </div>
  );
}

export default Stats;
