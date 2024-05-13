import { IoMdArrowRoundBack } from "react-icons/io";
import { LuPartyPopper } from "react-icons/lu";
import QRCode from "react-qr-code";
import { useParams, Link } from 'react-router-dom';


const TicketBody = () => {
    let { id } = useParams();
  return (
    <div>
      <div className="md:w-[400px] mx-auto eddyContainer">
        <div className="flex items-center mt-4">
          <Link to="/ticket"><div className="text-2xl">
            <IoMdArrowRoundBack />
          </div></Link> 
          <h3 className="text-center flex-grow ">#{id}</h3>
        </div>
        <div className="eddyContainer rounded-t-3xl bg-BuyTicket bg-cover bg-no-repeat bg-center mt-5 mx-auto w-full h-[25vh]"></div>
        <div className="bg-white py-4 eddyContainer rounded-b-[-24px] h-[35vh]">
          <h3 className="font-bold text-base">
            Wonder Girls World Tour San Francisco
          </h3>
          <div className="flex items-center justify-between mt-4">
            <div>
              <h5 className="text-gray-400 text-sm font-bold">Date</h5>
              <p className="font-bold text-base">June 9, 2024</p>
            </div>
            <div>
              <h5 className="text-gray-400 text-sm font-bold">Time</h5>
              <p className="font-bold text-base">8:00pm</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <h5 className="text-gray-400 text-sm font-bold">Place</h5>
              <p className="font-bold text-base">Festival Mall, Festac, LAG</p>
            </div>
            <div>
              <div className="text-white bg-green-600 text-2xl p-3 flex items-center justify-center rounded-[20px]">
                <LuPartyPopper />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100px] h-[60px] mx-auto my-6">
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value="Gojou"
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>
    </div>
  
  )
}

export default TicketBody;
