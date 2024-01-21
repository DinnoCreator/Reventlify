import { IoIosArrowDown } from "react-icons/io";

const Filter = () => {
  return (
    <div className="flex flex-col md:flex-row my-16 md:mt-32 md:mb-20 eddyContainer">
      <div className="text-2xl md:text-4xl font-bold flex-1 flex items-end">
        Upcoming Events
      </div>
      <div className="flex flex-row w-full flex-1 justify-between overflow-x-scroll scrollbar-hide md:overflow-x-auto py-1">
        <div className="cursor-pointer shadow-md mt-2 md:mt-0 text-sm font-medium text-[#1d275f] bg-[#f2f4ff] flex flex-row w-fit h-10 pt-3 md:hover:pt-2 px-6 rounded-[50px]">
          Weekdays
          <span className="ml-2 pt-1">
            <IoIosArrowDown />
          </span>
        </div>
        <div className="whitespace-nowrap cursor-pointer shadow-md ml-4 md:ml-0 mt-2 md:mt-0 text-sm font-medium text-[#1d275f] bg-[#f2f4ff] flex flex-row w-fit h-10 pt-3 md:hover:pt-2 px-6 rounded-[50px]">
          Event Type
          <span className="ml-2 pt-1">
            <IoIosArrowDown />
          </span>
        </div>
        <div className="cursor-pointer shadow-md ml-4 md:ml-0 mt-2 md:mt-0 text-sm font-medium text-[#1d275f] bg-[#f2f4ff] flex flex-row w-fit h-10 pt-3 md:hover:pt-2 px-6 rounded-[50px]">
          Cathegory
          <span className="ml-2 pt-1">
            <IoIosArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
