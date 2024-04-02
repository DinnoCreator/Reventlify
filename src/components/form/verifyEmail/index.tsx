import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface VerifyEmailDisplayProps {
  setOtp: Dispatch<SetStateAction<string>>;
  verifyEmail: any;
  error: string;
}

const VerifyEmailDisplay = ({
  setOtp,
  verifyEmail,
  error,
}: VerifyEmailDisplayProps) => {
  const handleVerifyEmail = async (e: any) => {
    e.preventDefault();
    verifyEmail();
  };
  return (
    <div className="eddyContainer">
      <Link to="/">
        <div className="flex space-x-1 items-center mt-5 text-xl font-bold">
          <div>
            <IoIosArrowBack />
          </div>
          <h2>Home</h2>
        </div>
      </Link>
      <div className="flex-col justify-center items-center  mt-16 px-6 md:w-[35%] mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-2">
          Reventlify
        </h2>
        <p className="text-2xl text-center font-bold">Never miss the fun...</p>
        <form className="mt-6" onSubmit={handleVerifyEmail}>
          {error && <div className="text-xl text-red-500 mb-3">{error}</div>}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
            <div className="my-3">
              <label htmlFor="exampleInputEmail1" className="font-normal">
                Verify Email Address
              </label>
              <motion.input
                type="text"
                id="exampleInputText1"
                autoComplete="code"
                aria-describedby="emailHelp"
                className="block mt-2 w-full rounded-xl p-2"
                minLength={5}
                maxLength={5}
                required
                onChange={(e) => setOtp(e.target.value)}
                whileFocus={{ scale: 1.1 }}
              ></motion.input>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
            <button
              type="submit"
              className={`text-center text-white px-2 py-2 bg-blue-600 rounded-xl my-6 w-full`}
            >
              verify OTP
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmailDisplay;
