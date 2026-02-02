# Algarve Seasons | All-In-One HVAC Solutions

**Premium Air Conditioning, Solar Energy, and Heat Pump Services across the Algarve**

Algarve Seasons is a modern, responsive web application built with React 19, Tailwind CSS 4, and shadcn/ui components. The site showcases comprehensive HVAC, solar energy, and heat pump services across all 16 Algarve municipalities with geo-targeted landing pages, local SEO optimization, and interactive features.

---

## 📋 Project Overview

Algarve Seasons is a full-featured service website designed to help homeowners and businesses find premium climate control solutions in the Algarve region. The platform features:

- **16 Geo-Targeted Municipality Pages** with LocalBusiness schema markup for local SEO visibility
- **Comprehensive Service Pages** for Air Conditioning, Solar Energy, and Heat Pumps with detailed information, FAQs, and pricing
- **Interactive Quote Forms** on every municipality page with confirmation pages
- **Resources & Guides Section** with educational articles on HVAC maintenance and solar energy benefits
- **Responsive Design** optimized for desktop, tablet, and mobile devices
- **Trust Badges** highlighting Daikin D1+ Partnership, 200+ installations, 5-star reviews, and Tesla Powerwall authorization
- **Dynamic Service Highlights** showing municipality-specific recommendations
- **Seasonal Hero Animation** emphasizing the "All Seasons" branding with color transitions

---

## 🏗️ Project Structure

```
algarve-seasons-aeo/
├── client/
│   ├── public/                    # Static assets (favicons, robots.txt)
│   ├── src/
│   │   ├── components/            # Reusable React components
│   │   │   ├── Layout.tsx         # Main layout with header/footer
│   │   │   ├── GeoLandingTemplate.tsx    # Template for geo pages
│   │   │   ├── LocalBusinessSchema.tsx   # JSON-LD schema component
│   │   │   ├── NearbyServiceAreas.tsx    # Adjacent municipality links
│   │   │   ├── GeoQuoteForm.tsx   # Quote form modal
│   │   │   ├── TrustBadges.tsx    # Trust badges component
│   │   │   ├── SeasonalHeroText.tsx     # Seasonal color animation
│   │   │   ├── ScrollToTop.tsx    # Scroll to top button
│   │   │   ├── WhatsAppButton.tsx # WhatsApp floating button
│   │   │   ├── ServiceHighlightCard.tsx # Service highlight cards
│   │   │   └── ui/               # shadcn/ui components
│   │   ├── pages/                 # Page components
│   │   │   ├── Home.tsx           # Homepage
│   │   │   ├── About.tsx          # About page
│   │   │   ├── Contact.tsx        # Contact page
│   │   │   ├── FAQ.tsx            # FAQ hub
│   │   │   ├── Testimonials.tsx   # Customer testimonials
│   │   │   ├── ResourcesGuides.tsx # Educational resources
│   │   │   ├── Careers.tsx        # Job listings
│   │   │   ├── PrivacyTerms.tsx   # Privacy & terms
│   │   │   ├── ServiceAreas.tsx   # Service areas directory
│   │   │   ├── QuoteConfirmation.tsx # Quote confirmation
│   │   │   ├── services/          # Service pages
│   │   │   │   ├── AirConditioning.tsx
│   │   │   │   ├── SolarEnergy.tsx
│   │   │   │   ├── HeatPumps.tsx
│   │   │   │   └── AllInOneSolutions.tsx
│   │   │   └── geo/               # 16 municipality landing pages
│   │   │       ├── FaroLanding.tsx
│   │   │       ├── AlbufeiraLanding.tsx
│   │   │       ├── LagosLanding.tsx
│   │   │       └── ... (13 more municipality pages)
│   │   ├── lib/                   # Utility functions & data
│   │   │   ├── municipalityAdjacency.ts
│   │   │   ├── serviceHighlights.ts
│   │   │   ├── faqData.ts
│   │   │   └── articlesData.ts
│   │   ├── App.tsx                # Main app router
│   │   ├── main.tsx               # React entry point
│   │   └── index.css              # Global styles & design tokens
│   └── index.html                 # HTML template
├── package.json                   # Dependencies & scripts
└── README.md                      # This file
```

---

## 🎨 Design & Branding

**Color Palette:**
- Primary Orange: `#ff9900` (CTAs, accents, seasonal summer)
- Primary Blue: `#0066cc` (headings, links)
- Emerald Green: `#10b981` (seasonal spring, trust badges)
- Amber: `#f59e0b` (seasonal autumn)
- Ice Blue: `#3b82f6` (seasonal winter)
- Neutral Gray: `#6b7280` (body text)

**Typography:**
- Display Font: Playfair Display (headings)
- Body Font: Inter (body text, UI)
- Monospace: JetBrains Mono (code blocks)

**Key Design Elements:**
- Seasonal color animation on hero text
- Trust badges with icons and descriptions
- Responsive grid layouts for services and municipality cards
- Interactive accordion FAQs
- Smooth hover effects and transitions
- Mobile-first responsive design

---

## 🚀 Features

### Core Features
- **Homepage** with hero section, services overview, trust badges, and client testimonials
- **Service Pages** (Air Conditioning, Solar Energy, Heat Pumps, All-In-One Solutions) with detailed information, FAQs, and municipality links
- **16 Geo-Targeted Landing Pages** with LocalBusiness schema, nearby municipality recommendations, and quote forms
- **Service Areas Directory** with dynamic service highlights and region filtering
- **FAQ Hub** with 25+ questions organized by category and interactive filtering
- **Resources & Guides** with educational articles on HVAC maintenance and solar benefits
- **About Page** with company story and certifications
- **Contact Page** with contact form and direct communication options
- **Careers Page** with job opportunities
- **Privacy & Terms Page** with legal information

### Interactive Features
- **Quote Forms** on every municipality page with confirmation pages
- **WhatsApp Button** for direct messaging
- **Scroll to Top Button** for easy navigation
- **Seasonal Hero Animation** with color cycling
- **Nearby Service Areas Widget** showing adjacent municipalities
- **Service Highlights** with municipality-specific recommendations
- **Interactive FAQs** with category filtering
- **Dynamic Article Display** with category filtering

### SEO & Schema Markup
- **LocalBusiness Schema** on all 16 geo-targeted pages
- **Service Schema** on service pages
- **FAQ Schema** on FAQ page
- **Article Schema** on resources & guides
- **Aggregate Rating Schema** for reviews
- **Optimized Meta Tags** and descriptions
- **Canonical URLs** for duplicate content prevention
- **Sitemap** for search engine crawling

---

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | Frontend framework |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **shadcn/ui** | Pre-built UI components |
| **Wouter** | Lightweight client-side router |
| **React Helmet** | SEO meta tag management |
| **Lucide React** | Icon library |
| **Vite** | Build tool & dev server |

---

## 📱 Responsive Design

The website is fully responsive and optimized for all screen sizes:

- **Desktop** (1024px+): Full navigation with dropdowns, multi-column layouts
- **Tablet** (768px-1023px): Optimized spacing, touch-friendly buttons
- **Mobile** (320px-767px): Hamburger menu with icons, single-column layouts, stacked components

---

## 🔍 SEO Optimization

**Local SEO:**
- LocalBusiness schema markup on all 16 municipality pages
- Geo-targeted landing pages with municipality-specific content
- Internal linking strategy connecting pillar pages to location pages
- Service area links in footer and navigation
- Nearby municipality recommendations for cross-linking

**Technical SEO:**
- Optimized page titles (30-60 characters)
- Descriptive meta descriptions
- Canonical URLs
- Structured data (JSON-LD) for rich snippets
- Mobile-responsive design
- Fast page load times with Vite

**Content SEO:**
- Comprehensive service pages with detailed information
- FAQ section with 25+ questions
- Educational resources & guides
- Municipality-specific content
- Internal cross-linking

---

## 📝 Key Pages & Routes

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Homepage with hero, services, testimonials |
| `/services/air-conditioning` | Air Conditioning | Detailed AC service information |
| `/services/solar-energy` | Solar Energy | Solar panel systems & benefits |
| `/services/heat-pumps` | Heat Pumps | Heat pump installation & efficiency |
| `/services/all-in-one` | All-In-One Solutions | Bundle packages & sustainability |
| `/service-areas` | Service Areas | Directory of all 16 municipalities |
| `/about` | About | Company story & certifications |
| `/contact` | Contact | Contact form & information |
| `/faq` | FAQ Hub | 25+ questions with filtering |
| `/resources` | Resources & Guides | Educational articles |
| `/testimonials` | Testimonials | Customer reviews & testimonials |
| `/careers` | Careers | Job opportunities |
| `/privacy` | Privacy & Terms | Legal information |
| `/{municipality}` | Geo Pages | 16 municipality-specific pages |
| `/quote-confirmation` | Quote Confirmation | Post-submission confirmation |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm package manager

### Installation

1. **Clone the repository** (if using GitHub):
   ```bash
   git clone https://github.com/yourusername/algarve-seasons-aeo.git
   cd algarve-seasons-aeo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
pnpm build
```

The production-ready files will be in the `dist/` directory.

---

## 📊 Content Management

### Adding a New Service Page
1. Create a new file in `client/src/pages/services/`
2. Import necessary components (Layout, Helmet for SEO)
3. Add service-specific content sections
4. Update `App.tsx` with the new route
5. Add link to navigation in `Layout.tsx`

### Adding a New Municipality
1. Create a new landing page in `client/src/pages/geo/`
2. Use `GeoLandingTemplate` component
3. Pass municipality-specific data (name, slug, coordinates)
4. Update `App.tsx` with the new route
5. Add to municipality adjacency mapping in `lib/municipalityAdjacency.ts`

### Updating FAQ Content
1. Edit `lib/faqData.ts` with new questions/answers
2. Update categories if needed
3. FAQ page will automatically reflect changes

### Adding Blog Articles
1. Add new article to `lib/articlesData.ts`
2. Include title, excerpt, content, category, date
3. Articles page will automatically display new content

---

## 🔐 Environment Variables

No environment variables are required for the static frontend. The application uses only client-side data and APIs.

---

## 📞 Contact & Support

- **Phone**: +351 910 675 168
- **Email**: Dan@algarveseasons.com
- **WhatsApp**: Available via floating button on website
- **Service Areas**: All 16 Algarve municipalities

---

## 📄 License

This project is proprietary and confidential. All rights reserved to Algarve Seasons.

---

## 🙏 Acknowledgments

- Built with React 19 and Tailwind CSS 4
- UI components from shadcn/ui
- Icons from Lucide React
- Hosted on Manus platform

---

## 📅 Project Timeline

| Phase | Completion | Features |
|-------|-----------|----------|
| Phase 1 | ✅ Complete | Homepage, navigation, basic pages |
| Phase 2 | ✅ Complete | Service pages with comprehensive content |
| Phase 3 | ✅ Complete | 16 geo-targeted landing pages |
| Phase 4 | ✅ Complete | Quote forms & confirmation pages |
| Phase 5 | ✅ Complete | FAQ, resources, trust badges |
| Phase 6 | ✅ Complete | SEO optimization & schema markup |

---

## 🎯 Future Enhancements

- **Email Integration**: Connect quote forms to SendGrid/Mailgun for automatic notifications
- **Blog Section**: Add municipality-specific blog posts for local SEO
- **Before/After Gallery**: Showcase real project installations
- **ROI Calculator**: Interactive tool for energy savings projections
- **Live Chat**: Real-time customer support widget
- **Analytics Dashboard**: Conversion tracking by municipality and service type
- **Testimonial Videos**: Video testimonials from satisfied customers
- **Comparison Tool**: Side-by-side municipality comparison

---

## 📞 Support & Maintenance

For questions, bug reports, or feature requests, contact the development team. Regular updates and maintenance are performed to ensure optimal performance and security.

---

**Last Updated**: February 2, 2026  
**Version**: 1.0.0  
**Status**: Production Ready
