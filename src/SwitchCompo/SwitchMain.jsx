import React from "react";
import {  HashRouter as Router, Routes, Route } from "react-router-dom";
import SwitchList from "./SwitchList"; // Home page with product cards
import SwitchDetailList from "./SwitchDetailList"; // Product details page
import TryProductDetails from "./TryProductDetails";

function SwitchMain() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SwitchList />} />
                {/* <Route path="/product/:id" element={<SwitchDetailList />} /> */}
                <Route path="/product/:id" element={<TryProductDetails />} />
            </Routes>
        </Router>
    );
}

export default SwitchMain;