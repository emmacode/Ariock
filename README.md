# Ariock Spaces - Furniture Procurement Landing Page

A modern, responsive landing page for Ariock Spaces, a furniture procurement company helping individuals, businesses, retailers, and interior designers source quality furniture from trusted global suppliers.

## Features

- ✨ Modern, clean design with Ariock brand colors (#1A1A1A, #F6BC66, #FFFFFF)
- 📱 Fully responsive mobile design
- 🛋️ Product catalog with category filtering (Desks, Chairs, Gaming Chairs, Dining Chairs, Accessories)
- 💬 WhatsApp integration for product orders
- ❓ Comprehensive FAQ page
- 📄 Terms of Service page
- ⭐ Customer testimonials section
- 🎯 "Why Choose Us" section

## Tech Stack

- **Framework:** Next.js 16.3.0 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Geist Sans & Geist Mono

## Project Structure

```
ariock/
├── src/
│   ├── app/
│   │   ├── faq/              # FAQ page
│   │   ├── terms/            # Terms of Service page
│   │   ├── layout.tsx        # Root layout with Header & Footer
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Header.tsx        # Navigation header
│   │   └── Footer.tsx        # Footer component
│   └── data/
│       ├── products.ts       # Product catalog data
│       ├── faq.ts            # FAQ content
│       ├── whyChooseUs.ts    # Why Choose section data
│       └── testimonials.ts   # Customer testimonials
└── public/
    └── furniture/            # Product images
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Navigate to the project directory:
```bash
cd ariock
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Pages

### Home Page (/)
- Hero section with call-to-action
- Why Choose Ariock Spaces section
- Product categories
- Product catalog with filtering
- Customer testimonials
- Contact CTA section

### FAQ Page (/faq)
- Comprehensive FAQ with accordion UI
- Contact options (WhatsApp & Email)

### Terms of Service (/terms)
- Detailed terms and conditions
- Payment policies
- Delivery information
- Refund policies

## WhatsApp Integration

All product cards link directly to WhatsApp for easy ordering. Clicking a product opens WhatsApp with a pre-filled message specific to that product.

Contact: 09068909759

## Brand Colors

- **Dark:** #1A1A1A
- **Primary Gold:** #F6BC66
- **Primary Gold (Hover):** #ffba5a
- **White:** #FFFFFF

## Build for Production

```bash
npm run build
```

## Deploy

The app can be deployed on Vercel, Netlify, or any platform that supports Next.js.

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ariock)

## Contact

- **Website:** www.ariock-spaces.com
- **Email:** hello@ariock-spaces.com
- **WhatsApp:** 09068909759

## License

© 2024 Ariock Spaces. All rights reserved.
# Ariock
