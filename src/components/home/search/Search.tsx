import SelectState from "./select/select_state/SelectState";
import { FaSearch } from "react-icons/fa";

const Search = ({ stateParser }: { stateParser: (value: string) => void }) => {
  return (
    <div className="eddyContainer grid grid-cols-2 gap-1 bg-white p-6 rounded-[20px] shadow-md">
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Search..."
          className="customizedInput"
        />
        <button
          type="button"
          className="text ml-3 mr-3 bg-[#7165e3] hover:bg-[#7FA7FF] rounded px-3 py-[0.1rem]"
        >
          <FaSearch />
        </button>
      </div>
      <div className="">
        <SelectState stateParser={stateParser} />
      </div>
    </div>
  );
};

export default Search;
