import { GrMoney } from "react-icons/gr";

const DashboardDisplay = () => {
  return (
    <div className="eddyContainer">
        <div className="grid gap-4 grid-rows-1 md:grid-cols-2 mt-10">
      <div className="bg-white p-4 h-36 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold">Regime:</div>
          <div className="font-bold text-xl">Evil</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h2 className="font-bold text-xl">Balance:</h2>
            <p className="font-bold text-base">40,000</p>
          </div>
          <div className="text-4xl">
            <GrMoney />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 h-36 rounded-xl">
        <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-xl">Available Tickets:</div>
            <div className="font-bold text-xl">300</div>
        </div>
        <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-xl">Tickets Sold:</div>
            <div className="font-bold text-xl">700</div>
        </div>
        <div className="flex justify-between items-center">
            <div className="font-bold text-xl">Tickets Sold(Affiliates):</div>
            <div className="font-bold text-xl">200</div>
        </div>
      </div>
      </div>
      <div className="bg-white p-4 h-80 rounded-xl my-10 overflow-y-scroll scrollbar-hide">
      <h1 className="text-xl font-bold">Activity</h1>
      </div>
    </div>
  );
};

export default DashboardDisplay;
