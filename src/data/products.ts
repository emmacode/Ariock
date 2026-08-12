export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  whatsappMessage: string;
}

export const categories = [
  { id: "desks", name: "Desks & Tables", icon: "🖥️" },
  { id: "chairs", name: "Office Chairs", icon: "💺" },
  { id: "gaming", name: "Gaming Chairs", icon: "🎮" },
  { id: "dining", name: "Dining Chairs", icon: "🪑" },
  { id: "accessories", name: "Accessories", icon: "✨" },
];

export const products: Product[] = [
  // Desks & Tables
  {
    id: "1",
    name: "Modern Wooden Desk",
    category: "desks",
    image: "/furniture/1.png",
    whatsappMessage: "Hi! I'm interested in the Modern Wooden Desk",
  },
  {
    id: "2",
    name: "Executive Office Desk - Wood",
    category: "desks",
    image: "/furniture/2.png",
    whatsappMessage: "Hi! I'm interested in the Executive Office Desk (Wood)",
  },
  {
    id: "3",
    name: "Electric Desk",
    category: "desks",
    image: "/furniture/Electric-Desk.png",
    whatsappMessage: "Hi! I'm interested in the Electric Desk",
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
    name: "Large Gaming Desk",
    category: "desks",
    image: "/furniture/7.png",
    whatsappMessage: "Hi! I'm interested in the Large Gaming Desk",
  },
  {
    id: "9",
    name: "Minimalist Work Desk",
    category: "desks",
    image: "/furniture/9.png",
    whatsappMessage: "Hi! I'm interested in the Minimalist Work Desk",
  },
  {
    id: "11",
    name: "Premium Executive Desk",
    category: "desks",
    image: "/furniture/11.png",
    whatsappMessage: "Hi! I'm interested in the Premium Executive Desk",
  },
  {
    id: "12",
    name: "Compact Home Office Desk",
    category: "desks",
    image: "/furniture/12.png",
    whatsappMessage: "Hi! I'm interested in the Compact Home Office Desk",
  },
  {
    id: "13",
    name: "Modern L-Shaped Desk",
    category: "desks",
    image: "/furniture/13.png",
    whatsappMessage: "Hi! I'm interested in the Modern L-Shaped Desk",
  },
  {
    id: "14",
    name: "Industrial Style Desk",
    category: "desks",
    image: "/furniture/14.png",
    whatsappMessage: "Hi! I'm interested in the Industrial Style Desk",
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
  {
    id: "29",
    name: "Workspace Desk",
    category: "desks",
    image: "/furniture/workspace.png",
    whatsappMessage: "Hi! I'm interested in the Workspace Desk",
  },

  // Office Chairs
  {
    id: "5",
    name: "Ergonomic Mesh Office Chair",
    category: "chairs",
    image: "/furniture/5.png",
    whatsappMessage: "Hi! I'm interested in the Ergonomic Mesh Office Chair",
  },
  {
    id: "10",
    name: "Premium Mesh Executive Chair",
    category: "chairs",
    image: "/furniture/10.png",
    whatsappMessage: "Hi! I'm interested in the Premium Mesh Executive Chair",
  },
  {
    id: "16",
    name: "High-Back Office Chair",
    category: "chairs",
    image: "/furniture/16.png",
    whatsappMessage: "Hi! I'm interested in the High-Back Office Chair",
  },
  {
    id: "17",
    name: "Executive Leather Chair",
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
    id: "19",
    name: "Mesh Task Chair",
    category: "chairs",
    image: "/furniture/19.png",
    whatsappMessage: "Hi! I'm interested in the Mesh Task Chair",
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
    name: "Gaming Chair - Black",
    category: "gaming",
    image: "/furniture/15.png",
    whatsappMessage: "Hi! I'm interested in the Gaming Chair (Black)",
  },
  {
    id: "6",
    name: "Gaming Chair - Blue",
    category: "gaming",
    image: "/furniture/6.png",
    whatsappMessage: "Hi! I'm interested in the Gaming Chair (Blue)",
  },
  {
    id: "21",
    name: "Pro Gaming Chair",
    category: "gaming",
    image: "/furniture/21.png",
    whatsappMessage: "Hi! I'm interested in the Pro Gaming Chair",
  },
  {
    id: "22",
    name: "Racing Style Gaming Chair",
    category: "gaming",
    image: "/furniture/22.png",
    whatsappMessage: "Hi! I'm interested in the Racing Style Gaming Chair",
  },
  {
    id: "23",
    name: "Elite Gaming Chair",
    category: "gaming",
    image: "/furniture/23.png",
    whatsappMessage: "Hi! I'm interested in the Elite Gaming Chair",
  },

  // Dining Chairs
  {
    id: "8",
    name: "Modern Dining Chair Set",
    category: "dining",
    image: "/furniture/8.png",
    whatsappMessage: "Hi! I'm interested in the Modern Dining Chair Set",
  },
  {
    id: "26",
    name: "Minimalist Dining Chairs",
    category: "dining",
    image: "/furniture/26.png",
    whatsappMessage: "Hi! I'm interested in the Minimalist Dining Chairs",
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
    name: "Crochet Stool 2",
    category: "dining",
    image: "/furniture/Crochet-Stool-2.png",
    whatsappMessage: "Hi! I'm interested in the Crochet Stool 2",
  },
  {
    id: "37",
    name: "Crochet Stool 3",
    category: "dining",
    image: "/furniture/Crochet-Stool-3.png",
    whatsappMessage: "Hi! I'm interested in the Crochet Stool 3",
  },

  // Accessories
  {
    id: "25",
    name: "Laptop Stand",
    category: "accessories",
    image: "/furniture/25.png",
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
    category: "accessories",
    image: "/furniture/Fluff-Duffel.png",
    whatsappMessage: "Hi! I'm interested in the Fluff Duffel",
  },
];
