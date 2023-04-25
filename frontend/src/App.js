import { React } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Overview } from "./pages/Overview"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { EnqueteOverview } from "./pages/EnqueteOverview"
import { Members } from "./pages/Members"
import { Teams } from "./pages/Teams"
import { Reports } from "./pages/Reports"
import { NotFound } from "./pages/NotFound"
import './App.css';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vragenlijsten">Vragenlijsten</Link></li>
        <li><Link to="/leden">Leden</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/rapportages">Rapportages</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" index element={<Overview />} />
      <Route path="/inloggen" element={<Login />} />
      <Route path="/registreren" element={<Register />} />
      <Route path="/vragenlijsten" element={<EnqueteOverview />} />
      <Route path="/leden" element={<Members />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/rapportages" element={<Reports />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;