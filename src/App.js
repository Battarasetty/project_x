// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Topbar from './scenes/global/Topbar';
import Home from './scenes/home';
import { EmailComponent } from './components';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Topbar className="py-4" />
      <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div className=''>
        <EmailComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
