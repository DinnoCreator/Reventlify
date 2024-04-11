import Login from "../components/signInForm";
import { useEffect, useState } from "react";
import { authActions, login } from "../store/slices/auth-slice";
import { UserDetails } from "../store/slices/auth-slice/authSlice-types";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { isLoggedIn, loading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setDisplayErrorMessage(false);
    dispatch(authActions.deleteError());
    if (isLoggedIn && pathname === "/sign-in") {
      navigate("/admin");
    }
  }, [isLoggedIn]);

  const [values, setValues] = useState<UserDetails>({
    email: "",
    password: "",
  });

  // Handles submit
  const handleSubmit = async () => {
    dispatch(login(values));
    setDisplayErrorMessage(true);
  };

  return (
    <Login
      error={displayErrorMessage}
      loading={loading}
      values={values}
      setValues={setValues}
      loginFunc={handleSubmit}
    />
  );
};

export default SignIn;
