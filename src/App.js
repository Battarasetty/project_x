// App.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Topbar from "./scenes/global/Topbar";
import Home from "./scenes/home";
import { EmailComponent, PoolCreatorDetailComponent } from "./components";
import FooterComponent from "./components/FooterComponent";
import PoolCreatorPage from "./scenes/PoolCreatorPage";
import PoolParticipantPage from "./scenes/PoolParticipantPage";
import InvestedPoolsPage from "./components/PoolParticipantsComponents/InvestedPoolsPage";
import InvestedPoolParticipantDetailPage from "./components/PoolParticipantsComponents/InvestedPoolParticipantDetailPage";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Topbar className="py-4" />
      <div className="flex-1 mb-1 md:mb-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pool-creator" element={<PoolCreatorPage />} />
          <Route path="/pool-participant" element={<PoolParticipantPage />} />
          {/* Add a new route for PoolParticipantDetailsComponent */}
          <Route
            path="/pool-creator/:id"
            element={<PoolCreatorDetailComponent />}
          />
          <Route path="/participant-investedPool" element={<InvestedPoolsPage />} />
          <Route path="/participant/:id" element={<InvestedPoolParticipantDetailPage />} />
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
