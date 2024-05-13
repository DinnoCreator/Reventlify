import { useState } from "react";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";
import TicketHistoryDis from "../components/ticket/ticketHistory";

const Ticket = () => {
  const [historyToggle, setHistoryToggle] = useState(false);

  const handleHistoryToggle = () => {
    setHistoryToggle(!historyToggle);
  };

  return (
    <div className="mx-auto md:w-[400px] eddyContainer">
      <div className="flex justify-between items-center mt-10">
        <div>
          {historyToggle ? (<h2>Ticket History.......</h2>) : (<h2>1 open ticket......</h2>)}
        </div>
        <div className={`text-2xl cursor-pointer ${historyToggle ? "text-blue-700": "text-black"}`} onClick={handleHistoryToggle}>
          <FaHistory />
        </div>
      </div>
      <div>
        {historyToggle ? (
          <TicketHistoryDis />
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Ticket;
