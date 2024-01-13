// App.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Topbar from "./scenes/global/Topbar";
import Home from "./scenes/home";
import { EmailComponent } from "./components";
import FooterComponent from "./components/FooterComponent";
import PoolCreatorPage from "./scenes/PoolCreatorPage";
import PoolParticipantPage from "./scenes/PoolParticipantPage";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Topbar className="py-4" />
      <div className="flex-1 mb-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pool-creator" element={<PoolCreatorPage  />} />
          <Route path="/pool-participant" element={<PoolParticipantPage />} />
        </Routes>
      </div>
      <div className="">
        <EmailComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
