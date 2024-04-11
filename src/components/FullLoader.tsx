import { BeatLoader } from "react-spinners";

const FullLoader = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <BeatLoader color="#7165e3" loading={true} size={"40px"} />
    </div>
  );
};

export default FullLoader;
