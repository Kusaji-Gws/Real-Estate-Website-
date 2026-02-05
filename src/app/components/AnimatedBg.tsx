import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
//   "https://images.unsplash.com/photo-1572120360610-d971b9b78825",
  "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12",
];

export default function AnimatedBg() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[index]})`,
          }}
        />
      </AnimatePresence>

      {/* Always-mounted overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
