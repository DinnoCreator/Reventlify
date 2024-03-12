// import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#0A075F] w-[100%] h-[250px] mt-[4rem]">
      <div className="flex flex-col eddyContainer h-full">
        <div className="text-white flex-[4] flex flex-col md:flex-row gap-[5rem]">
          <div className="flex-1 flex items-center">
            <div className="flex flex-col gap-3">
              <h2 className="text-[20px]">
                <span className="font-bold">Revent</span>lify
              </h2>
              <p className="text-[#F3F3F3] text-[14px]">
                Reventlify is a global self-service ticketing platform for live
                experiences that allows anyone to create, share, find and attend
                events that fuel their passions and enrich their lives.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-row gap-4 items-center">
            <div className="flex-1 flex flex-col gap-3 justify-center">
              <div className="font-bold">Plan Events</div>
              <div className="text-[14px]">
                <p>Create and Set Up</p>
                <p>Sell Tickets</p>
                <p>Online RSVP</p>
                <p>Online Events</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-3 justify-center">
              <div className="font-bold">Eventick</div>
              <div className="text-[14px]">
                <p>Create and Set Up</p>
                <p>Sell Tickets</p>
                <p>Online RSVP</p>
                <p>Online Events</p>
              </div>
            </div>
          </div>
          <div className="flex-1">met</div>
        </div>
        <div className="text-white flex-[1]">yet</div>
      </div>
    </div>
  );
};

export default Footer;
