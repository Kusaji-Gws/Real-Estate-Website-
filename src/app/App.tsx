import { ThemeProvider } from './context/ThemeContext';

import { PropertyDetail } from './components/PropertyDetail';

import { Navbar } from './components/Navbar';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';

import { Routes, Route } from 'react-router-dom';
import Sell from './components/Sell';
import { Hero } from './components/Hero';


export default function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/sell" element={<Sell />} /> */}
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/properties" element={<Sell />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>

        {/* Hero Section */}
        {/* <section id="home">
          <Hero />
        </section> */}


      </div>
    </ThemeProvider>
  );
}