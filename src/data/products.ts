export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  whatsappMessage: string;
}

export const categories = [
  { id: 'desks', name: 'Desks & Tables', icon: '🖥️' },
  { id: 'chairs', name: 'Office Chairs', icon: '💺' },
  { id: 'gaming', name: 'Gaming Chairs', icon: '🎮' },
  { id: 'dining', name: 'Dining Chairs', icon: '🪑' },
  { id: 'accessories', name: 'Accessories', icon: '✨' },
];

export const products: Product[] = [
  // Desks & Tables
  {
    id: '1',
    name: 'Modern Wooden Desk',
    category: 'desks',
    image: '/furniture/1.png',
    whatsappMessage: 'Hi! I\'m interested in the Modern Wooden Desk',
  },
  {
    id: '2',
    name: 'Executive Office Desk - Wood',
    category: 'desks',
    image: '/furniture/2.png',
    whatsappMessage: 'Hi! I\'m interested in the Executive Office Desk (Wood)',
  },
  {
    id: '3',
    name: 'Executive Office Desk - White',
    category: 'desks',
    image: '/furniture/3.png',
    whatsappMessage: 'Hi! I\'m interested in the Executive Office Desk (White)',
  },
  {
    id: '4',
    name: 'Height Adjustable Standing Desk',
    category: 'desks',
    image: '/furniture/4.png',
    whatsappMessage: 'Hi! I\'m interested in the Height Adjustable Standing Desk',
  },
  {
    id: '7',
    name: 'Large Gaming Desk',
    category: 'desks',
    image: '/furniture/7.png',
    whatsappMessage: 'Hi! I\'m interested in the Large Gaming Desk',
  },
  {
    id: '9',
    name: 'Minimalist Work Desk',
    category: 'desks',
    image: '/furniture/9.png',
    whatsappMessage: 'Hi! I\'m interested in the Minimalist Work Desk',
  },
  {
    id: '11',
    name: 'Premium Executive Desk',
    category: 'desks',
    image: '/furniture/11.png',
    whatsappMessage: 'Hi! I\'m interested in the Premium Executive Desk',
  },
  {
    id: '12',
    name: 'Compact Home Office Desk',
    category: 'desks',
    image: '/furniture/12.png',
    whatsappMessage: 'Hi! I\'m interested in the Compact Home Office Desk',
  },
  {
    id: '13',
    name: 'Modern L-Shaped Desk',
    category: 'desks',
    image: '/furniture/13.png',
    whatsappMessage: 'Hi! I\'m interested in the Modern L-Shaped Desk',
  },
  {
    id: '14',
    name: 'Industrial Style Desk',
    category: 'desks',
    image: '/furniture/14.png',
    whatsappMessage: 'Hi! I\'m interested in the Industrial Style Desk',
  },

  // Office Chairs
  {
    id: '5',
    name: 'Ergonomic Mesh Office Chair',
    category: 'chairs',
    image: '/furniture/5.png',
    whatsappMessage: 'Hi! I\'m interested in the Ergonomic Mesh Office Chair',
  },
  {
    id: '10',
    name: 'Premium Mesh Executive Chair',
    category: 'chairs',
    image: '/furniture/10.png',
    whatsappMessage: 'Hi! I\'m interested in the Premium Mesh Executive Chair',
  },
  {
    id: '16',
    name: 'High-Back Office Chair',
    category: 'chairs',
    image: '/furniture/16.png',
    whatsappMessage: 'Hi! I\'m interested in the High-Back Office Chair',
  },
  {
    id: '17',
    name: 'Executive Leather Chair',
    category: 'chairs',
    image: '/furniture/17.png',
    whatsappMessage: 'Hi! I\'m interested in the Executive Leather Chair',
  },
  {
    id: '18',
    name: 'Comfort Plus Office Chair',
    category: 'chairs',
    image: '/furniture/18.png',
    whatsappMessage: 'Hi! I\'m interested in the Comfort Plus Office Chair',
  },
  {
    id: '19',
    name: 'Mesh Task Chair',
    category: 'chairs',
    image: '/furniture/19.png',
    whatsappMessage: 'Hi! I\'m interested in the Mesh Task Chair',
  },

  // Gaming Chairs
  {
    id: '15',
    name: 'Gaming Chair - Black',
    category: 'gaming',
    image: '/furniture/15.png',
    whatsappMessage: 'Hi! I\'m interested in the Gaming Chair (Black)',
  },
  {
    id: '6',
    name: 'Gaming Chair - Blue',
    category: 'gaming',
    image: '/furniture/6.png',
    whatsappMessage: 'Hi! I\'m interested in the Gaming Chair (Blue)',
  },
  {
    id: '21',
    name: 'Pro Gaming Chair',
    category: 'gaming',
    image: '/furniture/21.png',
    whatsappMessage: 'Hi! I\'m interested in the Pro Gaming Chair',
  },
  {
    id: '22',
    name: 'Racing Style Gaming Chair',
    category: 'gaming',
    image: '/furniture/22.png',
    whatsappMessage: 'Hi! I\'m interested in the Racing Style Gaming Chair',
  },
  {
    id: '23',
    name: 'Elite Gaming Chair',
    category: 'gaming',
    image: '/furniture/23.png',
    whatsappMessage: 'Hi! I\'m interested in the Elite Gaming Chair',
  },

  // Dining Chairs
  {
    id: '8',
    name: 'Modern Dining Chair Set',
    category: 'dining',
    image: '/furniture/8.png',
    whatsappMessage: 'Hi! I\'m interested in the Modern Dining Chair Set',
  },
  {
    id: '24',
    name: 'Scandinavian Dining Chairs',
    category: 'dining',
    image: '/furniture/24.png',
    whatsappMessage: 'Hi! I\'m interested in the Scandinavian Dining Chairs',
  },
  {
    id: '26',
    name: 'Minimalist Dining Chairs',
    category: 'dining',
    image: '/furniture/26.png',
    whatsappMessage: 'Hi! I\'m interested in the Minimalist Dining Chairs',
  },

  // Accessories
  {
    id: '20',
    name: 'Monitor Stand Riser',
    category: 'accessories',
    image: '/furniture/20.jpg',
    whatsappMessage: 'Hi! I\'m interested in the Monitor Stand Riser',
  },
  {
    id: '25',
    name: 'Laptop Stand',
    category: 'accessories',
    image: '/furniture/25.png',
    whatsappMessage: 'Hi! I\'m interested in the Laptop Stand',
  },
];
