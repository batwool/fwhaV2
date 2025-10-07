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
import FinalCTA from './components/FinalCTA';

// Service Pages
import ACRepair from './pages/ACRepair';
import ACReplacement from './pages/ACReplacement';
import ACInstallation from './pages/ACInstallation';
import ACMaintenance from './pages/ACMaintenance';

import HeaterRepair from './pages/HeaterRepair';
import HeaterReplacement from './pages/HeaterReplacement';

import IAQ from './pages/IndoorAirQuality.jsx';
import CommercialIAQ from './pages/CommercialIAQ.jsx';

import CommercialACServices from './pages/CommercialACServices.jsx';

// Resources
import PaymentPlans from './pages/PaymentPlans.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import AboutUs from './pages/AboutUs.jsx';

// City Pages
import Arlington from './pages/Arlington';
import BlueMound from './pages/BlueMound';
import Crowley from './pages/Crowley';
import Euless from './pages/Euless';
import ForestHill from './pages/ForestHill';
import HaltomCity from './pages/HaltomCity';
import Keller from './pages/Keller';
import Mansfield from './pages/Mansfield';
import RichlandHills from './pages/RichlandHills';
import SansomPark from './pages/SansomPark';
import Watauga from './pages/Watauga';
import WestworthVillage from './pages/WestworthVillage';
import Bedford from './pages/Bedford';
import Burleson from './pages/Burleson';
import DalworthingtonGardens from './pages/DalworthingtonGardens';
import Everman from './pages/Everman';
import FortWorth from './pages/FortWorth';
import Haslet from './pages/Haslet';
import Kennedale from './pages/Kennedale';
import NorthRichlandHills from './pages/NorthRichlandHills';
import RiverOaks from './pages/RiverOaks';
import Southlake from './pages/Southlake';
import Westlake from './pages/Westlake';

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
      <FinalCTA />
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
        <Route path="/ac-installation" element={<ACInstallation />} />
        <Route path="/ac-maintenance" element={<ACMaintenance />} />
        <Route path="/ac-replacement" element={<ACReplacement />} />

        {/* Heating Services */}
        <Route path="/heater-repair" element={<HeaterRepair />} />
        <Route path="/heater-replacement" element={<HeaterReplacement />} />

        {/* Indoor Air Quality */}
        <Route path="/iaq" element={<IAQ />} />
        <Route path="/commericial-iaq" element={<CommercialIAQ />} />

         {/* Commercial Services */}
          <Route path="/commercial-ac-services" element={<CommercialACServices />} />

        {/* Resources */}
        <Route path="/payment-plans" element={<PaymentPlans />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        
        {/* City Pages */}
        <Route path="/arlington" element={<Arlington />} />
        <Route path="/blue-mound" element={<BlueMound />} />
        <Route path="/crowley" element={<Crowley />} />
        <Route path="/euless" element={<Euless />} />
        <Route path="/forest-hill" element={<ForestHill />} />
        <Route path="/haltom-city" element={<HaltomCity />} />
        <Route path="/keller" element={<Keller />} />
        <Route path="/mansfield" element={<Mansfield />} />
        <Route path="/richland-hills" element={<RichlandHills />} />
        <Route path="/sansom-park" element={<SansomPark />} />
        <Route path="/watauga" element={<Watauga />} />
        <Route path="/westworth-village" element={<WestworthVillage />} />
        <Route path="/bedford" element={<Bedford />} />
        <Route path="/burleson" element={<Burleson />} />
        <Route path="/dalworthington-gardens" element={<DalworthingtonGardens />} />
        <Route path="/everman" element={<Everman />} />
        <Route path="/fort-worth" element={<FortWorth />} />
        <Route path="/haslet" element={<Haslet />} />
        <Route path="/kennedale" element={<Kennedale />} />
        <Route path="/north-richland-hills" element={<NorthRichlandHills />} />
        <Route path="/river-oaks" element={<RiverOaks />} />
        <Route path="/southlake" element={<Southlake />} />
        <Route path="/westlake" element={<Westlake />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;