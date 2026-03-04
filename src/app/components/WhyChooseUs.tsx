

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
