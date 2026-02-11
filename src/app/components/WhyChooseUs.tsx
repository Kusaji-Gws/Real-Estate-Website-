
// import { motion } from 'motion/react';
// import { HeadphonesIcon, Shield, TrendingUp } from "lucide-react";

// const WhyChooseUs = () => {
//   return (
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//                 Why Choose EstateHub
//               </h2>
//               <p className="text-xl text-gray-600 dark:text-gray-400">
//                 Your trusted partner in real estate
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//               {[
//                 {
//                   icon: TrendingUp,
//                   title: 'Best Market Prices',
//                   description: 'Get competitive pricing and exclusive deals on premium properties.',
//                 },
//                 {
//                   icon: Shield,
//                   title: 'Secure & Trusted',
//                   description: 'Your transactions are safe with our verified and secure platform.',
//                 },
//                 {
//                   icon: HeadphonesIcon,
//                   title: '24/7 Support',
//                   description: 'Our expert team is always ready to assist you at any time.',
//                 },
//               ].map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="text-center"
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6"
//                   >
//                     <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
//                   </motion.div>
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-400">
//                     {feature.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//   )
// }

// export default WhyChooseUs

// import { motion } from 'motion/react';
// import { HeadphonesIcon, Shield, TrendingUp, ArrowRight } from "lucide-react";

// const WhyChooseUs = () => {
//   const features = [
//     {
//       icon: TrendingUp,
//       title: 'Best Market Prices',
//       description: 'Access exclusive deals and real-time market valuations you won\'t find elsewhere.',
//       color: 'blue'
//     },
//     {
//       icon: Shield,
//       title: 'Secure & Trusted',
//       description: 'Your peace of mind is our priority with end-to-end encrypted transactions.',
//       color: 'indigo'
//     },
//     {
//       icon: HeadphonesIcon,
//       title: '24/7 Support',
//       description: 'Get round-the-clock assistance from seasoned real estate professionals.',
//       color: 'purple'
//     },
//   ];

//   return (
//     <section className="py-24 px-4 bg-slate-50 dark:bg-black overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="max-w-2xl"
//           >
//             <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">
//               Core Advantages
//             </h2>
//             <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
//               Redefining the way you <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">invest in property.</span>
//             </h3>
//           </motion.div>

//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-gray-600 dark:text-gray-400 lg:max-w-xs text-lg"
//           >
//             We combine local expertise with global technology to give you the ultimate edge.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               whileHover={{ y: -10 }}
//               className="group relative p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-2xl transition-all duration-300"
//             >
//               {/* Decorative Background Glow */}
//               <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

//               <div className="relative z-10">
//                 <div className="mb-6 inline-flex p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-300">
//                   <feature.icon className="w-8 h-8 text-blue-600" />
//                 </div>

//                 <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                   {feature.title}
//                 </h4>

//                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
//                   {feature.description}
//                 </p>

//                 <button className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 group/btn">
//                   Learn More 
//                   <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import { motion } from "motion/react";
import { HeadphonesIcon, Shield, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Best Market Prices",
      description:
        "Access exclusive listings and data-driven pricing for maximum value.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Shield,
      title: "Secure & Trusted",
      description:
        "Verified properties, encrypted transactions, and full transparency.",
      gradient: "from-emerald-500 to-green-400",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Expert Support",
      description:
        "Real humans, real help — anytime you need guidance or answers.",
      gradient: "from-purple-500 to-pink-400",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose EstateHub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We combine technology, trust, and expertise to deliver the best real estate experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative group rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden"
            >
              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br ${feature.gradient} blur-2xl`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
