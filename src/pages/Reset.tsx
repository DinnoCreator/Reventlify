import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Reset = () => {
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);

  const Reseter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!verifyEmail) {
      setVerifyEmail(true);
    } else if (verifyEmail) {
      setResetPassword(true);
    }
  };

  return (
    <div className="eddyContainer px">
      <Link to="/">
        <div className="flex space-x-1 items-center mt-5 text-xl font-bold">
          <div>
            <IoIosArrowBack />
          </div>
          <h2>Home</h2>
        </div>
      </Link>
      <div className="flex-col justify-center items-center px-6 mt-16 md:w-[35%] mx-auto">
        <h2 className="md:text-3xl text-2xl font-bold text-blue-600 text-center mb-2">
          Reventlify
        </h2>
        <p className="md:text-2xl text-xl text-center font-bold ">Never miss the fun...</p>
        <form className="mt-6">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
            <div className="my-2">
              {verifyEmail && !resetPassword ? (
                <>
                  <label htmlFor="exampleOTP" className="font-bold">Input OTP</label>
                  <motion.input
                    type="text"
                    id="exampleOTP"
                    autoComplete="off"
                    aria-describedby="emailHelp"
                    className="block mt-2 w-full rounded-xl p-2"
                    required
                    whileFocus={{ scale: 1.1 }}
                  ></motion.input>
                </>
              ) : verifyEmail && resetPassword ? (
                <>
                  <label htmlFor="exampleInputEmail1" className="font-bold">
                    Create new password
                  </label>
                  <motion.input
                    type="password"
                    id="exampleInputEmail1"
                    autoComplete="off"
                    aria-describedby="emailHelp"
                    className="block mt-2 w-full rounded-xl p-2"
                    required
                    whileFocus={{ scale: 1.1 }}
                  ></motion.input>
                </>
              ) : (
                <>
                  <label htmlFor="exampleInputEmail1" className="font-bold">Email address</label>
                  <motion.input
                    type="email"
                    id="exampleInputEmail1"
                    autoComplete="off"
                    aria-describedby="emailHelp"
                    className="block mt-2 w-full rounded-xl p-2"
                    required
                    whileFocus={{ scale: 1.1 }}
                  ></motion.input>
                </>
              )}
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
            <div>
              <button
                onClick={Reseter}
                type="submit"
                className="text-center text-white px-2 py-2 bg-blue-600 rounded-xl my-6 w-full"
              >
                {verifyEmail && !resetPassword
                  ? "Verify OTP"
                  : verifyEmail && resetPassword
                  ? "Set new password"
                  : "Send OTP"}
              </button>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default Reset;
