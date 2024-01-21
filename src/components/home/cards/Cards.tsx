import moment from "moment";
import { duplicateArrayElements } from "../../../lib/arrays";
import {
  MOCK_CARD_DATA,
  MockCardData,
} from "../../../utilities/Mock_Card_Data";

const Cards = () => {
  const mockData: MockCardData[] = duplicateArrayElements(MOCK_CARD_DATA, 6);
  return (
    <div className="eddyContainer">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
        {mockData.map((cardData, i) => (
          <div key={i}>
            <div id="pic" className="">
              <img
                src={cardData.cardImg}
                alt="Rectangle"
                className="rounded-tr-[15px] rounded-tl-[15px]"
              />
            </div>
            <div
              id="card-body"
              className="flex flex-row bg-white p-4 rounded-br-[15px] rounded-bl-[15px]"
            >
              <div className="">
                <div className="text-center text-xs font-bold text-[#3d37f1] w-min">
                  {moment(cardData.cardDate, "DD/MM/YY")
                    .format("MMM")
                    .toUpperCase()}
                </div>
                <div className="text-3xl font-bold w-min">
                  {moment(cardData.cardDate, "DD/MM/YY").format("DD")}
                </div>
              </div>
              <div className="ml-3 flex-1">
                <div className="font-bold leading-[24px] w-full">
                  {cardData.cardTitle}
                </div>
                <div className="text-sm leading-[21px] text-[#6a6a6a] w-full mt-3">
                  {cardData.cardDescription}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center my-16">
        <button
          type="button"
          className="text-center text-lg font-bold text-[#3d37f1] border-solid border-[#3d37f1] shadow-[0px_10px_50px_0px_rgba(61,_55,_241,_0.25)] h-12 px-3 border-2 rounded-[50px]"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Cards;
