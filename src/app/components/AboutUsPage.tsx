import { motion } from 'framer-motion';

import type { Variants } from 'framer-motion';
const AboutUsPage = () => {

const containerVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

const imageVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

  return (
    <motion.div
      className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section: Engaging Introduction */}
      <section className="relative h-96 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="https://via.placeholder.com/1920x600/2563eb/ffffff?text=Modern+Cityscape+Real+Estate"
            alt="Modern Cityscape Background"
            className="w-full h-full object-cover brightness-75"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

        <motion.div
          className="relative z-20 p-8 max-w-4xl"
          variants={itemVariants}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            Your Vision, Our Expertise
          </h1>
          <p className="text-xl text-blue-100 drop-shadow-md">
            Connecting People with Their Perfect Spaces Since [Year Founded]
          </p>
        </motion.div>
      </section>

      {/* Our Story / Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div className="grid md:grid-cols-2 gap-12 items-center" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-400">Our Story & Mission</h2>
            <p className="text-lg leading-relaxed mb-4">
              Founded in [Year], [Your Company Name] began with a simple yet profound vision: to revolutionize the real estate experience. We saw a need for a partner who truly understood the aspirations of property owners and seekers, moving beyond mere transactions to build lasting relationships.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is to empower individuals and families to find not just a house, but a home, and to help investors build portfolios that thrive. We achieve this through unparalleled market insight, innovative technology, and a deep commitment to integrity and client success.
            </p>
          </motion.div>
          <motion.div className="relative" variants={imageVariants}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuH9ODn6KH7szQ0FFvQyd-VLw_xXgtQwz_Vw&s"
              alt="Our Team Collaborating"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-blue-300/30 dark:bg-blue-700/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          </motion.div>
        </motion.div>
      </section>

      {/* Our Values Section */}
      <section className="bg-blue-600 dark:bg-blue-900 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <motion.div className="max-w-7xl mx-auto text-center" variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
            Values That Drive Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: '🏠',
                title: 'Integrity',
                description: 'Upholding the highest standards of honesty and transparency in every interaction.'
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'Leveraging cutting-edge technology to provide superior service and insights.'
              },
              {
                icon: '🤝',
                title: 'Client-Centric',
                description: 'Prioritizing your needs and aspirations to deliver tailored, exceptional results.'
              }
            ].map((value, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-blue-400">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">Meet Our Exceptional Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our success is built on the expertise, dedication, and passion of our diverse team. Get to know the people behind your real estate journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: 'Jane Doe',
              title: 'CEO & Founder',
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM67HDsa7aB4x2B_XT8njIDlPd6AtmVO-AJQ&s',
              bio: 'Visionary leader with 20+ years in real estate development and management.'
            },
            {
              name: 'John Smith',
              title: 'Lead Broker',
              image: 'https://www.shutterstock.com/image-photo/confident-professional-businessman-dressed-formal-260nw-2589668235.jpg',
              bio: 'Award-winning broker known for his exceptional market knowledge and negotiation skills.'
            },
            {
              name: 'Emily White',
              title: 'Property Manager',
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj49Ck_UIXiZi3uxLk7mp4W3760yDH5hEPpQ&s',
              bio: 'Ensuring seamless property operations and tenant satisfaction.'
            },
            {
              name: 'David Lee',
              title: 'Marketing Director',
              image: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
              bio: 'Crafting compelling campaigns to showcase properties effectively.'
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300"
              variants={itemVariants}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500 dark:border-blue-400"
              />
              <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-300 font-medium mb-3">{member.title}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="bg-linear-to-r from-blue-700 to-indigo-800 dark:from-blue-900 dark:to-indigo-950 py-20 px-4 sm:px-6 lg:px-8 text-white text-center">
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you're looking to buy, sell, or manage property, our team is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-700 rounded-lg hover:bg-gray-100 transition-colors shadow-lg font-semibold"
            >
              Explore Our Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Contact Our Team
            </motion.button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default AboutUsPage;