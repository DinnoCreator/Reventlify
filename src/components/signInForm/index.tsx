import { IoIosArrowBack, IoMdEyeOff, IoIosEye } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, Dispatch, SetStateAction } from "react";
import { UserDetails } from "../../store/slices/auth-slice/authSlice-types";
import { useAppSelector } from "../../hooks";
import { voidFunc } from "../../interfaces/general";

interface LoginProps {
  setValues: Dispatch<SetStateAction<UserDetails>>;
  values: UserDetails;
  loading: boolean;
  error: boolean;
  loginFunc: voidFunc;
}

const Login = ({
  error,
  setValues,
  values,
  loading,
  loginFunc,
}: LoginProps) => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<IoIosEye />);

  const { errorMessage } = useAppSelector((state) => state.auth);

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(<IoMdEyeOff />);
    } else {
      setType("password");
      setIcon(<IoIosEye />);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value.trim(),
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    loginFunc();
  };

  return (
    <div className="eddyContainer h-[110vh] overflow-y-scroll scrollbar-hide">
      <Link to="/">
        <div className="flex space-x-1 items-center mt-5 text-xl font-bold">
          <h4>
            <IoIosArrowBack />
          </h4>
          <h4>Home</h4>
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
          {error ? (
            <div className="text-xl text-red-500 mb-3">{errorMessage}</div>
          ) : (
            ""
          )}
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
                name="email"
                onChange={handleChange}
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
                  name="password"
                  onChange={handleChange}
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
              {loading ? "..." : "Login"}
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
