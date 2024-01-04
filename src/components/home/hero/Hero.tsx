import fun from "../../../images/funBG.png";

const Hero = () => {
  return (
    <div className="eddyContainer px-3 md:px-0 pb-16 pt-20 md:py-8 flex md:flex-row-reverse flex-col-reverse">
      <div className="flex-1 mb-6 md:justify-end md:items-end">
        <img src={fun} alt="Fun background" />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div>
          <div className="text-2xl md:text-3xl font-bold text-white w-full">
            Seamless Event Planning and Ticket Acquisition
          </div>
          <div className="mt-6 text-lg leading-[23.4px] text-[#B9A8FE] w-fit">
            Discover endless excitement with{" "}
            <span className="italic">Reventlify</span> – where the party never
            ends! Revolutionizing event management and ticket sales like never
            before.
          </div>
          <div className="mt-6 flex flex-row w-full items-start">
            <button
              type="button"
              className="bg-[#f5167e] hover:bg-[#9f2f63] mr-4 font-bold py-2 px-4 rounded-[50px] border-solid border-[#f5167e] border-2"
            >
              Get Ticket
            </button>
            <button
              type="button"
              className="hover:text-[#f5167e] mr-4 font-bold py-2 px-4 rounded-[50px] border-solid hover:border-[#f5167e] border-white border-2"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
