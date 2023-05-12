import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { Overview } from "./pages/Overview/Overview"
import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"
import EnqueteIndex from "./pages/Enquete/EnqueteIndex"
import MemberList from "./pages/Members/MemberList"
import TeamList from "./pages/Teams/TeamList"
import { Reports } from "./pages/Reports/Reports"
import { NotFound } from "./pages/NotFound/NotFound"
import { Header } from "./components/Partials/Header/Header.js"
import './App.css';

function App() {
  return (
    <>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
    <Header />
    <Routes>
      <Route path="/" index element={<Overview />} />
      <Route path="/inloggen" element={<Login />} />
      <Route path="/registreren" element={<Register />} />
      <Route path="/vragenlijsten" element={<EnqueteIndex />} />
      <Route path="/leden" element={<MemberList />} />
      <Route path="/teams" element={<TeamList />} />
      <Route path="/rapportages" element={<Reports />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
