import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface VerifyEmailProps {
  setEmail: Dispatch<SetStateAction<string>>;
  verifyEmailFunc: any;
  loading: boolean;
  error: string;
}
const VerifyEmail = ({
  setEmail,
  verifyEmailFunc,
  loading,
  error,
}: VerifyEmailProps) => {
  return (
    <div>
      {error && <div className="text-xl text-red-500 mb-3">{error}</div>}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
        <div className="my-2">
          <label htmlFor="exampleInputEmail1" className="font-bold">
            Email address
          </label>
          <motion.input
            type="email"
            id="exampleInputEmail1"
            autoComplete="off"
            aria-describedby="emailHelp"
            className="block mt-2 w-full rounded-xl p-2"
            required
            onChange={(e) => setEmail(e.target.value)}
            whileFocus={{ scale: 1.1 }}
          ></motion.input>
        </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
        <button
          onClick={verifyEmailFunc}
          type="submit"
          className={`text-center w-full text-white px-2 py-2 bg-blue-600 rounded-xl my-6 ${
            loading ? "opacity-50" : ""
          }`}
          disabled={loading}
        >
          {loading ? "sending OTP....." : "send OTP"}
        </button>
      </motion.div>
    </div>
  );
};

export default VerifyEmail;
