# Portfolio Website

## Deployment Guide

### Prerequisites
1. Create a GitHub account if you don't have one at [GitHub](https://github.com)
2. Create a Netlify account at [Netlify](https://www.netlify.com) (Free tier)
3. Set up EmailJS account at [EmailJS](https://www.emailjs.com) (Free tier - 200 emails/month)

### Step 1: EmailJS Setup
1. Sign up for a free EmailJS account
2. Create a new email service (Gmail recommended)
3. Create an email template
4. Note down your:
   - Service ID
   - Template ID
   - Public Key
5. Replace the following in `src/components/Contact.tsx`:
   - `service_h1k802q` with your Service ID
   - `template_a70wk5b` with your Template ID
   - `-FtubmD6ULbx2RjYS` with your Public Key

### Step 2: GitHub Setup
1. Create a new repository on GitHub
2. Initialize git in your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin your-repository-url
   git push -u origin main
   ```

### Step 3: Netlify Deployment
1. Log in to Netlify
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Step 4: Custom Domain (Optional)
1. In Netlify, go to Site settings > Domain management
2. Add your custom domain
3. Follow Netlify's DNS configuration instructions

### Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Features
- Responsive design
- Dark/Light mode
- Animated UI components
- Contact form with EmailJS integration
- Social media links
- Project showcase
- Skills section
- Certificates display

## Technologies Used
- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS

## License
MIT
