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
      {/* Background Image with Overlay */}

      {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10" /> */}
      <section className='mt-20'>
        <AboutUs />
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

      <WhyBrikly />


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
          <Testimonials/>

    </motion.div>

  );
};

export default AboutUsPage;



import React from 'react';
import { MapPin, HardHat, Home, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureCardProps extends Feature {
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title, description, className = "" }) => (
  <div className={`bg-white p-8 rounded-4xl shadow-sm flex flex-col gap-5 border border-gray-50 ${className}`}>
    {/* Icon Container */}
    <div className="bg-[#052c24] w-14 h-14 rounded-full flex items-center justify-center">
      <Icon className="text-[#d4f444] w-7 h-7" strokeWidth={2.5} />
    </div>

    <div className="space-y-3">
      <h3 className="text-[#052c24] text-2xl font-bold tracking-tight">
        {title}
      </h3>
      <p className="text-gray-500 leading-relaxed text-[1.05rem]">
        {description}
      </p>
    </div>
  </div>
);

const WhyBrikly: React.FC = () => {
  const features: Feature[] = [
    {
      Icon: MapPin,
      title: "Local Knowledge",
      description: "Deep understanding of Austin's codes, climate, and construction standards."
    },
    {
      Icon: HardHat,
      title: "Pro Team",
      description: "Skilled, certified builders and project managers committed to quality."
    },
    {
      Icon: Home,
      title: "Smart Designs",
      description: "Modern layouts and features built for comfort, function, and flow."
    },
    {
      Icon: Users,
      title: "Client Focus",
      description: "Responsive service and communication — your satisfaction is our priority."
    }
  ];

  return (
    <section className="bg-[#fafafa] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left Column: Heading Content */}
        <div className="lg:sticky lg:top-24 space-y-8">
          <div className="space-y-4">
            <span className="text-[#052c24] font-bold uppercase tracking-[0.2em] text-xs">
              WHY BRIKLY
            </span>
            <h2 className="text-[#052c24] text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              What Sets Us <br /> Apart
            </h2>
          </div>

          <p className="text-gray-600 text-xl leading-relaxed max-w-md font-medium opacity-90">
            We're more than just builders — we're your trusted local partner.
            From smart design to solid delivery, every detail is handled with
            care, precision, and pride.
          </p>
        </div>

        {/* Right Column: Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={index % 2 !== 0 ? "md:translate-y-12" : ""}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};



import { CheckCircle2 } from 'lucide-react';
import Testimonials from './Testimonials';

const AboutUs: React.FC = () => {
  const stats: string[] = [
    "150+ Projects",
    "Licensed & ISO Certified",
    "Experienced Team"
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">

        {/* Left Side: Overlapping Images */}
        <div className="relative w-full lg:w-1/2">
          {/* Main Large Image */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl">
            <img
              src="https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg"
              alt="Modern apartment building"
              className="w-full h-125 object-cover"
            />
          </div>

          {/* Overlapping Smaller Image */}
          <div className="absolute -bottom-10 -right-4 md:right-0 w-1/2 rounded-4xl overflow-hidden border-8 border-white shadow-2xl">
            <img
              src="https://thumbs.dreamstime.com/z/modern-building-design-27794985.jpg"
              alt="Orange architectural building"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
           
            <h2 className="text-[#052c24] text-5xl md:text-6xl font-bold leading-tight">
              Trusted Local Construction Partner in Austin.
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            At Brikly, we're proud to serve Austin with reliable, high-quality construction
            services. From custom homes to commercial builds, our local expertise ensures
            every project is done right. We build with integrity, craftsmanship, and a
            commitment to your vision.
          </p>

          <ul className="space-y-4">
            {stats.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-[#052c24] font-semibold text-lg">
                <CheckCircle2 className="w-6 h-6 fill-[#052c24] text-white" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};


