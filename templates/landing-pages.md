# Landing Page Template Guide

## Overview
Landing page templates for marketing, product launches, and lead generation.

## Recommended Templates

### 1. Cruip Tailwind Landing Page
**Best Choice for: SaaS and product launches**

```bash
# Quick Start
git clone https://github.com/cruip/tailwind-landing-page-template.git my-landing
cd my-landing
npm install
npm run dev
```

**Key Features:**
- ✅ Modern, responsive design
- ✅ Hero sections with CTAs
- ✅ Feature showcases
- ✅ Pricing tables
- ✅ Testimonials section
- ✅ Newsletter signup
- ✅ Mobile-first approach

**Tech Stack:**
- React
- Tailwind CSS
- Vite

**Repository:** [cruip/tailwind-landing-page-template](https://github.com/cruip/tailwind-landing-page-template)
**License:** MIT

---

### 2. Next.js Landing Boilerplate
**Best Choice for: SEO-optimized marketing pages**

```bash
# Quick Start
npx create-next-app my-landing --example https://github.com/ixartz/Next-js-Boilerplate
cd my-landing
npm install
npm run dev
```

**Key Features:**
- ✅ Next.js 14 with App Router
- ✅ SEO-ready with next-sitemap
- ✅ i18n support
- ✅ Testing setup (Jest, RTL)
- ✅ Dark mode support
- ✅ TypeScript configured
- ✅ ESLint + Prettier

**Tech Stack:**
- Next.js 14
- TypeScript
- Tailwind CSS
- Testing Library

**Repository:** [ixartz/Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate)
**License:** MIT

---

### 3. Astro Landing Page
**Best Choice for: Ultra-fast static landing pages**

```bash
# Quick Start
npm create astro@latest my-landing -- --template minimal
cd my-landing
npm install
npm run dev
```

**Key Features:**
- ✅ Ultra-fast static generation
- ✅ Component islands architecture
- ✅ Minimal JavaScript
- ✅ Built-in image optimization
- ✅ MDX support
- ✅ Multiple framework support

**Tech Stack:**
- Astro
- Tailwind CSS
- TypeScript

**Repository:** [withastro/astro](https://github.com/withastro/astro)
**License:** MIT
**Docs:** https://docs.astro.build

---

## Landing Page Sections

### Essential Components

#### Hero Section
```tsx
export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Your Product Headline
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
            Compelling subtitle that explains your value proposition
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-lg bg-red-600 px-8 py-3 font-medium text-white hover:bg-red-700">
              Get Started
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-3 font-medium text-white hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
```

#### Features Section
```tsx
const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance',
  },
  {
    icon: '🔒',
    title: 'Secure',
    description: 'Enterprise-grade security built-in',
  },
  {
    icon: '📱',
    title: 'Responsive',
    description: 'Works perfectly on all devices',
  },
];

export const Features = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold">Why Choose Us</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

#### CTA Section
```tsx
export const CTA = () => {
  return (
    <section className="bg-red-600 py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-xl text-red-100">
          Join thousands of satisfied customers today
        </p>
        <button className="mt-8 rounded-lg bg-white px-8 py-3 font-medium text-red-600 hover:bg-gray-100">
          Start Free Trial
        </button>
      </div>
    </section>
  );
};
```

## Setup Checklist

- [ ] Define value proposition
- [ ] Create compelling headline
- [ ] Design hero section
- [ ] Add feature highlights
- [ ] Include social proof/testimonials
- [ ] Create pricing section (if applicable)
- [ ] Add strong CTA buttons
- [ ] Set up email capture
- [ ] Configure analytics
- [ ] Optimize meta tags for SEO
- [ ] Add Open Graph images
- [ ] Test mobile responsiveness
- [ ] Implement A/B testing (optional)

## Customization Tips

### Color Scheme
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-brand-color',
        secondary: '#your-accent-color',
      },
    },
  },
};
```

### Typography
```css
/* globals.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
```

## Conversion Optimization

### Best Practices
1. **Above the Fold**
   - Clear value proposition
   - Strong CTA
   - Compelling visual

2. **Social Proof**
   - Customer testimonials
   - Trust badges
   - Client logos
   - Usage statistics

3. **Clear CTAs**
   - Action-oriented text
   - High contrast colors
   - Prominent placement
   - Multiple CTAs throughout

4. **Fast Loading**
   - Optimize images
   - Minimize JavaScript
   - Use CDN
   - Enable caching

### A/B Testing Elements
- Headline variations
- CTA button text
- Color schemes
- Image choices
- Form length

## SEO Optimization

```tsx
// app/layout.tsx or head.tsx
export const metadata = {
  title: 'Your Product | Tagline',
  description: 'Compelling 155-character description with keywords',
  openGraph: {
    title: 'Your Product | Tagline',
    description: 'Social media description',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Product',
    description: 'Twitter description',
    images: ['/twitter-image.jpg'],
  },
};
```

## Analytics Setup

```tsx
// Google Analytics
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```

## Resources

- [Landing Page Best Practices](https://www.nngroup.com/articles/landing-page-design/)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Tailwind UI Components](https://tailwindui.com/components)
- [Conversion Rate Optimization](https://cxl.com/blog/landing-page-design/)
