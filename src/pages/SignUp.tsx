import { IoIosArrowBack } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<IoIosEye />);

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(<IoMdEyeOff />);
    } else {
      setType("password");
      setIcon(<IoIosEye />);
    }
  };

  return (
    <>
      <div className="eddyContainer">
        <Link to="/">
        <div className="flex space-x-1 items-center mt-5 text-xl font-bold">
          <div>
            <IoIosArrowBack />
          </div>
          <h2>Home</h2>
        </div>
        </Link>
        <div className="flex-col justify-center items-center  md:mt-10 mt-5 md:w-[35%] mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 text-center">
            Reventlify
          </h2>
          <p className="text-2xl text-center font-bold">
            Never miss the fun...
          </p>
          <form>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
              <div className="my-2">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <motion.input
                  type="email"
                  id="exampleInputEmail1"
                  autoComplete="off"
                  aria-describedby="emailHelp"
                  className="block mt-2 w-full rounded-xl p-2"
                  required
                  whileFocus={{ scale: 1.1 }}
                ></motion.input>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
              <div className="my-2">
                <label htmlFor="exampleInputEmail1">Username</label>
                <motion.input
                  type="text"
                  id="exampleInputEmail1"
                  autoComplete="off"
                  aria-describedby="emailHelp"
                  className="block mt-2 w-full rounded-xl p-2"
                  required
                  whileFocus={{ scale: 1.1 }}
                ></motion.input>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
              <div className="my-2">
                <label htmlFor="exampleInputPassword1">Password</label>
                <div className="flex space-x-2 items-center mt-2">
                  <input
                    type={type}
                    id="exampleInputPassword1"
                    className=" w-[95%] rounded-xl p-2"
                    autoComplete="off"
                    required
                  />
                  <button
                    type="button"
                    className="text-xl text-white px-2 py-1 bg-blue-600 rounded-xl"
                    onClick={handleToggle}
                  >
                    {icon}
                  </button>
                </div>
                <div id="emailHelp" className="text-sm text-gray-400">
                  min. 8 characters
                </div>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
              <div className="text-center text-white px-2 py-2 bg-blue-600 rounded-xl my-6">
                <button type="submit">Sign up</button>
              </div>
            </motion.div>

            <hr />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
