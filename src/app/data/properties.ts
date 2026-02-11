export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: 'sale' | 'rent';
  description: string;
  features: string[];
  yearBuilt: number;
  propertyType: 'House' | 'Apartment' | 'Villa' | 'Condo' | 'Townhouse';
  gallery: string[];
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    location: 'Beverly Hills, Los Angeles',
    price: '28,50,000',
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    image: 'https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MDEwOTU0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'sale',
    description: 'Stunning modern villa with panoramic views, featuring high-end finishes, smart home technology, and a resort-style backyard with pool.',
    features: ['Pool', 'Garden', 'Garage', 'Smart Home', 'Security System', 'Home Theater'],
    yearBuilt: 2022,
    propertyType: 'Villa',
    gallery: [
      'https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MDEwOTU0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1613545325268-9265e1609167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3IlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3MDAxODU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: '2',
    title: 'Contemporary Apartment',
    location: 'Manhattan, New York',
    price: '4,500',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: 'https://images.unsplash.com/photo-1537695544118-fda4b1118f62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzAwOTUxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'rent',
    description: 'Modern apartment in prime Manhattan location with stunning city views, high ceilings, and luxury amenities.',
    features: ['Gym', 'Concierge', 'Rooftop', 'Pet Friendly', 'Parking'],
    yearBuilt: 2020,
    propertyType: 'Apartment',
    gallery: [
      'https://images.unsplash.com/photo-1537695544118-fda4b1118f62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzAwOTUxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: '3',
    title: 'Elegant Mediterranean Villa',
    location: 'Miami Beach, Florida',
    price: '32,00,000',
    bedrooms: 6,
    bathrooms: 5,
    area: 5200,
    image: 'https://images.unsplash.com/photo-1757264119066-2f627c6a6f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdmlsbGElMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcwMDMxNjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'sale',
    description: 'Breathtaking waterfront villa with private dock, infinity pool, and luxurious Mediterranean architecture.',
    features: ['Waterfront', 'Pool', 'Private Dock', 'Wine Cellar', 'Guest House'],
    yearBuilt: 2021,
    propertyType: 'Villa',
    gallery: [
      'https://images.unsplash.com/photo-1757264119066-2f627c6a6f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdmlsbGElMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcwMDMxNjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: '4',
    title: 'Charming Townhouse',
    location: 'San Francisco, California',
    price: '18,50,000',
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    image: 'https://images.unsplash.com/photo-1723726594846-60f5fbe35cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB0b3duaG91c2UlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzAxMjgxODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'sale',
    description: 'Beautiful townhouse in a sought-after neighborhood with modern updates and a private patio.',
    features: ['Patio', 'Updated Kitchen', 'Hardwood Floors', 'Storage'],
    yearBuilt: 2018,
    propertyType: 'Townhouse',
    gallery: [
      'https://images.unsplash.com/photo-1723726594846-60f5fbe35cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB0b3duaG91c2UlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzAxMjgxODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: '5',
    title: 'Luxury Penthouse',
    location: 'Downtown Seattle',
    price: '6,800',
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    image: 'https://images.unsplash.com/photo-1760611656071-a8bef0578874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwZW50aG91c2UlMjB2aWV3fGVufDF8fHx8MTc3MDA0MDA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'rent',
    description: 'Spectacular penthouse with 360-degree views, floor-to-ceiling windows, and top-of-the-line amenities.',
    features: ['City Views', 'Private Elevator', 'Terrace', 'Fireplace', 'Chef Kitchen'],
    yearBuilt: 2023,
    propertyType: 'Condo',
    gallery: [
      'https://images.unsplash.com/photo-1760611656071-a8bef0578874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwZW50aG91c2UlMjB2aWV3fGVufDF8fHx8MTc3MDA0MDA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: '6',
    title: 'Cozy Family Home',
    location: 'Austin, Texas',
    price: '6,50,000',
    bedrooms: 4,
    bathrooms: 3,
    area: 2600,
    image: 'https://images.unsplash.com/photo-1613545325268-9265e1609167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3IlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3MDAxODU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    type: 'sale',
    description: 'Perfect family home with spacious living areas, updated kitchen, and large backyard in great school district.',
    features: ['Backyard', 'Updated', 'Fireplace', 'Garage', 'Good Schools'],
    yearBuilt: 2015,
    propertyType: 'House',
    gallery: [
      'https://images.unsplash.com/photo-1613545325268-9265e1609167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3IlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3MDAxODU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
];
