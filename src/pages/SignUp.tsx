import SendCodeDisplay from "../components/form/sendCode";
import { useState } from "react";
import api from "../api-url";
import VerifyEmailDisplay from "../components/form/verifyEmail";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    userName: "",
    password: "",
  });
  const sendCodeDis = true;
  const [verifyEmailDis, setVerifyEmailDis] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const { email } = userData;

  const sendCode = async (e: any) => {
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

      if (response.status === 200) {
        setError("");
        setLoading(false);
        return setVerifyEmailDis(true);
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

  const verifyEmail = async (e: any) => {
    setLoading(true);
    try {
      const response = await fetch(`${api}/v1/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, code: otp }),
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

  return (
    <div>
      {sendCodeDis && !verifyEmailDis ? (
        <SendCodeDisplay
          userData={userData}
          setUserData={setUserData}
          sendCode={sendCode}
          loading={loading}
          error={error}
        />
      ) : (
        <VerifyEmailDisplay
          setOtp={setOtp}
          verifyEmail={verifyEmail}
          error={error}
          loading={loading}
        />
      )}
    </div>
  );
};

export default SignUp;
