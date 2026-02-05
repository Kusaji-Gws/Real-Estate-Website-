
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PropertyCard } from "./PropertyCard";
import { properties } from "../data/properties";
import { useNavigate } from "react-router-dom";

const FeaturedProperties = () => {
  const navigate = useNavigate();

  const featuredProperties = properties.slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Handpicked properties just for you
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PropertyCard
                {...property}
                onClick={() => navigate(`/property/${property.id}`)}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/properties")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Properties
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProperties;
