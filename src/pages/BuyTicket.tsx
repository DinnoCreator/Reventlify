import { FaRegBookmark } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LuPartyPopper } from "react-icons/lu";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BsClock } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { TbLocation } from "react-icons/tb";


const BuyTicket = () => {
  return (
    <div>
      <div className="text-white bg-BuyTicket bg-cover bg-no-repeat bg-center mx-auto md:w-[550px] md:py-6 h-[350px] md:h-[360px] xl:h-[420px] relative">
        <div className="eddyContainer pt-10 md:pt-2">
          <div className="flex justify-between items-center">
            <div className="text-black bg-white text-2xl w-10 h-10 flex items-center justify-center rounded-full">
              <IoMdArrowRoundBack />
            </div>
            <div className="text-black bg-white text-2xl w-10 h-10 flex items-center justify-center rounded-full">
              <FaRegBookmark />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-t-3xl bg-white h-[51vh] w-[550px] mx-auto absolute left-1/2 transform -translate-x-1/2    top-[49%] overflow-y-scroll scrollbar-hide text-black">
        <div className="eddyContainer">
        <div className="flex items-center mt-5 justify-between">
          <div>
            <h3 className="font-bold text-xl">Wonder Girls World Tour San Francisco</h3>
            <p className="flex items-center space-x-3 mt-3"><span className="mr-2"><CgProfile /></span> Gojou Satoru <span className="text-blue-500">Follow</span></p>
          </div>
          <div className="text-white bg-green-600 text-2xl p-3 flex items-center justify-center rounded-[20px]"><LuPartyPopper /></div>
        </div>
        <div className="flex items-center space-x-3 mt-8">
          <button className="text-blue-500 border-2 border-blue-600 px-3 py-2 rounded-full">I am interested</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center"><span className="mr-2"><RiShoppingBag3Line /></span>Buy - <span className="ml-2 ">15<span className="ml-1">$</span></span></button>
        </div>
        <div className="flex mt-8 items-center space-x-1 md:space-x-4">
        <p><span>24</span> people are going:</p>
        <div className="flex"><CgProfile /><CgProfile /><CgProfile /><CgProfile /><CgProfile /></div>
        <div>View all</div>
        </div>
        <div className="flex item-center justify-between mt-10">
          <div className="text-blue-600 bg-gray-200 text-2xl p-3 rounded-full"><BsClock /></div>
          <div className="text-left">
            <p className="text-gray-400">June 9, 2024</p>
            <p>8:00-10:00 PM</p>
          </div>
          <div className="text-blue-600 border border-blue-600 p-3 text-2xl rounded-full"><FaRegCalendar /></div>
        </div>
        <div className="flex item-center justify-between mt-4 mb-4">
          <div className="text-blue-600 bg-gray-200 text-2xl p-3 rounded-full"><CiLocationOn /></div>
          <div  className="text-left">
            <p className="text-gray-400">Lagos, LAG</p>
            <p>Festival Mall, Festac</p>
          </div>
          <div className="text-blue-600 border border-blue-600 p-3 text-2xl rounded-full"><TbLocation /></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTicket;
