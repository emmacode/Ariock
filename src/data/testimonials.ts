export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Princess O.",
    location: "Abuja",
    text: "I was honestly nervous about paying for a pre-order, but Ariock Spaces earned my trust through constant updates and transparency. They delivered exactly what was promised, and the experience exceeded my expectations. I'd definitely order again.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael O.",
    location: "Lagos",
    text: "The pricing honestly surprised me. I compared the same furniture locally, and Ariock helped me save a significant amount without compromising on quality. The entire process was worth it.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah E..",
    location: "Port Harcourt",
    text: "What stood out for me was the communication. They explained every step, answered all my questions, and kept me updated from payment to delivery. I felt completely at ease throughout the process.",
    rating: 5,
  },
  {
    id: 4,
    name: "David A.",
    location: "Ibadan",
    text: "The quality was exactly what I expected based on the photos and description. The finish, materials, and design were impressive. I'll definitely be ordering more furniture soon.",
    rating: 5,
  },
  {
    id: 5,
    name: "Joy U.",
    location: "Ile-Ife",
    text: "After receiving my order, I recommended Ariock Spaces to two of my friends. The experience was smooth, the furniture was beautiful, and the pricing made sense.",
    rating: 5,
  },
];
