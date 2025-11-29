# TeenCash Rewards Website

A clean, professional one-page website for the TeenCash Rewards Android app. This website is designed to help get approval from affiliate networks like Admitad, Cuelinks, Impact, vCommission, and AppBroda.

## Features

- ✅ Modern, clean, and professional design
- ✅ Teen-friendly UI with blue/purple theme
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ All required sections (Hero, About, Features, How It Works, etc.)
- ✅ Privacy Policy page
- ✅ Terms & Conditions page
- ✅ React Router for navigation
- ✅ Smooth scrolling and animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `build` folder, ready to be deployed to any static hosting service.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Features.js     # Features grid
│   ├── HowItWorks.js   # How it works steps
│   ├── ComingSoon.js   # Coming soon section
│   ├── Screenshots.js  # App screenshots
│   ├── Contact.js      # Contact information
│   └── Footer.js       # Footer with links
├── pages/              # Page components
│   ├── HomePage.js     # Main homepage
│   ├── PrivacyPolicy.js # Privacy policy page
│   └── TermsConditions.js # Terms & conditions page
├── App.js              # Main app with routing
└── index.js            # Entry point
```

## Customization

### Colors

Edit CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

### Content

- Update app name, tagline, and text in component files
- Replace screenshot placeholders in `src/components/Screenshots.js`
- Update contact information in `src/components/Contact.js`

## Deployment

This React app can be deployed to:

- **Netlify**: Connect your Git repository or drag & drop the `build` folder
- **Vercel**: Import your Git repository
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting**: Upload the `build` folder contents

## Technologies Used

- React 18
- React Router DOM
- CSS3 with modern features
- Google Fonts (Inter, Poppins)

## License

© 2025 CashMesh. All rights reserved.

## Contact

For questions or support: cashmesh231@gmail.com

