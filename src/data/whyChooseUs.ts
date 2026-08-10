export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  details?: string[];
}

export const whyChooseUs: WhyChooseItem[] = [
  {
    id: 1,
    title: 'Quality Comes First',
    description: 'We are intentional about the quality of every product we source.',
    details: [
      'The furniture you see in our catalogue is sourced based on its specifications, materials, design, functionality, and overall value.',
      'We aim to provide products that meet the quality and standards represented in their listings.',
      'What you see is what we aim to deliver.',
    ],
  },
  {
    id: 2,
    title: 'Better Value for Your Money',
    description: 'Our procurement model gives you access to global suppliers at competitive prices.',
    details: [
      'You can save up to 50% compared to local market prices, depending on the product and applicable costs.',
      'We focus on helping you get better value—not simply cheaper furniture.',
    ],
  },
  {
    id: 3,
    title: 'Transparent From Start to Finish',
    description: 'We believe you should know what you\'re paying for.',
    details: [
      'From product pricing and payment terms to shipping, clearance, and delivery timelines, we communicate the relevant costs and expectations clearly before you commit.',
      'No unnecessary surprises.',
    ],
  },
  {
    id: 4,
    title: 'Trusted Global Sourcing',
    description: 'We source from trusted global suppliers and carefully review product information before recommending products to our customers.',
    details: [
      'Our goal is to make international furniture sourcing accessible without requiring you to navigate suppliers, shipping, or procurement processes yourself.',
    ],
  },
  {
    id: 5,
    title: 'Customer Satisfaction Matters',
    description: 'Your satisfaction is important to us.',
    details: [
      'We aim to make every stage of your experience from choosing your furniture to receiving your order smooth, clear, and professional.',
      'We listen, communicate, and work to resolve genuine concerns promptly.',
    ],
  },
  {
    id: 6,
    title: 'We Keep You Informed',
    description: 'We don\'t disappear after payment.',
    details: [
      'From procurement to shipping and delivery, we provide relevant updates throughout your order journey so you know where your order stands.',
    ],
  },
  {
    id: 7,
    title: 'Built for Individuals & Businesses',
    description: 'Whether you\'re buying one chair for your home, furnishing an apartment, setting up an office, stocking your retail store, or procuring furniture for a commercial project, we have a procurement solution for you.',
    details: [],
  },
  {
    id: 8,
    title: 'Your Space, Our Responsibility',
    description: 'We understand that furniture is more than a purchase. It contributes to how your home, office, business, or commercial space looks and functions.',
    details: [
      'That\'s why we approach every order with care, attention to detail, and a commitment to delivering the value you expect.',
    ],
  },
];

export const ourPromise = {
  title: 'Our Promise',
  description: 'Quality furniture. Transparent procurement. Better value.',
  commitment: 'At Ariock Spaces, we\'re committed to making furniture procurement simple, reliable, and stress-free.',
  thanks: 'Thank you for trusting Ariock Spaces.',
};
