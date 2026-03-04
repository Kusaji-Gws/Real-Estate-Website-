// import React from 'react';
// import { Star } from 'lucide-react';

// interface Testimonial {
//   name: string;
//   image: string;
//   text: string;
//   bgColor: string;
//   rotation: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     name: "JOHN SMITH",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     bgColor: "bg-[#0b5c8a]",
//     rotation: "rotate-[-3deg]"
//   },
//   {
//     name: "MICHAEL SMITH",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     bgColor: "bg-[#222222]",
//     rotation: "rotate-[3deg]"
//   },
//   {
//     name: "ROBERT SMITH",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     bgColor: "bg-[#0b5c8a]",
//     rotation: "rotate-[-3deg]"
//   }
// ];

// const TestimonialCard: React.FC<Testimonial> = ({ name, image, text, bgColor, rotation }) => (
//   <div className={`flex items-center gap-6 p-6 rounded-3xl shadow-xl transition-transform hover:scale-105 ${bgColor} ${rotation} max-w-2xl w-full`}>
//     {/* Profile Image */}
//     <div className="shrink-0">
//       <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden bg-white">
//         <img src={image} alt={name} className="w-full h-full object-cover" />
//       </div>
//     </div>

//     {/* Content */}
//     <div className="text-white text-left">
//       <h3 className="text-xl md:text-2xl font-black tracking-wider mb-1 uppercase">
//         {name}
//       </h3>
//       <div className="w-1/2 h-0.5 bg-white/30 mb-3" />
//       <p className="text-xs md:text-sm leading-relaxed font-light opacity-90">
//         {text}
//       </p>
//     </div>
//   </div>
// );

// const Testimonials: React.FC = () => {
//   return (
//     <section className="bg-[#e2e2e2] py-16 px-6 min-h-screen flex flex-col items-center justify-center">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h4 className="text-[#222222] text-3xl md:text-4xl font-black uppercase tracking-tighter">
//           Our Clients
//         </h4>
//         <h2 className="text-[#0b8ad9] text-5xl md:text-7xl font-black uppercase tracking-tight -mt-2.5">
//           Testimonial
//         </h2>
//       </div>

//       {/* Cards Stack */}
//       <div className="flex flex-col items-center gap-8 w-full max-w-4xl py-8">
//         {testimonials.map((t, index) => (
//           <TestimonialCard key={index} {...t} />
//         ))}
//       </div>

//       {/* Rating Footer */}
//       <div className="mt-12 bg-[#222222] px-8 py-3 flex gap-2 shadow-lg">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} className="w-8 h-8 fill-[#f6b01b] text-[#f6b01b]" />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Home Buyer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    review:
      "EstateHub helped me find my dream home quickly. The process was smooth and professional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    review:
      "Excellent service and great property options. Highly recommended for investors.",
    rating: 4,
  },
  {
    id: 3,
    name: "Amit Patil",
    role: "Apartment Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    review:
      "They helped me sell my apartment at the best price. Very satisfied with their service.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6"
    >
      <div className="flex items-center gap-4">

        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
            {testimonial.name}
          </h3>

          <p className="text-sm text-gray-500">
            {testimonial.role}
          </p>

          <div className="flex">

            {[...Array(testimonial.rating)].map((_, index) => (
              <span key={index} className="text-yellow-400">
                ★
              </span>
            ))}

          </div>

        </div>
      </div>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        "{testimonial.review}"
      </p>

    </motion.div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default TestimonialSection;