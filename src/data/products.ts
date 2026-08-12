export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  whatsappMessage: string;
}

export const categories = [
  { id: "desks", name: "Desks & Tables", icon: "🖥️" },
  { id: "chairs", name: "Chairs", icon: "💺" },
  { id: "gaming", name: "Gaming Chairs", icon: "🎮" },
  { id: "dining", name: "Dining Chairs", icon: "🪑" },
  { id: "accessories", name: "Accessories", icon: "✨" },
];

export const products: Product[] = [
  // Desks & Tables
  {
    id: "1",
    name: "Emily Reading Desk",
    category: "desks",
    image: "/furniture/Emily-Reading-Desk.png",
    whatsappMessage: "Hi! I'm interested in the Emily Reading Desk",
  },
  {
    id: "2",
    name: "Crochet Chair",
    category: "chairs",
    image: "/furniture/Crochet-Chair.png",
    whatsappMessage: "Hi! I'm interested in the Crochet Chair",
  },
  {
    id: "3",
    name: "Electric Adjustable Desk",
    category: "desks",
    image: "/furniture/Electric-Desk.png",
    whatsappMessage: "Hi! I'm interested in the Electric Adjustable Desk",
  },
  {
    id: "4",
    name: "Height Adjustable Standing Desk",
    category: "desks",
    image: "/furniture/4.png",
    whatsappMessage:
      "Hi! I'm interested in the Height Adjustable Standing Desk",
  },
  {
    id: "7",
    name: "Metallic Leg desk",
    category: "desks",
    image: "/furniture/Metallic-Leg-desk.png",
    whatsappMessage: "Hi! I'm interested in the Metallic Leg desk",
  },
  {
    id: "9",
    name: "Gaming Chair - Red",
    category: "gaming",
    image: "/furniture/Gaming-Chair-Red.png",
    whatsappMessage: "Hi! I'm interested in the Gaming Chair (Red)",
  },
  {
    id: "13",
    name: "Triple studio Chair",
    category: "chairs",
    image: "/furniture/Triple-studio-Chair.png",
    whatsappMessage: "Hi! I'm interested in the Triple studio Chair",
  },
  {
    id: "14",
    name: "Lumba Chair",
    category: "chairs",
    image: "/furniture/Triple-studio-Chair-black.png",
    whatsappMessage: "Hi! I'm interested in the Lumba Chair",
  },
  {
    id: "27",
    name: "Electric Desk 2",
    category: "desks",
    image: "/furniture/Electric-Desk2.png",
    whatsappMessage: "Hi! I'm interested in the Electric Desk 2",
  },
  {
    id: "28",
    name: "Twinie Center Table",
    category: "desks",
    image: "/furniture/Twinie-Center-Table.png",
    whatsappMessage: "Hi! I'm interested in the Twinie Center Table",
  },

  // Office Chairs
  {
    id: "10",
    name: "Gaming Chair - Black",
    category: "gaming",
    image: "/furniture/Gaming-Chair-Black.png",
    whatsappMessage: "Hi! I'm interested in the Premium Mesh Executive Chair",
  },
  {
    id: "16",
    name: "High-Back Office Chair",
    category: "chairs",
    image: "/furniture/High-Back-Office-Chair.png",
    whatsappMessage: "Hi! I'm interested in the High-Back Office Chair",
  },
  {
    id: "17",
    name: "Mesh Ergonomic chair",
    category: "chairs",
    image: "/furniture/17.png",
    whatsappMessage: "Hi! I'm interested in the Executive Leather Chair",
  },
  {
    id: "18",
    name: "Comfort Plus Office Chair",
    category: "chairs",
    image: "/furniture/18.png",
    whatsappMessage: "Hi! I'm interested in the Comfort Plus Office Chair",
  },
  {
    id: "30",
    name: "Kinad Chair",
    category: "chairs",
    image: "/furniture/Kinad-Chair.png",
    whatsappMessage: "Hi! I'm interested in the Kinad Chair",
  },
  {
    id: "31",
    name: "Lumba Chair",
    category: "chairs",
    image: "/furniture/Lumba-Chair.png",
    whatsappMessage: "Hi! I'm interested in the Lumba Chair",
  },
  {
    id: "32",
    name: "Lumba Official Chair",
    category: "chairs",
    image: "/furniture/Lumba-Official.png",
    whatsappMessage: "Hi! I'm interested in the Lumba Official Chair",
  },
  {
    id: "33",
    name: "Spinal Chair",
    category: "chairs",
    image: "/furniture/Spinal-Chair.png",
    whatsappMessage: "Hi! I'm interested in the Spinal Chair",
  },
  {
    id: "34",
    name: "Stillo Chair",
    category: "chairs",
    image: "/furniture/Stillo-Chair.png",
    whatsappMessage: "Hi! I'm interested in the Stillo Chair",
  },

  // Gaming Chairs
  {
    id: "15",
    name: "Triple studio Chair",
    category: "chairs",
    image: "/furniture/15.png",
    whatsappMessage: "Hi! I'm interested in the Triple studio Chair",
  },
  {
    id: "6",
    name: "Gaming Chair - Blue",
    category: "gaming",
    image: "/furniture/Gaming-Chair-Blue.png",
    whatsappMessage: "Hi! I'm interested in the Gaming Chair (Blue)",
  },
  {
    id: "21",
    name: "Laptop Stand",
    category: "accessories",
    image: "/furniture/Laptop-Stand-1.png",
    whatsappMessage: "Hi! I'm interested in the Laptop Stand",
  },
  {
    id: "22",
    name: "Laptop Stand",
    category: "accessories",
    image: "/furniture/Laptop-Stand-2.png",
    whatsappMessage: "Hi! I'm interested in the Laptop Stand",
  },
  {
    id: "23",
    name: "Laptop Stand",
    category: "accessories",
    image: "/furniture/Laptop-Stand-3.png",
    whatsappMessage: "Hi! I'm interested in the Laptop Stand",
  },

  // Dining Chairs
  {
    id: "8",
    name: "Modern Dining Chair Set",
    category: "dining",
    image: "/furniture/Dining-Chair-Set.png",
    whatsappMessage: "Hi! I'm interested in the Modern Dining Chair Set",
  },
  {
    id: "26",
    name: "Laptop Stand",
    category: "accessories",
    image: "/furniture/Laptop-Stand-5.png",
    whatsappMessage: "Hi! I'm interested in the Laptop Stand",
  },
  {
    id: "35",
    name: "Crochet Stool",
    category: "dining",
    image: "/furniture/Crochet-Stool.png",
    whatsappMessage: "Hi! I'm interested in the Crochet Stool",
  },
  {
    id: "36",
    name: "Crochet Stool",
    category: "dining",
    image: "/furniture/Crochet-Stool-2.png",
    whatsappMessage: "Hi! I'm interested in the Crochet Stool",
  },
  {
    id: "37",
    name: "Crochet Stool",
    category: "dining",
    image: "/furniture/Crochet-Stool-3.png",
    whatsappMessage: "Hi! I'm interested in the Crochet Stool",
  },

  // Accessories
  {
    id: "25",
    name: "Laptop Stand",
    category: "accessories",
    image: "/furniture/Laptop-Stand-4.png",
    whatsappMessage: "Hi! I'm interested in the Laptop Stand",
  },
  {
    id: "38",
    name: "Lopy Monitor Stand",
    category: "accessories",
    image: "/furniture/Lopy-Monitor Stand.png",
    whatsappMessage: "Hi! I'm interested in the Lopy Monitor Stand",
  },
  {
    id: "39",
    name: "Pare Monitor Stand",
    category: "accessories",
    image: "/furniture/Pare-Monitor stand.png",
    whatsappMessage: "Hi! I'm interested in the Pare Monitor Stand",
  },
  {
    id: "40",
    name: "Fluff Duffel",
    category: "chairs",
    image: "/furniture/Fluff-Duffel.png",
    whatsappMessage: "Hi! I'm interested in the Fluff Duffel",
  },
];
