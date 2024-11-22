# Caye Caulker Photo Tours Website

A responsive website for Caye Caulker Photography Tours, showcasing tour offerings and enabling customer registration.

## Project Structure

```
├── components/
│   ├── css/           # Component-specific styles
│   ├── html/          # HTML components
│   └── js/            # JavaScript modules
├── css/               # Main CSS imports
├── images/            # Website images
├── js/                # Main JavaScript
├── index.html         # Generated main HTML file
└── build.js          # Build script
```

## Components

The website is broken down into modular components for better maintainability:

- `head.html`: Meta tags, SEO, and stylesheet links
- `hero.html`: Hero section with main call-to-action
- `itinerary.html`: Tour itinerary timeline
- `features.html`: Tour highlights and features
- `social-proof.html`: Statistics and testimonials
- `pricing.html`: Pricing information and value propositions
- `contact-footer.html`: Contact form and footer

## Building the Website

The website uses a simple build process to combine HTML components into a single index.html file.

To build the website:

1. Make sure Node.js is installed
2. Run the build script:
   ```bash
   node build.js
   ```

This will combine all components in the correct order to create the final index.html file.

## Updating Content

To update website content:

1. Locate the relevant component in `components/html/`
2. Make your changes
3. Run `node build.js` to rebuild index.html

## Pricing

The tour is priced at $60 per person, offering exceptional value:
- Expert photography instruction
- Access to exclusive photo locations
- Sunrise and golden hour shots
- Small group sizes for personalized attention

Private tours are available with custom rates - contact for details.

## Development

CSS is organized into component-specific files in `components/css/` and imported through the main `css/styles.css` file.

JavaScript functionality is similarly modularized in `components/js/` and imported through `js/main.js`.
