import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IoMdEyeOff, IoIosEye } from "react-icons/io";

interface NewPasswordProps {
  setNewPassword: Dispatch<SetStateAction<string>>;
  newPasswordFunc: any;
  loading: boolean;
  error: string;
}

const NewPassword = ({
  error,
  setNewPassword,
  newPasswordFunc,
  loading,
}: NewPasswordProps) => {
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
    <form onSubmit={newPasswordFunc}>
      {error && <div className="text-xl text-red-500 mb-3">{error}</div>}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
        <div className="my-2">
          <label htmlFor="exampleInputEmail1" className="font-bold">
            Create new password
          </label>
          <div className="flex space-x-2 items-center mt-2">
            <input
              type={type}
              id="exampleInputEmail1"
              autoComplete="off"
              aria-describedby="emailHelp"
              className="w-[95%] rounded-xl p-2"
              required
              minLength={8}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              className="text-xl text-white px-2 py-1 bg-blue-600 rounded-xl"
              onClick={handleToggle}
            >
              {icon}
            </button>
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
          {loading ? "Creating..." : "Create"}
        </button>
      </motion.div>
    </form>
  );
};

export default NewPassword;
