# API-INTEGRATION

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: ZAINAB UNISA NAAZNEEN

*INTERN ID*: CT04DM194

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH


This is a simple, responsive web application that fetches and displays live news headlines using the NewsAPI. The app is built using basic web development tools — HTML, CSS, and JavaScript — and demonstrates how to work with a public API to display real-time data dynamically on a webpage.
The primary goal of this project was to create a functional webpage that interacts with a public API and renders data dynamically, all while keeping the design lightweight and mobile-friendly. It satisfies the common requirement of a basic web development project that involves API integration.

Features:
Fetches live news headlines from a public news API.
Dynamically displays news articles on the webpage without needing to reload the page.
Responsive design: Works across desktops, tablets, and mobile devices.
Error handling for when no news is found or something goes wrong.
Clean and simple user interface.
Easily expandable for future features like search or category filters.

Tools Used:
HTML – For the structure of the webpage.
CSS – For styling the page and making it responsive.
JavaScript (ES6) – For fetching and rendering data from the NewsAPI.
(performed on visual studio code platform)

How It Works:
1. When the user clicks the “Show News” button, a JavaScript function is triggered.
2. This function uses the fetch() method to request the latest top headlines from the NewsAPI.
3. The response, which is in JSON format, is parsed and used to create HTML elements (news cards) on the fly.
4. These cards are then inserted into the webpage, showing the article’s image, title, description, and a link to read more.
5. If something goes wrong (e.g., invalid API key, network error), a user-friendly message is shown.

Setup Instructions:
1. Download or clone this repository.
2. Get a free API key from https://newsapi.org by signing up.
3. Replace the placeholder "your-api-key" in script.js with your actual API key.
4. Open index.html in any web browser to run the app.

Credits:
News data provided by NewsAPI.org.
Created using plain JavaScript and basic web technologies — no frameworks.

Conclusion
This project demonstrates how to connect to a third-party API and dynamically display data in a user-friendly way. It’s a great starting point for beginners learning how to integrate APIs and build interactive front-end applications.
