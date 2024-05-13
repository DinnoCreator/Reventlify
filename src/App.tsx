import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BuyTicket from "./pages/BuyTicket";
import Ticket from "./pages/Ticket";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Reset from "./pages/Reset";
import TicketBody from "./components/ticket/ticketBody";
import { useSelector } from "react-redux";
import { Suspense, lazy } from "react";
import FullLoader from "./components/FullLoader";
const AdminDashboard = lazy(
  () => import("./pages/Authenticated-routes/AdminDashboard")
);

function App() {
  const { isLoggedIn, expiresAt } = useSelector((state: any) => state.auth);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-ticket" element={<BuyTicket />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/ticket/:id" element={<TicketBody/>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset" element={<Reset />} />

        {/* lazy loaded routes */}
        <Route
          path="/admin"
          element={
            isLoggedIn ? (
              <Suspense fallback={<FullLoader />}>
                <AdminDashboard />
              </Suspense>
            ) : (
              <SignIn />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
