import { IoIosArrowBack } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface LoginProps {
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  loading: boolean;
  error: string;
  loginFunc: any;
}

const Login = ({
  error,
  setPassword,
  setEmail,
  loading,
  loginFunc,
}: LoginProps) => {
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    loginFunc();
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
      <div className="flex-col justify-center items-center  mt-14 px-6  md:w-[35%] mx-auto">
        <h2 className="md:text-3xl text-2xl font-bold text-blue-600 text-center mb-2">
          Reventlify
        </h2>
        <p className="md:text-2xl text-xl text-center font-bold">
          Never miss the fun...
        </p>
        <form className="mt-6" onSubmit={handleSubmit}>
          {error && <div className="text-xl text-red-500 mb-3">{error}</div>}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
            <div className="my-3">
              <label htmlFor="exampleInputEmail1" className="font-normal">
                Email address
              </label>
              <motion.input
                type="email"
                id="exampleInputEmail1"
                autoComplete="off"
                aria-describedby="emailHelp"
                className="block mt-2 w-full rounded-xl p-2"
                required
                whileFocus={{ scale: 1.1 }}
                onChange={(e) => setEmail(e.target.value)}
              ></motion.input>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
            <div className="my-3">
              <label htmlFor="exampleInputPassword1" className="font-normal">
                Password
              </label>
              <div className="flex space-x-2 items-center mt-2">
                <input
                  type={type}
                  id="exampleInputPassword1"
                  className=" w-[95%] rounded-xl p-2"
                  autoComplete="off"
                  required
                  minLength={8}
                  onChange={(e) => setPassword(e.target.value)}
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
            <button
              type="submit"
              className={`text-center w-full text-white px-2 py-2 bg-blue-600 rounded-xl my-6 ${
                loading ? "opacity-50" : ""
              }`}
              disabled={loading}
            >
              {loading ? "logging in....." : "login"}
            </button>
          </motion.div>

          <div className="mt-3 mb-2 text-blue-500 font-normal">
            <Link to="/reset">Forgotten password?</Link>
          </div>

          <hr />
          <h4 className="my-1 text-center text-xl font-bold">or</h4>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
            <Link to="/sign-up">
              <div className="text-center text-blue-600 px-2 py-2 border border-blue-600 rounded-xl mt-3 hover:cursor-pointer">
                Signup
              </div>
            </Link>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default Login;
