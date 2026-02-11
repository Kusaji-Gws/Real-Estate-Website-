import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  image: string;
  text: string;
  bgColor: string;
  rotation: string;
}

const testimonials: Testimonial[] = [
  {
    name: "JOHN SMITH",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "bg-[#0b5c8a]",
    rotation: "rotate-[-3deg]"
  },
  {
    name: "MICHAEL SMITH",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "bg-[#222222]",
    rotation: "rotate-[3deg]"
  },
  {
    name: "ROBERT SMITH",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "bg-[#0b5c8a]",
    rotation: "rotate-[-3deg]"
  }
];

const TestimonialCard: React.FC<Testimonial> = ({ name, image, text, bgColor, rotation }) => (
  <div className={`flex items-center gap-6 p-6 rounded-3xl shadow-xl transition-transform hover:scale-105 ${bgColor} ${rotation} max-w-2xl w-full`}>
    {/* Profile Image */}
    <div className="shrink-0">
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden bg-white">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </div>

    {/* Content */}
    <div className="text-white text-left">
      <h3 className="text-xl md:text-2xl font-black tracking-wider mb-1 uppercase">
        {name}
      </h3>
      <div className="w-1/2 h-0.5 bg-white/30 mb-3" />
      <p className="text-xs md:text-sm leading-relaxed font-light opacity-90">
        {text}
      </p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#e2e2e2] py-16 px-6 min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h4 className="text-[#222222] text-3xl md:text-4xl font-black uppercase tracking-tighter">
          Our Clients
        </h4>
        <h2 className="text-[#0b8ad9] text-5xl md:text-7xl font-black uppercase tracking-tight -mt-2.5">
          Testimonial
        </h2>
      </div>

      {/* Cards Stack */}
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl py-8">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>

      {/* Rating Footer */}
      <div className="mt-12 bg-[#222222] px-8 py-3 flex gap-2 shadow-lg">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-8 h-8 fill-[#f6b01b] text-[#f6b01b]" />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;