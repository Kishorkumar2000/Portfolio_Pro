# Complete Portfolio Setup Guide

## 📋 Quick Start Checklist

- [ ] Node.js 18+ installed
- [ ] Code editor (VS Code recommended)
- [ ] Git installed (optional)
- [ ] Vercel account (for deployment)

## 🚀 Step-by-Step Setup

### Step 1: Create Project Structure

Create a new folder and set up the following structure:

```
kishorkumar-portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── about-profile.jpg
│   │   ├── og-image.jpg
│   │   └── projects/
│   ├── documents/
│   │   └── Kishorkumar_Resume.pdf
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── experience/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── skills/
│   │   │   └── page.tsx
│   │   ├── hackathons/
│   │   │   └── page.tsx
│   │   ├── education/
│   │   │   └── page.tsx
│   │   ├── certifications/
│   │   │   └── page.tsx
│   │   ├── awards/
│   │   │   └── page.tsx
│   │   ├── resume/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   └── common/
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── types/
│   │   └── index.ts
│   └── lib/
│       └── firebase/
│           └── config.ts
├── .env.local
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

### Step 2: Initialize Project

Open terminal in your project folder and run:

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir
```

When prompted:

- ✅ TypeScript: Yes
- ✅ ESLint: Yes
- ✅ Tailwind CSS: Yes
- ✅ `src/` directory: Yes
- ✅ App Router: Yes
- ❌ Import alias: No (use default)

### Step 3: Install Dependencies

```bash
npm install framer-motion react-hook-form zod lucide-react firebase
```

### Step 4: Copy All Provided Files

Copy each file I've provided into the correct location in your project structure.

### Step 5: Configure Environment Variables

Create `.env.local` in the root:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Kishorkumar Dhanabose Portfolio
CONTACT_EMAIL=dkishorkumar7@gmail.com
```

### Step 6: Add Your Content

#### A. Add Images

1. **Profile Image** (`public/images/profile.jpg`)

   - Size: 800x800px (square)
   - Format: JPG or PNG
   - Professional headshot

2. **About Profile** (`public/images/about-profile.jpg`)

   - Size: 600x600px
   - Different angle or professional photo

3. **OG Image** (`public/images/og-image.jpg`)
   - Size: 1200x630px
   - For social media previews

#### B. Add Resume PDF

Place your resume in `public/documents/Kishorkumar_Resume.pdf`

#### C. Update Social Links

In the following files, replace placeholder links with your actual profiles:

**src/app/page.tsx**:

```typescript
<a href="https://github.com/YOUR_USERNAME" ...>
<a href="https://linkedin.com/in/YOUR_USERNAME" ...>
```

**src/components/common/Footer.tsx**:

```typescript
<a href="https://github.com/YOUR_USERNAME" ...>
<a href="https://linkedin.com/in/YOUR_USERNAME" ...>
```

### Step 7: Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` and check:

- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Navigation works
- [ ] Contact form validates input
- [ ] Resume downloads
- [ ] Mobile responsive design

### Step 8: Build for Production

```bash
npm run build
```

Fix any errors that appear during build.

## 🌐 Deployment to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Create GitHub Repository**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.local`
   - Redeploy if needed

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts to deploy.

## 📧 Contact Form Setup

### Using Resend (Recommended - Free Tier)

1. **Sign up for Resend**

   - Go to [resend.com](https://resend.com)
   - Create account (free tier: 100 emails/day)

2. **Get API Key**

   - Dashboard → API Keys → Create API Key
   - Copy the key

3. **Add to Environment**

   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```

4. **Install Resend**

   ```bash
   npm install resend
   ```

5. **Update Contact API**
   Edit `src/app/api/contact/route.ts` and uncomment Resend code:

   ```typescript
   const { Resend } = require("resend");
   const resend = new Resend(process.env.RESEND_API_KEY);
   // ... rest of the code
   ```

6. **Verify Domain (Optional)**
   - For production, verify your domain in Resend
   - This removes "via Resend" from emails

## 🎨 Customization Guide

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#your-color',
        // ... more shades
        900: '#your-color',
      }
    }
  }
}
```

Use a tool like [Tailwind Color Generator](https://uicolors.app/create) to generate shades.

### Change Fonts

1. **Choose Google Fonts**

   - Visit [fonts.google.com](https://fonts.google.com)
   - Select your fonts

2. **Update layout.tsx**:

   ```typescript
   import { Your_Font } from "next/font/google";

   const yourFont = Your_Font({ subsets: ["latin"] });
   ```

3. **Update tailwind.config.js**:
   ```javascript
   fontFamily: {
     sans: ['Your Font', 'system-ui', 'sans-serif'],
   }
   ```

### Update Content

All content is in `src/data/portfolio.ts`. Edit the arrays to match your information:

```typescript
export const experiences: Experience[] = [
  {
    id: "1",
    company: "Your Company",
    role: "Your Role",
    // ... update all fields
  },
];
```

## 🔍 SEO Optimization

### 1. Update Metadata

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your description",
  // ... update all fields
};
```

### 2. Create Sitemap

Create `src/app/sitemap.ts`:

```typescript
export default function sitemap() {
  return [
    {
      url: "https://your-domain.com",
      lastModified: new Date(),
    },
    {
      url: "https://your-domain.com/about",
      lastModified: new Date(),
    },
    // ... more pages
  ];
}
```

### 3. Create Robots.txt

Create `src/app/robots.ts`:

```typescript
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://your-domain.com/sitemap.xml",
  };
}
```

### 4. Submit to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://your-domain.com/sitemap.xml`

## 📊 Analytics Setup (Optional)

### Google Analytics

1. **Create GA4 Property**

   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property
   - Get Measurement ID

2. **Add to Next.js**
   Create `src/app/layout.tsx` and add:
   ```typescript
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
     `}
   </Script>
   ```

### Vercel Analytics (Easier)

1. Go to your Vercel project
2. Settings → Analytics → Enable
3. That's it! Analytics automatically tracked

## 🐛 Common Issues & Solutions

### Issue: Images not displaying

**Solution:**

```bash
# Check file names (case-sensitive)
# Ensure files are in public/images/
# Use correct Next.js Image component
```

### Issue: Build fails with TypeScript errors

**Solution:**

```bash
# Check all imports
# Ensure all types are defined
# Run: npm run build to see specific errors
```

### Issue: Contact form not sending

**Solution:**

```bash
# Check API route: /api/contact
# Verify environment variables
# Check browser console for errors
# Test API directly with Postman
```

### Issue: Slow page load

**Solution:**

```bash
# Optimize images (use WebP format)
# Enable Image Optimization in next.config.js
# Check Lighthouse report
# Lazy load components below fold
```

## 🔒 Security Best Practices

1. **Never commit `.env.local`**

   - Already in `.gitignore`
   - Use Vercel environment variables for production

2. **API Rate Limiting**

   - Consider adding rate limiting to contact form
   - Use services like Upstash for Redis-based rate limiting

3. **Input Validation**
   - Already implemented with react-hook-form
   - Server-side validation in API routes

## 📱 Progressive Web App (Optional)

To make your portfolio a PWA:

1. **Create manifest.json** in `public/`:

   ```json
   {
     "name": "Kishorkumar Dhanabose",
     "short_name": "Portfolio",
     "description": "QA Engineer Portfolio",
     "start_url": "/",
     "display": "standalone",
     "background_color": "#ffffff",
     "theme_color": "#2563eb",
     "icons": [
       {
         "src": "/icon-192.png",
         "sizes": "192x192",
         "type": "image/png"
       }
     ]
   }
   ```

2. **Add to layout.tsx**:
   ```typescript
   <link rel="manifest" href="/manifest.json" />
   ```

## 🎯 Performance Checklist

- [ ] Images optimized (WebP format, proper sizes)
- [ ] Fonts optimized (subset, preload)
- [ ] Code splitting enabled
- [ ] Lazy loading implemented
- [ ] Lighthouse score > 90
- [ ] Mobile responsive tested
- [ ] SEO metadata complete
- [ ] Analytics tracking
- [ ] Error pages created
- [ ] 404 page customized

## 📞 Need Help?

If you encounter any issues:

1. Check the error message carefully
2. Search Google/Stack Overflow
3. Check Next.js documentation
4. Contact: dkishorkumar7@gmail.com

## 🎉 You're Done!

Your portfolio is now live and ready to impress recruiters!

**Final Checklist:**

- [ ] All personal information updated
- [ ] Images added and displaying
- [ ] Resume PDF uploaded
- [ ] Contact form working
- [ ] Deployed to Vercel
- [ ] Custom domain added (optional)
- [ ] Analytics tracking (optional)
- [ ] Shared on LinkedIn and resume

---

**Congratulations! Your professional portfolio is live! 🚀**
