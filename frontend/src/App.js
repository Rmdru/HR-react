import React, {useState, useEffect} from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import EnqueteDetails from "./pages/Enquete/EnqueteDetails";
import EnqueteIndex from "./pages/Enquete/EnqueteIndex";
import NotFound from "./pages/NotFound/NotFound";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vragenlijst" element={<EnqueteIndex />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
