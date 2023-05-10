import {React} from "react";
import {Route, Routes} from "react-router-dom";
import {Overview} from "./pages/Overview/Overview"
import Login from "./pages/Login/Login"
import SignUp from "./pages/Register/Register"
import EnqueteIndex from "./pages/Enquete/EnqueteIndex"
import {Members} from "./pages/Members/Members"
import {Teams} from "./pages/Teams/Teams"
import {Reports} from "./pages/Reports/Reports"
import {NotFound} from "./pages/NotFound/NotFound"
import {Header} from "./components/Partials/Header/Header.js"
import Logout from "./pages/Logout/Logout";
import './App.css';

function App() {
    return (
        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                  crossOrigin="anonymous"/>
            <Header/>
            <Routes>
                <Route path="/" index element={<Overview/>}/>
                <Route path="/inloggen" element={<Login/>}/>
                <Route path="/registreren" element={<SignUp/>}/>
                <Route path="/vragenlijsten" element={<EnqueteIndex/>}/>
                <Route path="/leden" element={<Members/>}/>
                <Route path="/teams" element={<Teams/>}/>
                <Route path="/rapportages" element={<Reports/>}/>
                <Route path="/*" element={<NotFound/>}/>
                <Route path="/uitloggen" element={<Logout/>}/>

            </Routes>
        </>
    );
}

export default App;
