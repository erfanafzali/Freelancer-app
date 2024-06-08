import { HiViewGrid } from "react-icons/hi";
import { HiCurrencyDollar } from "react-icons/hi2";
import { BsCollectionFill } from "react-icons/bs";

import Stat from "../../components/templates/Stat";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((project) => project.status === 2);

  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  console.log(numOfProposals, acceptedProposals, balance);

  return (
    <div className="w-full  gap-x-8 mt-8">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 min-h-60 gap-x-4 gap-y-4 ">
        <Stat
          color="primary"
          numOfProjects={numOfProposals}
          title="درخواست ها"
          icon={
            <HiViewGrid className="sm:w-24 sm:h-24   w-14 h-14   p-2 rounded-full bg-primary-300 " />
          }
        />
        <Stat
          color="green"
          numOfProjects={acceptedProposals.length}
          title="تایید شده"
          icon={
            <HiCurrencyDollar className="sm:w-24 sm:h-24   w-14 h-14 min-w-14   p-2 rounded-full bg-green-300 " />
          }
        />
        <Stat
          color="yellow"
          numOfProjects={toPersianNumbersWithComma(balance)}
          title="کیف پول"
          icon={
            <BsCollectionFill className="sm:w-24 sm:h-24   w-14 h-14   p-2 rounded-full bg-yellow-300 " />
          }
        />
      </div>
    </div>
  );
}

export default Stats;
