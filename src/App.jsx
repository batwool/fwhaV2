import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ACInstallSection from './components/ACInstallSection';
import Reviews from './components/Reviews';
import Areas from './components/Areas';
import Specials from './components/Specials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Service Pages
import ACRepair from './pages/ACRepair';
import ACReplacement from './pages/ACReplacement';
import ACMaintenance from './pages/ACMaintenance';

import HeaterRepair from './pages/HeaterRepair';
import HeaterReplacement from './pages/HeaterReplacement';

// Cities Served
import Arlington from './pages/Arlington';

import './index.css';

// Home page layout
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ACInstallSection />
      <Reviews />
      <Areas />
      <Specials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* AC Services */}
        <Route path="/ac-repair" element={<ACRepair />} />
        <Route path="/ac-replacement" element={<ACReplacement />} />
        <Route path="/ac-maintenance" element={<ACMaintenance />} />

        {/* Heating Services */}
        <Route path="/heater-repair" element={<HeaterRepair />} />
        <Route path="/heater-replacement" element={<HeaterReplacement />} />
        <Route path="/arlington" element={<Arlington />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
