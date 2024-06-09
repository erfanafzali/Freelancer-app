 
import { BsCollectionFill } from "react-icons/bs";
import Stat from "../../components/templates/Stat";
import { FaUser } from "react-icons/fa";
import { PiGridFourFill } from "react-icons/pi";

function Stats({ proposals, projects, users }) {
 

  return (
    <div className="w-full  gap-x-8 mt-8">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 min-h-60 gap-x-4 gap-y-4 ">
        <Stat
          color="primary"
          numOfProjects={users.length}
          title="کاربران"
          icon={
            <FaUser className="sm:w-24 sm:h-24   w-14 h-14   p-2 rounded-full bg-primary-300 " />
          }
        />
        <Stat
          color="green"
          numOfProjects={proposals.length}
          title="درخواست ها"
          icon={
            <PiGridFourFill className="sm:w-24 sm:h-24   w-14 h-14 min-w-14   p-2 rounded-full bg-green-300 " />
          }
        />
        <Stat
          color="yellow"
          numOfProjects={projects.length}
          title="پروژه ها"
          icon={
            <BsCollectionFill className="sm:w-24 sm:h-24   w-14 h-14   p-2 rounded-full bg-yellow-300 " />
          }
        />
      </div>
    </div>
  );
}

export default Stats;
