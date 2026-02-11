import { ThemeProvider } from './context/ThemeContext';

import { PropertyDetail } from './components/PropertyDetail';

import { Navbar } from './components/Navbar';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';

import { Routes, Route } from 'react-router-dom';
import Sell from './components/Sell';
import { Hero } from './components/Hero';
import Footer from './components/Footer';


export default function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/sell" element={<Sell />} /> */}
          <Route path="/about" element={<><AboutUsPage /><Footer/></>} />
          <Route path="/contact" element={<><ContactPage /><Footer/></>} />
          <Route path="/properties" element={<><Sell /><Footer/></>} />
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