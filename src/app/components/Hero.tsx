// import { motion } from 'motion/react';
// import { Search, MapPin, Home, DollarSign } from 'lucide-react';
// import { useState } from 'react';

// export function Hero() {
//   const [propertyType, setPropertyType] = useState('buy');

//   return (
//     <div className="relative min-h-150 flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 pt-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//             Find Your Dream
//             <span className="block text-blue-600 dark:text-blue-400 mt-2">Home Today</span>
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Discover the perfect property from our extensive collection of homes, apartments, and commercial spaces.
//           </p>
//         </motion.div>

//         {/* Search Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto"
//         >
//           {/* Property Type Toggle */}
//           <div className="flex gap-2 mb-6">
//             {['buy', 'rent', 'sell'].map((type) => (
//               <motion.button
//                 key={type}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => setPropertyType(type)}
//                 className={`flex-1 py-3 rounded-lg capitalize transition-colors ${
//                   propertyType === type
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
//                 }`}
//               >
//                 {type}
//               </motion.button>
//             ))}
//           </div>

//           {/* Search Form */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {/* Location */}
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Location
//               </label>
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
//                 <input
//                   type="text"
//                   placeholder="Enter city or neighborhood"
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             {/* Property Type */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Property Type
//               </label>
//               <div className="relative">
//                 <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
//                 <select className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
//                   <option>House</option>
//                   <option>Apartment</option>
//                   <option>Villa</option>
//                   <option>Condo</option>
//                 </select>
//               </div>
//             </div>

//             {/* Price Range */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Price Range
//               </label>
//               <div className="relative">
//                 <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
//                 <select className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
//                   <option>Any</option>
//                   <option>$0 - $500k</option>
//                   <option>$500k - $1M</option>
//                   <option>$1M+</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Search Button */}
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="w-full mt-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
//           >
//             <Search className="w-5 h-5" />
//             <span>Search Properties</span>
//           </motion.button>
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16"
//         >
//           {[
//             { label: 'Properties', value: '10k+' },
//             { label: 'Happy Customers', value: '8k+' },
//             { label: 'Years Experience', value: '15+' },
//           ].map((stat, index) => (
//             <div key={index} className="text-center">
//               <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
//                 {stat.value}
//               </div>
//               <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

import { AnimatePresence, motion } from 'motion/react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { useEffect, useState } from 'react';
import { type Variants } from 'motion/react';
import AnimatedBg from './AnimatedBg';
import FeaturedProperties from './FeaturedProperties';
import WhyChooseUs from './WhyChooseUs';
import AboutUsPage from './AboutUsPage';
import ContactPage from './ContactPage';
import Footer from './Footer';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 120,
      damping: 18,
    },
  },
};
export function Hero() {
  const [propertyType, setPropertyType] = useState<'buy' | 'rent' | 'sell'>('buy');
  return (
    <>
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      /> */}

      <AnimatedBg />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-linear-to-br from-white/90 via-white/80 to-blue-50/90 dark:from-gray-950/95 dark:via-gray-950/90 dark:to-gray-900/95" /> */}
      <div className="absolute inset-0 bg-linear-to-br from-white/15 via-white/30 to-blue-50/60 dark:from-gray-120/95 dark:via-gray-950/90 dark:to-gray-800/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
           <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 "
          >
            Find Your Dream
            <span className="block text-blue-600 dark:text-blue-400 mt-2">
              Home Today
            </span>
          </motion.h1> 


          <motion.p
            variants={item}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Discover the perfect property from our extensive collection of homes,
            apartments, and commercial spaces.
          </motion.p>
        </motion.div>

        {/* Search Card */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-black"
        >
          <div className="flex gap-2 mb-6">
            {(['buy', 'rent', 'sell'] as const).map((type) => (
              <motion.button
                key={type}
                layout
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setPropertyType(type)}
                className={`flex-1 py-3 rounded-lg capitalize font-medium transition-all ${propertyType === type
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
              >
                {type}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter city or neighborhood"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Property Type
              </label>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 rounded-lg border bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 appearance-none">
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Condo</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Price Range
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 rounded-lg border bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 appearance-none">
                  <option>Any</option>
                  <option>$0 – $500k</option>
                  <option>$500k – $1M</option>
                  <option>$1M+</option>
                </select>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="w-full mt-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <Search className="w-5 h-5" />
            Search Properties
          </motion.button>

        </motion.div>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16"
        >
          {[
            { label: 'Properties', value: '10k+' },
            { label: 'Happy Customers', value: '8k+' },
            { label: 'Years Experience', value: '15+' },
          ].map((stat) => (
            <motion.div key={stat.label} variants={item} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
     {/* Featured Properties Section */}
            <FeaturedProperties/>
            
    
            {/* Why Choose Us Section */}
            <WhyChooseUs />
    
            {/* CTA Section */}
            {/* <CTASection/>? */}
            <AboutUsPage />
            <ContactPage />
            <Footer/>
    
    </>
  );
}
