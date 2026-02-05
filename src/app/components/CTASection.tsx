import { motion } from 'motion/react';


const CTASection = () => {
  return (
   <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-slate-900 dark:to-blue-950">
  {/* Decorative Background Elements */}
  <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative z-10 max-w-3xl mx-auto text-center text-white"
  >
    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
      Ready to Find Your <span className="text-blue-200">Dream Home?</span>
    </h2>
    
    <p className="text-lg md:text-xl mb-10 text-blue-100/90 leading-relaxed">
      Join over <span className="font-semibold text-white">10,000+</span> happy homeowners who discovered their perfect sanctuary through our curated listings.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <motion.button
        whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.98 }}
        className="w-full sm:w-auto px-10 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-all"
      >
        Get Started Now
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
      >
        Speak with an Agent
      </motion.button>
    </div>
    
    {/* Micro-copy for Trust */}
    <p className="mt-8 text-sm text-blue-200/70 italic">
      No credit card required • Free consultation
    </p>
  </motion.div>
</section>
  )
}

export default CTASection