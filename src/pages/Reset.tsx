import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api-url";
import VerifyEmail from "../components/reset/verifyEmail";
import InputOtp from "../components/reset/inputOtp";
import NewPassword from "../components/reset/newPassword";

const Reset = () => {
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Send OTP
  const verifyEmailFunc = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${api}/v1/auth/pw-reset-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
      const data = await response.json();

      if (response.status === 200) {
        setError("");
        setLoading(false);
        return setVerifyEmail(true);
      } else {
        setError(data.message);
        return setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setError("Check your internet connection and try again...");
      return setLoading(false);
    }
  };

  // Verify OTP
  const verifyOtpFunc = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${api}/v1/auth/pw-reset-code/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, code: code }),
      });
      const data = await response.json();

      if (response.status === 200) {
        setError("");
        setLoading(false);

        return setResetPassword(true);
      } else {
        setError(data.message);
        return setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setError("Check your internet connection and try again...");
      return setLoading(false);
    }
  };

  // Set new password
  const newPasswordFunc = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${api}/v1/auth/pw-reset`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: newPassword }),
      });
      const data = await response.json();

      if (response.status === 200) {
        setError("");
        setLoading(false);
        navigate("/sign-in");
      } else {
        setError(data.message);
        return setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setError("Check your internet connection and try again...");
      return setLoading(false);
    }
  };

  // Components to display
  const resetOtpDisplay = () => {
    if (verifyEmail && !resetPassword) {
      return (
        <InputOtp
          error={error}
          loading={loading}
          setCode={setCode}
          verifyOtpFunc={verifyOtpFunc}
        />
      );
    } else if (verifyEmail && resetPassword) {
      return (
        <NewPassword
          setNewPassword={setNewPassword}
          newPasswordFunc={newPasswordFunc}
          loading={loading}
          error={error}
        />
      );
    } else {
      return (
        <VerifyEmail
          setEmail={setEmail}
          verifyEmailFunc={verifyEmailFunc}
          loading={loading}
          error={error}
        />
      );
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
        <p className="md:text-2xl text-xl text-center font-bold ">
          Never miss the fun...
        </p>
        <form className="mt-6">{resetOtpDisplay()}</form>
      </div>
    </div>
  );
};

export default Reset;
