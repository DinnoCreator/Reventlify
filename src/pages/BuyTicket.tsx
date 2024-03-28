import { FaRegBookmark } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BsClock } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { TbLocation } from "react-icons/tb";

const BuyTicket = () => {
  return (
    <div>
      <div className="text-white bg-BuyTicket bg-cover bg-no-repeat bg-center mx-auto md:w-[400px] md:py-6 h-[30vh] relative">
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
      <div className="rounded-t-3xl bg-white h-[60vh] w-full md:w-[400px] mx-auto absolute left-1/2 transform -translate-x-1/2 top-[25%] overflow-y-scroll scrollbar-hide text-black">
        <div className="eddyContainer">
          <div className="flex items-center mt-5 justify-between">
            <div>
              <h3 className="font-bold text-base">
                Wonder Girls World Tour San Francisco
              </h3>
              <p className="flex items-center space-x-3 mt-3">
                <span className="mr-2 text-2xl">
                  <CgProfile />
                </span>{" "}
                Gojou Satoru{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center">
              <span className="mr-2">
                <RiShoppingBag3Line />
              </span>
              Regular -{" "}
              <span className="ml-2 ">
                5<span className="ml-1">$</span>
              </span>
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center">
              <span className="mr-2">
                <RiShoppingBag3Line />
              </span>
              VIP -{" "}
              <span className="ml-2 ">
                15<span className="ml-1">$</span>
              </span>
            </button>
          </div>

          <div className="flex item-center mt-6 space-x-3 md:space-x-6">
            <div className="text-blue-600 bg-gray-200 text-2xl p-3 rounded-full">
              <BsClock />
            </div>
            <div>
              <p className="text-gray-400">June 9, 2024</p>
              <p>8:00-10:00 PM</p>
            </div>
          </div>
          <div className="flex item-center mt-4 mb-4 space-x-3 md:space-x-6">
            <div className="text-blue-600 bg-gray-200 text-2xl p-3 rounded-full space-x-3">
              <CiLocationOn />
            </div>
            <div>
              <p className="text-gray-400">Lagos, LAG</p>
              <p>Festival Mall, Festac</p>
            </div>

            <div className="text-white bg-blue-600 border-blue-600 p-3 text-2xl rounded-full">
              <TbLocation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTicket;
