# WETT LIFESTYLE - Official Website

The central nervous system of the entire WETT empire. Built with Next.js 15, React 19, and Tailwind CSS v4.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📋 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Formspree Configuration (Newsletter)
NEXT_PUBLIC_FORMSPREE_ID=xanpdbya

# NextAuth Configuration (Optional - for authentication)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🏗️ Project Structure

```
wett-lifestyle-site/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About WETT page
│   │   ├── blueprint/         # The Blueprint section
│   │   ├── collective/        # The Collective section
│   │   ├── empire/            # Empire ventures pages
│   │   ├── events/            # Events page
│   │   ├── family/            # Family section (Aura chat, members)
│   │   ├── login/             # Login page
│   │   ├── privacy/           # Privacy policy
│   │   ├── profile/           # User profile
│   │   ├── register/          # Registration page
│   │   ├── shop/              # Shop page
│   │   ├── terms/             # Terms of service
│   │   └── page.tsx           # Homepage
│   └── components/            # Reusable React components
│       ├── AboutWett.tsx      # About section on homepage
│       ├── AuraChatbot.tsx    # Aura AI chatbot (full page)
│       ├── AuraChatWidget.tsx # Floating chat widget
│       ├── ErrorBoundary.tsx  # Error handling component
│       ├── FeaturedFamily.tsx # Family showcase
│       ├── Footer.tsx         # Site footer with profiles
│       ├── Header.tsx         # Navigation header
│       ├── Hero.tsx           # Hero section with video
│       ├── LiveCounters.tsx   # Community counters
│       ├── Manifesto.tsx      # WETT manifesto
│       ├── NewsletterSignup.tsx # Email signup form
│       ├── Providers.tsx      # NextAuth provider wrapper
│       └── QuickNav.tsx       # Empire quick navigation
├── public/                    # Static assets
│   ├── empire/               # Empire section images
│   ├── Aura Profile photo.png
│   ├── The Team Profile Image.png
│   └── wett-main-logo1.png
├── .env.local                # Environment variables (not in git)
├── .env.example              # Environment template
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── package.json              # Dependencies
```

## ✨ Key Features

### 🏠 Homepage
- Hero section with video background and animated logo
- About WETT section with origin story
- WETT Manifesto
- Live community counters
- Empire quick navigation with images
- Featured family profiles
- Newsletter signup (Formspree integration)

### 💬 Aura AI Chatbot
- Comprehensive knowledge base covering:
  - WETT business operations
  - Polygyny philosophy
  - Exotic dancing industry insights
  - Psychological manipulation awareness
  - Seduction tactics (The Game philosophy)
  - Business administration strategies
- Conversation memory (tracks last 5 messages)
- Prospect identification and scoring
- Input sanitization and XSS protection
- Available as full page (`/family/aura`) and floating widget

### 🔒 Security Features
- Content Security Policy (CSP) headers
- XSS protection
- Input sanitization
- Rate limiting on forms (60-second cooldown)
- Error boundaries for graceful error handling
- Secure authentication setup (NextAuth)

### 📱 Responsive Design
- Mobile-first approach
- Tailwind CSS v4 for styling
- Custom color scheme:
  - `wett-gold`: #D4AF37
  - `deep-black`: #111111
  - `clean-white`: #FFFFFF

## 🎨 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Main landing page with all sections |
| About | `/about` | Comprehensive WETT story and philosophy |
| The Empire | `/empire` | Overview of all WETT ventures |
| The Family | `/family` | Community benefits and membership |
| The Blueprint | `/blueprint` | Core principles and roadmap |
| The Collective | `/collective` | Network and collaboration opportunities |
| Shop | `/shop` | Merchandise (coming soon) |
| Events | `/events` | Upcoming events and workshops |
| Aura Chat | `/family/aura` | Full-page AI chatbot |
| Privacy Policy | `/privacy` | Privacy policy |
| Terms of Service | `/terms` | Terms of service |

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4
- **React**: 19.1.0
- **Styling**: Tailwind CSS v4
- **TypeScript**: v5
- **Authentication**: NextAuth v4.24.11
- **Forms**: Formspree integration
- **Deployment**: Vercel (recommended)

## 📦 Dependencies

```json
{
  "next": "15.5.4",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "next-auth": "^4.24.11",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

## 🚢 Deployment

### GitHub Setup
1. Initialize git repository:
```bash
git init
git add .
git commit -m "Initial commit: WETT Lifestyle website"
```

2. Create GitHub repository and push:
```bash
git remote add origin https://github.com/yourusername/wett-lifestyle-site.git
git branch -M main
git push -u origin main
```

### Vercel Deployment (Recommended)
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_FORMSPREE_ID`
   - `NEXTAUTH_URL` (your production URL)
   - `NEXTAUTH_SECRET`
   - `NEXT_PUBLIC_SITE_URL`
5. Deploy!

### Other Platforms
- **Netlify**: Connect GitHub repo, set build command to `npm run build`
- **AWS Amplify**: Connect repo, configure build settings
- **Railway**: Connect GitHub, auto-deploy on push

## 📧 Contact & Support

- **Email**: wettentertainmentllc@gmail.com
- **Website**: [Your production URL]

## 📄 License

© 2025 WETT LIFESTYLE. All Rights Reserved.
"We Thrive Together"

---

Built with 💛 by the WETT Family
