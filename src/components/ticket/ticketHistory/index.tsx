import {
  FaArrowRightToBracket,
  FaArrowRightFromBracket,
} from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const TicketHistoryDis = () => {
  const [openTicketsToggle, setOpenTicketsToggle] = useState(false);
  const [closedTicketsToggle, setClosedTicketsToggle] = useState(false);

  const handleOpenTicketsToggle = () => {
    setOpenTicketsToggle(!openTicketsToggle);
  };

  const handleClosedTicketsToggle = () => {
    setClosedTicketsToggle(!closedTicketsToggle);
  };

  return (
    <div>
      <div className="flex justify-between items-center my-5 py-6 px-3 rounded-xl bg-white">
        <div className="flex items-center space-x-3">
          <FaArrowRightToBracket /> <span>Open Tickets</span>
        </div>
        <div className="cursor-pointer" onClick={handleOpenTicketsToggle}>
        {openTicketsToggle ? (<IoIosArrowUp />):(<IoIosArrowDown />)}
        </div>
      </div>

      {openTicketsToggle ? (
        <Link to="/ticket/0451233345">
          <div className="flex bg-white rounded-xl my-5">
            <div className="bg-BuyTicket bg-cover bg-no-repeat bg-center w-[200px]"></div>
            <div className="flex-row p-3">
              <div>Wonder Girls World Tour San Francisco</div>
              <div>June 9, 2024</div>
              <div>#0451233345</div>
            </div>
          </div>
        </Link>
      ) : (
        ""
      )}

      <div className="flex justify-between items-center my-5 py-6 px-3 rounded-xl bg-white">
        <div className="flex items-center space-x-3">
          <FaArrowRightFromBracket /> <span>Closed Tickets</span>
        </div>
        <div className="cursor-pointer" onClick={handleClosedTicketsToggle}>
        {closedTicketsToggle ? (<IoIosArrowUp />) : (<IoIosArrowDown />) }
        </div>
      </div>
      {closedTicketsToggle ? (
        <h1 className="my-5 text-2xl text-gray-500 text-center">
          Nothing to Show
        </h1>
      ) : (
        ""
      )}
    </div>
  );
};

export default TicketHistoryDis;
