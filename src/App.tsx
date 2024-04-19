import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BuyTicket from "./pages/BuyTicket"
import Ticket from "./pages/Ticket";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Reset from "./pages/Reset";
import AdminDashboard from "./pages/AdminDashboard";
import TicketBody from "./components/ticket/ticketBody";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-ticket" element={<BuyTicket />} />
        <Route path="/ticket" element={<Ticket/>} />
        <Route path="/ticket/:id" element={<TicketBody/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/reset" element={<Reset/>} />
        <Route path="/admin" element={<AdminDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
