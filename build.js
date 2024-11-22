const fs = require('fs');
const path = require('path');

// Define the order of components
const components = [
    'head.html',
    'hero.html',
    'itinerary.html',
    'features.html',
    'social-proof.html',
    'pricing.html',
    'contact-footer.html'
];

// Function to read component content
function readComponent(filename) {
    return fs.readFileSync(path.join(__dirname, 'components', 'html', filename), 'utf8');
}

// Combine all components
const combinedContent = components
    .map(readComponent)
    .join('\n');

// Write the final index.html
fs.writeFileSync(path.join(__dirname, 'index.html'), combinedContent);

console.log('Successfully built index.html from components');
