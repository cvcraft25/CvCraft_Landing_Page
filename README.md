# CvCraft – Landing Page

A modern, high-performance landing page for CvCraft: an AI-powered, ATS-ready resume builder. Built with React Router, Tailwind CSS, and Motion for delightful animations. Clean glassmorphism aesthetics, responsive by default, and focused on conversions.

## ✨ Highlights
- **Beautiful design**: gradients, glassmorphism, subtle glow animations
- **Responsive**: mobile-first, optimized layouts and typography
- **Smooth interactions**: Motion-powered reveal and hover effects
- **Clear narrative**: Hero → Features → How It Works → Samples → Team → CTA → Feedback
- **Accessible anchors**: Header links scroll to sections with proper offset

## 📦 Tech Stack
- React 18 + React Router v7 (file-based routes)
- Tailwind CSS 3
- Motion (Framer Motion API)
- Lucide Icons
- Tooling: Vite, TypeScript config, Vitest + Testing Library

## 🗂️ Project Structure
```
apps/web/
├─ src/
│  ├─ app/
│  │  ├─ page.jsx                    # Landing page composition
│  │  ├─ CvCraft-Contact Us/page.jsx # Contact page route
│  │  ├─ layout.jsx, routes.ts       # Routing & layout
│  ├─ components/landing/
│  │  ├─ Header.jsx, Footer.jsx
│  │  ├─ HeroSection.jsx, FeaturesSection.jsx, HowItWorksSection.jsx
│  │  ├─ SamplesSection.jsx, TeamSection.jsx
│  │  ├─ CtaSection.jsx, FeedbackSection.jsx
│  ├─ assests/                       # Images (logo, team, samples)
│  └─ index.css, global styles, utils
└─ package.json
```

## 🧭 Routes
- `/` – Landing page
- `/CvCraft-Contact Us` – Contact page

Header anchors on the landing page:
- `#features`, `#how-it-works`, `#samples`, `#contact` (Feedback section)

The `#contact` section uses `scroll-mt` to avoid being hidden under the fixed header.

## 🚀 Getting Started
1. Prerequisites
   - Node.js 18+
   - npm (or pnpm/yarn)
2. Install dependencies
   ```bash
   npm install
   ```
3. Start dev server
   ```bash
   npm run dev
   ```
4. Type generation + typecheck (optional)
   ```bash
   npm run typecheck
   ```

Note: This project is optimized for dev preview with React Router’s dev server.

## 🧩 Key Components
- `Header.jsx`
  - Fixed, translucent header with gradient brand and anchors, includes “Contact Us” link.
- `HeroSection.jsx`
  - Impactful headline and subcopy introducing CvCraft’s value.
- `FeaturesSection.jsx`
  - Core benefits of the product.
- `HowItWorksSection.jsx`
  - Simple 3-step process with animated badges.
  - Step 3: “Download & Evaluate”.
- `SamplesSection.jsx`
  - Visual resume samples.
- `TeamSection.jsx`
  - Profiles, roles, and social links for the core team.
- `CtaSection.jsx`
  - “Start your career transformation today” with primary CTA.
- `FeedbackSection.jsx`
  - Encourages feedback and contributions; includes Contact CTA.
- `Footer.jsx`
  - Centered brand, compact height, clear copyright.

## 🎨 Theming & UX Notes
- Tailwind classes power dark/light styles via a `dark` class on the root container.
- Glassmorphism cards with subtle gradient overlays and hover scaling.
- Section IDs plus `scroll-mt` ensure clean anchored navigation under a fixed header.

## 🧪 Testing
- Vitest + Testing Library are configured. Example command:
  ```bash
  npx vitest
  ```

## 🤝 Contributing
We welcome feedback, ideas, and contributors to make CvCraft better for everyone!
- Open issues or feature requests in the repository.
- Share UX feedback via the “Contact Us” button on the site.

## 👥 Developers
- **Prateek Rane** – Chief Architect  
  LinkedIn: https://www.linkedin.com/in/prateek-rane-5a9496214/  
  GitHub: https://github.com/prateekrane

- **Abhirup Dey** – Lead Backend Engineer  
  LinkedIn: https://www.linkedin.com/in/abhirup-dey-92287725b/  
  GitHub: https://github.com/abhi-ingithub22

- **Prakhar Singh Panwar** – Deployment Lead  
  LinkedIn: https://www.linkedin.com/in/prakhar-singh-panwar-756116236/  
  GitHub: https://github.com/Prakhar22111

- **Parv Kanungo** – User Analytics Lead  
  LinkedIn: https://www.linkedin.com/in/parvkanungo/  
  GitHub: https://github.com/ParvKanungo
  
- **Saraansh Gupta** – Front-End Engineer  
  LinkedIn: https://www.linkedin.com/in/saraanshgupta/  
  GitHub: https://github.com/Saraansh08

## 📣 Feedback & Contact
- Website CTA → Contact page: `https://cvcraft25.netlify.app/`
- Or email: hello@cvcrafthq.com (update to your preferred address)



---

If you’d like, I can add screenshots/GIFs, deployment instructions (Netlify/Vercel), and a cleaner contact route (e.g., `/contact`).
