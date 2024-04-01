import { IoIosArrowBack } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api-url";

const SignUp = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<IoIosEye />);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(<IoMdEyeOff />);
    } else {
      setType("password");
      setIcon(<IoIosEye />);
    }
  };

  const sendcode = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${api}/v1/auth/send-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
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
        <form className="mt-6" onSubmit={sendcode}>
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
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value.trim() })
                }
                whileFocus={{ scale: 1.1 }}
              ></motion.input>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
            <div className="my-3">
              <label htmlFor="exampleInputEmail1" className="font-normal">
                Username
              </label>
              <motion.input
                type="text"
                id="exampleInputEmail1"
                autoComplete="off"
                aria-describedby="emailHelp"
                className="block mt-2 w-full rounded-xl p-2"
                required
                onChange={(e) =>
                  setUserData({ ...userData, userName: e.target.value.trim() })
                }
                whileFocus={{ scale: 1.1 }}
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
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      password: e.target.value.trim(),
                    })
                  }
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
            <div
              className={`text-center text-white px-2 py-2 bg-blue-600 rounded-xl my-6 ${
                loading ? "opacity-50" : ""
              }`}
            >
              <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "Sign up"}
              </button>
            </div>
          </motion.div>

          <hr />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
