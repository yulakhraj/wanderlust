# Wanderlust - Travel Itinerary Generator

A responsive web application that helps users generate personalized travel itineraries based on their preferences.

## Project Structure

```
wanderlust/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── LocationPage.js
│   │   ├── LocationGrid.js
│   │   └── Location/
│   │       ├── Sikkim.js
│   │       ├── Ladakh.js
│   │       ├── KulluManali.js
│   │       ├── Rishikesh.js
│   │       ├── Kashmir.js
│   │       ├── Goa.js
│   │       ├── Jaipur.js
│   │       ├── Kerala.js
│   │       ├── Andaman.js
│   │       ├── ArunachalPradesh.js
│   │       ├── Uttarakhand.js
│   │       ├── NorthEast.js
│   │       └── Bhutan.js
│   ├── data/
│   │   └── locations.js
│   ├── styles/
│   │   └── main.css
│   ├── App.js
│   ├── index.js
│   └── reportWebVitals.js
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

## Tech Stack

- React.js
- Tailwind CSS
- JavaScript (ES6+)

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Features

- Responsive navigation bar with logo and menu items
- Destination tiles for easy navigation
- 7-day itineraries for each location
- Travel tips and Google Maps route links
- Contact information and social links in footer
- Print-friendly itinerary format

## Development

The project uses:
- React for component-based architecture
- Tailwind CSS for styling
- Modern JavaScript features
- Responsive design principles

## Contributing

Feel free to submit issues and enhancement requests.

## Notes
- A `.gitignore` file is included to prevent `node_modules` and other unnecessary files from being committed to version control. 