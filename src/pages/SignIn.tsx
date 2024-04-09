import Login from "../components/signInForm";
import { useState } from "react";
import api from "../api-url";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginFunc = async (e: any) => {
    setLoading(true);
    try {
      const response = await fetch(`${api}/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      const data = await response.json();

      if (response.status === 200) {
        setError("");
        setLoading(false);
        navigate("/");
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
    <Login
      error={error}
      loading={loading}
      setPassword={setPassword}
      setEmail={setEmail}
      loginFunc={loginFunc}
    />
  );
};

export default SignIn;
