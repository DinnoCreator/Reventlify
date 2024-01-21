import theImage from "../../../images/Image3.png";

const CreateEvents = () => {
  return (
    <div className="bg-[#eee1ff]">
      <div className="eddyContainer flex flex-col md:flex-row md:items-end w-full gap-5 h-64">
        <div className="flex-1 h-[19rem] top-0">
          <img src={theImage} alt="t" width={"550px"} className="h-full" />
        </div>
        <div className="flex flex-1 flex-col gap-4 my-auto">
          <div className="text-4xl font-bold">Make your own Event </div>
          <div className="text-lg text-[#272727] ">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.{" "}
          </div>
          <div className="flex flex-col">
            <button
              type="button"
              className="text-center text-lg font-bold text-white shadow-[0px_10px_50px_0px_rgba(61,_55,_241,_0.25)] bg-[#f5167e] h-16 w-44 rounded-[50px]"
            >
              Create Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvents;
