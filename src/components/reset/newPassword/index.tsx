import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

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
  return (
    <div>
      {error && <div className="text-xl text-red-500 mb-3">{error}</div>}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
      <div className="my-2">
      <label htmlFor="exampleInputEmail1" className="font-bold">
        Create new password
      </label>
      <motion.input
        type="password"
        id="exampleInputEmail1"
        autoComplete="off"
        aria-describedby="emailHelp"
        className="block mt-2 w-full rounded-xl p-2"
        onChange={(e) => setNewPassword(e.target.value)}
        required
        minLength={8}
        whileFocus={{ scale: 1.1 }}
      ></motion.input>
       </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
        <button
          onClick={newPasswordFunc}
          type="submit"
          className={`text-center w-full text-white px-2 py-2 bg-blue-600 rounded-xl my-6 ${
            loading ? "opacity-50" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create"}
        </button>
      </motion.div>
    </div>
  );
};

export default NewPassword;
