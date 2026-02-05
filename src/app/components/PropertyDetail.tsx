// import { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import {
//   ArrowLeft,
//   Bed,
//   Bath,
//   Square,
//   MapPin,
//   Calendar,
//   Home,
//   Share2,
//   Heart,
//   Phone,
//   Mail,
//   ChevronLeft,
//   ChevronRight,
//   X,
// } from 'lucide-react';
// import { properties } from '../data/properties';
// import { ImageWithFallback } from './figma/ImageWithFallback';

// interface PropertyDetailProps {
//   propertyId: string;
//   onBack: () => void;
// }

// export function PropertyDetail({ propertyId, onBack }: PropertyDetailProps) {
//   const property = properties.find((p) => p.id === propertyId);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [showLightbox, setShowLightbox] = useState(false);
//   const [isFavorite, setIsFavorite] = useState(false);


//   if (!property) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-gray-600 dark:text-gray-400">Property not found</p>
//       </div>
//     );
//   }

//   const allImages = property.gallery.length > 0 ? property.gallery : [property.image];

//   const nextImage = () => {
//     setSelectedImage((prev) => (prev + 1) % allImages.length);
//   };

//   const prevImage = () => {
//     setSelectedImage((prev) => (prev - 1 + allImages.length) % allImages.length);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Back Button */}
//         <motion.button
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={onBack}
//           className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           Back to listings
//         </motion.button>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - Images and Details */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Image Gallery */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
//             >
//               {/* Main Image */}
//               <div className="relative h-96 md:h-125 overflow-hidden group">
//                 <ImageWithFallback
//                   src={allImages[selectedImage]}
//                   alt={property.title}
//                   className="w-full h-full object-cover cursor-pointer"
//                   onClick={() => setShowLightbox(true)}
//                 />

//                 {/* Navigation Arrows */}
//                 {allImages.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevImage}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-gray-800"
//                     >
//                       <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
//                     </button>
//                     <button
//                       onClick={nextImage}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-gray-800"
//                     >
//                       <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
//                     </button>
//                   </>
//                 )}

//                 {/* Type Badge */}
//                 <div className="absolute top-4 left-4">
//                   <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
//                     For {property.type === 'sale' ? 'Sale' : 'Rent'}
//                   </span>
//                 </div>

//                 {/* Image Counter */}
//                 {allImages.length > 1 && (
//                   <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-sm rounded-full">
//                     {selectedImage + 1} / {allImages.length}
//                   </div>
//                 )}
//               </div>

//               {/* Thumbnail Gallery */}
//               {allImages.length > 1 && (
//                 <div className="p-4 flex gap-3 overflow-x-auto">
//                   {allImages.map((image, index) => (
//                     <motion.button
//                       key={index}
//                       whileHover={{ scale: 1.05 }}
//                       onClick={() => setSelectedImage(index)}
//                       className={`relative shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
//                         selectedImage === index ? 'ring-2 ring-blue-600' : ''
//                       }`}
//                     >
//                       <ImageWithFallback
//                         src={image}
//                         alt={`${property.title} ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </motion.button>
//                   ))}
//                 </div>
//               )}
//             </motion.div>

//             {/* Property Info */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md"
//             >
//               <div className="flex items-start justify-between mb-6">
//                 <div>
//                   <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
//                     {property.title}
//                   </h1>
//                   <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
//                     <MapPin className="w-5 h-5" />
//                     <span className="text-lg">{property.location}</span>
//                   </div>
//                   <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
//                     ${property.price}
//                     {property.type === 'rent' && (
//                       <span className="text-lg text-gray-600 dark:text-gray-400">/month</span>
//                     )}
//                   </div>
//                 </div>

//                 <div className="flex gap-2">
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => setIsFavorite(!isFavorite)}
//                     className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//                   >
//                     <Heart
//                       className={`w-6 h-6 ${
//                         isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-300'
//                       }`}
//                     />
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//                   >
//                     <Share2 className="w-6 h-6 text-gray-600 dark:text-gray-300" />
//                   </motion.button>
//                 </div>
//               </div>

//               {/* Property Stats */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-gray-200 dark:border-gray-700">
//                 <div>
//                   <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
//                     <Bed className="w-5 h-5" />
//                     <span className="text-sm">Bedrooms</span>
//                   </div>
//                   <p className="text-2xl font-semibold text-gray-900 dark:text-white">{property.bedrooms}</p>
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
//                     <Bath className="w-5 h-5" />
//                     <span className="text-sm">Bathrooms</span>
//                   </div>
//                   <p className="text-2xl font-semibold text-gray-900 dark:text-white">{property.bathrooms}</p>
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
//                     <Square className="w-5 h-5" />
//                     <span className="text-sm">Area</span>
//                   </div>
//                   <p className="text-2xl font-semibold text-gray-900 dark:text-white">
//                     {property.area.toLocaleString()} sqft
//                   </p>
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
//                     <Calendar className="w-5 h-5" />
//                     <span className="text-sm">Year Built</span>
//                   </div>
//                   <p className="text-2xl font-semibold text-gray-900 dark:text-white">{property.yearBuilt}</p>
//                 </div>
//               </div>

//               {/* Description */}
//               <div className="mt-6">
//                 <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Description</h2>
//                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{property.description}</p>
//               </div>

//               {/* Features */}
//               <div className="mt-8">
//                 <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Features</h2>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                   {property.features.map((feature, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: index * 0.05 }}
//                       className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg"
//                     >
//                       <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
//                       <span className="text-gray-700 dark:text-gray-300">{feature}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Property Type */}
//               <div className="mt-6 flex items-center gap-2 text-gray-600 dark:text-gray-400">
//                 <Home className="w-5 h-5" />
//                 <span>Property Type: </span>
//                 <span className="font-semibold text-gray-900 dark:text-white">{property.propertyType}</span>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Column - Contact Card */}
//           <div className="lg:col-span-1">
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md sticky top-24"
//             >
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
//                 Interested in this property?
//               </h3>

//               <form className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="John Doe"
//                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="john@example.com"
//                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     placeholder="+1 (555) 000-0000"
//                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     rows={4}
//                     placeholder="I'm interested in this property..."
//                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                   />
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   Request Information
//                 </motion.button>
//               </form>

//               <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full flex items-center justify-center gap-2 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//                 >
//                   <Phone className="w-5 h-5" />
//                   Call Now
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full flex items-center justify-center gap-2 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
//                 >
//                   <Mail className="w-5 h-5" />
//                   Send Email
//                 </motion.button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {showLightbox && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowLightbox(false)}
//             className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
//           >
//             <button
//               onClick={() => setShowLightbox(false)}
//               className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//             >
//               <X className="w-6 h-6 text-white" />
//             </button>

//             <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
//               <ImageWithFallback
//                 src={allImages[selectedImage]}
//                 alt={property.title}
//                 className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
//               />

//               {allImages.length > 1 && (
//                 <>
//                   <button
//                     onClick={prevImage}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//                   >
//                     <ChevronLeft className="w-6 h-6 text-white" />
//                   </button>
//                   <button
//                     onClick={nextImage}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
//                   >
//                     <ChevronRight className="w-6 h-6 text-white" />
//                   </button>
//                 </>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "motion/react";
// import {
//   ArrowLeft,
//   Bed,
//   Bath,
//   Square,
//   MapPin,
//   Calendar,
//   Home,
//   Share2,
//   Heart,
//   Phone,
//   Mail,
//   ChevronLeft,
//   ChevronRight,
//   X,
// } from "lucide-react";

// import { properties } from "../data/properties";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

// export function PropertyDetail() {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   const property = properties.find((p) => p.id === id);

//   const [selectedImage, setSelectedImage] = useState(0);
//   const [showLightbox, setShowLightbox] = useState(false);
//   const [isFavorite, setIsFavorite] = useState(false);

//   if (!property) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-gray-600 dark:text-gray-400">Property not found</p>
//       </div>
//     );
//   }

//   const allImages =
//     property.gallery.length > 0 ? property.gallery : [property.image];

//   const nextImage = () =>
//     setSelectedImage((prev) => (prev + 1) % allImages.length);

//   const prevImage = () =>
//     setSelectedImage(
//       (prev) => (prev - 1 + allImages.length) % allImages.length
//     );

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Back Button */}
//         <motion.button
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate("/properties")}
//           className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           Back to listings
//         </motion.button>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//           {/* LEFT COLUMN */}
//           <div className="lg:col-span-2 space-y-8">

//             {/* Image Gallery */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
//             >
//               <div className="relative h-96 overflow-hidden group">
//                 <ImageWithFallback
//                   src={allImages[selectedImage]}
//                   alt={property.title}
//                   className="w-full h-full object-cover cursor-pointer"
//                   onClick={() => setShowLightbox(true)}
//                 />

//                 {allImages.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevImage}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
//                     >
//                       <ChevronLeft />
//                     </button>
//                     <button
//                       onClick={nextImage}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
//                     >
//                       <ChevronRight />
//                     </button>
//                   </>
//                 )}

//                 <div className="absolute top-4 left-4">
//                   <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
//                     For {property.type === "sale" ? "Sale" : "Rent"}
//                   </span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Property Info */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
//             >
//               <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
//                 {property.title}
//               </h1>

//               <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
//                 <MapPin className="w-5 h-5" />
//                 {property.location}
//               </div>

//               <div className="text-4xl font-bold text-blue-600 mb-6">
//                 ${property.price}
//                 {property.type === "rent" && (
//                   <span className="text-lg text-gray-500"> /month</span>
//                 )}
//               </div>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y py-6">
//                 <Stat icon={<Bed />} label="Bedrooms" value={property.bedrooms} />
//                 <Stat icon={<Bath />} label="Bathrooms" value={property.bathrooms} />
//                 <Stat
//                   icon={<Square />}
//                   label="Area"
//                   value={`${property.area} sqft`}
//                 />
//                 <Stat
//                   icon={<Calendar />}
//                   label="Year Built"
//                   value={property.yearBuilt}
//                 />
//               </div>

//               <div className="mt-6">
//                 <h2 className="text-xl font-semibold mb-2">Description</h2>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   {property.description}
//                 </p>
//               </div>

//               <div className="mt-6 flex items-center gap-2 text-gray-600 dark:text-gray-400">
//                 <Home className="w-5 h-5" />
//                 Property Type:
//                 <span className="font-semibold text-gray-900 dark:text-white">
//                   {property.propertyType}
//                 </span>
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="sticky top-24">
//             <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
//               <h3 className="text-xl font-semibold mb-4">
//                 Interested in this property?
//               </h3>

//               <button className="w-full flex items-center justify-center gap-2 py-3 bg-green-600 text-white rounded-lg mb-3">
//                 <Phone /> Call Now
//               </button>

//               <button className="w-full flex items-center justify-center gap-2 py-3 border rounded-lg">
//                 <Mail /> Send Email
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {showLightbox && (
//           <motion.div
//             className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
//             onClick={() => setShowLightbox(false)}
//           >
//             <button className="absolute top-4 right-4">
//               <X className="text-white w-8 h-8" />
//             </button>
//             <ImageWithFallback
//               src={allImages[selectedImage]}
//               alt={property.title}
//               className="max-h-[90vh]"
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// /* Small helper */
// function Stat({
//   icon,
//   label,
//   value,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   value: string | number;
// }) {
//   return (
//     <div>
//       <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
//         {icon} {label}
//       </div>
//       <p className="text-xl font-semibold">{value}</p>
//     </div>
//   );
// }







import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Changed
import { motion, AnimatePresence } from 'framer-motion'; // Note: check if you're using 'motion/react' or 'framer-motion'
import {
  ArrowLeft,
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  Share2,
  Heart,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { properties } from '../data/properties';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PropertyDetail() {
  // 1. Extract the ID from the URL (e.g., /property/123)
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // 2. State & Data fetching
  const property = properties.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-600 dark:text-gray-400">Property not found</p>
        <button 
          onClick={() => navigate('/properties')} 
          className="text-blue-600 hover:underline"
        >
          Return to listings
        </button>
      </div>
    );
  }

  const allImages = property.gallery.length > 0 ? property.gallery : [property.image];

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImage((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImage((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)} // 3. Uses router history to go back
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to listings
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
            >
              <div className="relative h-96 md:h-125 overflow-hidden group">
                <ImageWithFallback
                  src={allImages[selectedImage]}
                  alt={property.title}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setShowLightbox(true)}
                />

                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
                    </button>
                  </>
                )}
                
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    For {property.type === 'sale' ? 'Sale' : 'Rent'}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {allImages.length > 1 && (
                <div className="p-4 flex gap-3 overflow-x-auto scrollbar-hide">
                  {allImages.map((image, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedImage(index)}
                      className={`relative shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
                        selectedImage === index ? 'ring-4 ring-blue-600 shadow-lg' : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${property.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    ${property.price.toLocaleString()}
                    {property.type === 'rent' && (
                      <span className="text-lg text-gray-600 dark:text-gray-400">/mo</span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <FavoriteButton active={isFavorite} onClick={() => setIsFavorite(!isFavorite)} />
                  <ActionButton icon={<Share2 className="w-6 h-6" />} />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-gray-100 dark:border-gray-700">
                <StatItem icon={<Bed />} label="Bedrooms" value={property.bedrooms} />
                <StatItem icon={<Bath />} label="Bathrooms" value={property.bathrooms} />
                <StatItem icon={<Square />} label="Area" value={`${property.area.toLocaleString()} sqft`} />
                <StatItem icon={<Calendar />} label="Year Built" value={property.yearBuilt} />
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Description</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100/50 dark:border-blue-800/50">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <ContactCard />
          </div>
        </div>
      </div>

      <Lightbox 
        isOpen={showLightbox} 
        onClose={() => setShowLightbox(false)}
        image={allImages[selectedImage]}
        title={property.title}
        onNext={nextImage}
        onPrev={prevImage}
        showNav={allImages.length > 1}
      />
    </div>
  );
}

// --- Sub-components for cleaner structure ---

function StatItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | number }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
        {icon}
        <span className="text-xs uppercase tracking-wider font-semibold">{label}</span>
      </div>
      <p className="text-xl font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
  );
}

function FavoriteButton({ active, onClick }: { active: boolean, onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-sm border ${
        active 
          ? 'bg-red-50 border-red-100 text-red-500' 
          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400'
      }`}
    >
      <Heart className={`w-6 h-6 ${active ? 'fill-current' : ''}`} />
    </motion.button>
  );
}

function ActionButton({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl flex items-center justify-center text-gray-400 shadow-sm"
    >
      {icon}
    </motion.button>
  );
}

function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 sticky top-24"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Inquire About Property</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <FormInput label="Full Name" placeholder="Jane Doe" />
        <FormInput label="Email" type="email" placeholder="jane@example.com" />
        <FormTextArea label="Message" placeholder="I'm interested in viewing this property..." />
        
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-200 dark:shadow-none hover:bg-blue-700 transition-all"
        >
          Send Inquiry
        </motion.button>
      </form>
      
      <div className="mt-6 flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition-colors">
          <Phone className="w-4 h-4" /> Call
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors dark:text-white">
          <Mail className="w-4 h-4" /> Email
        </button>
      </div>
    </motion.div>
  );
}

function FormInput({ label, type = "text", placeholder }: any) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
      />
    </div>
  );
}

function FormTextArea({ label, placeholder }: any) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1">{label}</label>
      <textarea
        rows={3}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none dark:text-white"
      />
    </div>
  );
}

function Lightbox({ isOpen, onClose, image, title, onNext, onPrev, showNav }: any) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <button className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
            <X className="w-6 h-6" />
          </button>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-6xl w-full" 
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            {showNav && (
              <>
                <button onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-black/80 rounded-full text-white transition-all"><ChevronLeft /></button>
                <button onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-black/80 rounded-full text-white transition-all"><ChevronRight /></button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}