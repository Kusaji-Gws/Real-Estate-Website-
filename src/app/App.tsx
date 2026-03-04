import { ThemeProvider } from './context/ThemeContext';

import { PropertyDetail } from './components/PropertyDetail';

import { Navbar } from './components/Navbar';
import AboutUsPage from './components/AboutUsPage';

import { Routes, Route } from 'react-router-dom';
import Sell from './components/Sell';
import { Hero } from './components/Hero';
import Footer from './components/Footer';
import Contact2 from './components/Contact2';


export default function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/sell" element={<Sell />} /> */}
          <Route path="/about" element={<><AboutUsPage /><Footer/></>} />
          <Route path="/contact" element={<><Contact2 /><Footer/></>} />
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