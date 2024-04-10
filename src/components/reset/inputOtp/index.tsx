import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface InputOtpProps {
  setCode: Dispatch<SetStateAction<string>>;
  verifyOtpFunc: any;
  loading: boolean;
  error: string;
}

const InputOtp = ({
  error,
  setCode,
  verifyOtpFunc,
  loading,
}: InputOtpProps) => {
  return (
    <div>
      {error && <div className="text-xl text-red-500 mb-3">{error}</div>}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
        <div className="my-2">
          <label htmlFor="exampleOTP" className="font-bold">
            Input OTP
          </label>
          <motion.input
            type="text"
            id="exampleOTP"
            autoComplete="off"
            aria-describedby="otphelp"
            className="block mt-2 w-full rounded-xl p-2"
            onChange={(e) => setCode(e.target.value)}
            minLength={8}
            maxLength={8}
            required
            whileFocus={{ scale: 1.1 }}
          ></motion.input>
        </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
        <button
          onClick={verifyOtpFunc}
          type="submit"
          className={`text-center w-full text-white px-2 py-2 bg-blue-600 rounded-xl my-6 ${
            loading ? "opacity-50" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Verifying....." : "Verify OTP"}
        </button>
      </motion.div>
    </div>
  );
};

export default InputOtp;
