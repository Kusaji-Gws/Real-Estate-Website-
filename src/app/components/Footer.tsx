
// const Footer = () => {
//   return (
//     <div>
//           {/* Footer */}
//         <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//               <div>
//                 <h3 className="font-semibold text-lg mb-4">EstateHub</h3>
//                 <p className="text-gray-400 dark:text-gray-500 text-sm">
//                   Your trusted partner in finding the perfect property.
//                 </p>
//               </div>
//               <div>
//                 <h4 className="font-semibold mb-4">Quick Links</h4>
//                 <ul className="space-y-2 text-gray-400 dark:text-gray-500 text-sm">
//                   <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors">Properties</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors">Agents</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold mb-4">Support</h4>
//                 <ul className="space-y-2 text-gray-400 dark:text-gray-500 text-sm">
//                   <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold mb-4">Newsletter</h4>
//                 <p className="text-gray-400 dark:text-gray-500 text-sm mb-3">
//                   Subscribe to get the latest property listings.
//                 </p>
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="w-full px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-800 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>
//             <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center text-gray-400 dark:text-gray-500 text-sm">
//               © 2026 EstateHub. All rights reserved.
//             </div>
//           </div>
//         </footer>
//     </div>
//   )
// }

// export default Footer

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>

            <h2 className="text-2xl font-bold text-white mb-4">
              EstateHub
            </h2>

            <p className="text-sm leading-relaxed mb-6">
              EstateHub helps you find your dream home with trusted agents,
              verified listings, and seamless buying experience.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">

              <a className="hover:text-white transition">
                <Facebook size={20} />
              </a>

              <a className="hover:text-white transition">
                <Twitter size={20} />
              </a>

              <a className="hover:text-white transition">
                <Instagram size={20} />
              </a>

              <a className="hover:text-white transition">
                <Linkedin size={20} />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Properties
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Agents
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact Info */}
          <div>

            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <ul className="space-y-4 text-sm">

              <li className="flex gap-3">
                <MapPin size={18} />
                Goa, India
              </li>

              <li className="flex gap-3">
                <Phone size={18} />
                +91 98765 43210
              </li>

              <li className="flex gap-3">
                <Mail size={18} />
                info@estatehub.com
              </li>

            </ul>

          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-white font-semibold mb-4">
              Newsletter
            </h3>

            <p className="text-sm mb-4">
              Get latest property updates.
            </p>

            <div className="flex">

              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none"
              />

              <button className="bg-blue-600 px-4 rounded-r-lg hover:bg-blue-700 transition">

                <Send size={18} />

              </button>

            </div>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">

          <p>
            © 2026 EstateHub. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms
            </a>

            <a href="#" className="hover:text-white transition">
              Sitemap
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;