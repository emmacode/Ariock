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
    name: 'John Doe',
    location: 'Lagos',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Doe.',
    location: 'Abuja',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    rating: 5,
  },
  {
    id: 3,
    name: 'John Doe.',
    location: 'Port Harcourt',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Jane Doe',
    location: 'Ibadan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident sunt in culpa.',
    rating: 5,
  },
  {
    id: 5,
    name: 'John Doe',
    location: 'Lagos',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    rating: 5,
  },
];
