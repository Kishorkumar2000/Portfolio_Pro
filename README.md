# Kishorkumar Dhanabose - Professional Portfolio

A modern, fully-responsive portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ **Responsive Design**: Mobile-first approach with seamless experience across all devices
- ✅ **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- ✅ **Smooth Animations**: Framer Motion for engaging user experience
- ✅ **SEO Optimized**: Meta tags, Open Graph, structured data
- ✅ **Performance**: Optimized images, code splitting, fast loading times
- ✅ **Contact Form**: Functional contact form with validation
- ✅ **Resume Viewer**: Embedded PDF viewer with download option
- ✅ **Firebase Ready**: Pre-configured for Firebase integration
- ✅ **Accessibility**: WCAG 2.1 AA compliant

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.x or higher
- npm or yarn package manager
- Git

## 🛠️ Installation

### 1. Clone or Download the Repository

```bash
# If using Git
git clone <your-repository-url>
cd portfolio

# Or download and extract the ZIP file
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration (Optional - for admin features)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Kishorkumar Dhanabose Portfolio

# Email Configuration (Optional - for contact form)
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=dkishorkumar7@gmail.com
```

### 4. Add Your Images

Place your images in the `public/images/` directory:

```
public/
├── images/
│   ├── profile.jpg           # Main profile image
│   ├── about-profile.jpg     # About page image
│   ├── og-image.jpg          # Social media preview
│   └── projects/             # Project screenshots
├── documents/
│   └── Kishorkumar_Resume.pdf  # Your resume PDF
└── favicon.ico
```

### 5. Update Personal Information

Edit the following files with your information:

**src/data/portfolio.ts** - Update all data with your details
**src/app/layout.tsx** - Update metadata
**src/components/common/Footer.tsx** - Update social links
**src/components/common/Navbar.tsx** - Update navigation if needed

## 🏃 Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Click Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Add environment variables
8. Deploy

## 📁 Project Structure

```
portfolio/
├── public/               # Static assets
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── about/       # About page
│   │   ├── experience/  # Experience page
│   │   ├── projects/    # Projects page
│   │   ├── skills/      # Skills page
│   │   ├── hackathons/  # Hackathons page
│   │   ├── education/   # Education page
│   │   ├── certifications/ # Certifications page
│   │   ├── awards/      # Awards page
│   │   ├── resume/      # Resume page
│   │   ├── contact/     # Contact page
│   │   ├── api/         # API routes
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   ├── components/      # React components
│   │   ├── common/      # Shared components
│   │   └── ...
│   ├── data/            # Portfolio data
│   ├── types/           # TypeScript types
│   └── lib/             # Utility functions
├── .env.local          # Environment variables
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Your primary colors
  }
}
```

### Fonts

Update fonts in `src/app/layout.tsx`:

```typescript
import { Inter, Roboto } from "next/font/google";
```

### Content

All content is centralized in `src/data/portfolio.ts` for easy updates.

## 📧 Contact Form Setup

To enable the contact form:

1. Sign up for [Resend](https://resend.com)
2. Get your API key
3. Add `RESEND_API_KEY` to `.env.local`
4. Uncomment the Resend code in `src/app/api/contact/route.ts`

## 🔒 Firebase Setup (Optional)

For admin features and authentication:

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication and Firestore
3. Add your Firebase config to `.env.local`
4. The configuration is already set up in `src/lib/firebase/config.ts`

## 📱 Social Media Links

Update your social media links in:

- `src/app/page.tsx` (Home page)
- `src/components/common/Footer.tsx`
- `src/app/contact/page.tsx`

## 🐛 Troubleshooting

### Images not loading

- Ensure images are in the correct `public/images/` directory
- Check file names match exactly (case-sensitive)
- Use proper Next.js Image component

### Build errors

- Clear `.next` folder: `rm -rf .next`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### Contact form not working

- Check API route is working: `/api/contact`
- Verify environment variables are set
- Check browser console for errors

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or issues:

- Email: dkishorkumar7@gmail.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

## 🎯 Next Steps

1. [ ] Add your actual images
2. [ ] Update all content in `src/data/portfolio.ts`
3. [ ] Add your resume PDF
4. [ ] Set up contact form with Resend
5. [ ] Deploy to Vercel
6. [ ] Add custom domain
7. [ ] Set up Google Analytics (optional)
8. [ ] Submit sitemap to Google Search Console

---

Built with ❤️ by Kishorkumar Dhanabose
