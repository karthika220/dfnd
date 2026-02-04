# DFND X Website

## Professional PPF & Window Films Website

This is a modern, responsive website for DFND X - a premium paint protection film and window tinting company.

## Features

- **Responsive Design** - Works on all devices (desktop, tablet, mobile)
- **Smooth Animations** - Fade-in effects and smooth scrolling
- **Interactive FAQ** - Accordion-style FAQ section
- **Modern UI** - Dark theme with neon green accents
- **Fast Loading** - Optimized images and lazy loading
- **Professional Layout** - Multiple sections showcasing products and features

## File Structure

```
dfndx-website/
│
├── index.html          # Main HTML file
├── styles.css          # CSS stylesheet
├── script.js           # JavaScript functionality
├── README.md          # This file
│
└── assets/            # Assets folder (you need to add this)
    ├── logo.png       # DFND X logo
    ├── hero-car.jpg   # Hero section background image
    ├── usa-flag.png   # USA flag badge
    ├── made-in-usa.png # Made in USA badge
    ├── ppf-box.png    # PPF product box image
    ├── blue-car.png   # Blue sports car image
    ├── window-film-box.png # Window film box image
    ├── ppf-box-large.png   # Large PPF box for engineering section
    ├── layers-diagram.png  # Film layers diagram
    │
    └── icons/         # Feature icons folder
        ├── scratch-resistant.png
        ├── stain-guard.png
        ├── gloss-clarity.png
        ├── uv-shield.png
        ├── hydrophobic.png
        └── easy-maintenance.png
```

## Assets Folder Requirements

You need to create an `assets` folder in the same directory as index.html with the following images:

### Root Assets (assets/)
1. **logo.png** - DFND X logo (white/lime green version)
2. **hero-car.jpg** - Hero section background (orange/brown sports car)
3. **usa-flag.png** - American flag icon
4. **made-in-usa.png** - Made in USA badge/shield
5. **ppf-box.png** - Product box for PPF (lime green box)
6. **blue-car.png** - Blue Porsche 911 front view
7. **window-film-box.png** - Window film product packaging
8. **ppf-box-large.png** - Larger version of PPF box
9. **layers-diagram.png** - Multi-layer film structure diagram

### Icons Subfolder (assets/icons/)
Create icons representing:
1. **scratch-resistant.png** - Scratch/chip protection icon
2. **stain-guard.png** - Shield with droplets icon
3. **gloss-clarity.png** - Diamond/crystal icon
4. **uv-shield.png** - Sun protection icon
5. **hydrophobic.png** - Water droplet/arrow icon
6. **easy-maintenance.png** - Sparkle/cleaning icon

## Setup Instructions

1. Download all three files (index.html, styles.css, script.js)
2. Create an `assets` folder
3. Add all required images to the assets folder
4. Create an `icons` subfolder inside assets
5. Add icon images to the icons folder
6. Open index.html in your web browser

## Customization

### Colors
The main brand color is lime green (#c4ff0e). You can change this in styles.css by searching for all instances of `#c4ff0e` and replacing with your preferred color.

### Content
All text content is in index.html. Simply edit the HTML to update:
- Section titles
- Descriptions
- Feature benefits
- FAQ questions and answers

### Layout
The site uses CSS Grid for layouts. Adjust grid-template-columns in styles.css to change the number of columns:
- `.features-grid` - Features section (currently 3 columns)
- `.trust-grid` - Trust section (currently 3 columns)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Intersection Observer API
- CSS Animations

## Sections

1. **Hero Section** - Main banner with CTA
2. **About PPF** - Paint protection film introduction
3. **Why Choose** - 6 key features in grid layout
4. **See It In Action** - Visual showcase
5. **Sun Film** - Window film product info
6. **Trust** - Customer trust indicators
7. **Engineering** - Technical details with layer diagram
8. **FAQ** - Frequently asked questions
9. **Footer** - Copyright info

## Contact Form Integration

To add a working contact form:
1. Replace the alert() in script.js with your form logic
2. Use services like Formspree, EmailJS, or your own backend
3. Add form fields to a modal or separate page

## Performance Tips

- Optimize all images (compress to WebP format if possible)
- Use appropriate image dimensions
- Enable browser caching
- Consider using a CDN for assets

## License

© 2026 DFND X - All rights reserved

---

For questions or support, please contact the development team.
