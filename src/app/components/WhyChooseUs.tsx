
import { motion } from 'motion/react';
import { HeadphonesIcon, Shield, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose EstateHub
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Your trusted partner in real estate
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: TrendingUp,
                  title: 'Best Market Prices',
                  description: 'Get competitive pricing and exclusive deals on premium properties.',
                },
                {
                  icon: Shield,
                  title: 'Secure & Trusted',
                  description: 'Your transactions are safe with our verified and secure platform.',
                },
                {
                  icon: HeadphonesIcon,
                  title: '24/7 Support',
                  description: 'Our expert team is always ready to assist you at any time.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  >
                    <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default WhyChooseUs