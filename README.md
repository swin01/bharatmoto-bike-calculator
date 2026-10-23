# BharatMoto — Indian Bike Fuel & Trip Expense Calculator

A modular, zero-dependency web application for Indian motorcycle riders to calculate trip fuel expenses, daily commute budgets, compare bike models, and look up real-world mileage figures.

## Project Structure
```text
bharatmoto_bike_calculator/
├── index.html        # Clean semantic HTML markup & layout
├── style.css         # CSS3 styling, custom properties (Dark/Light themes), SVG donut chart
├── data/
│   ├── bikes.js      # 60+ Indian motorcycle models with ARAI & real mileage
│   └── fuelRates.js  # Live retail fuel prices for Indian states & districts (Kolkata baseline: ₹113.50)
└── app.js            # Reactive application logic, calculations, and event handlers
```

## Features
- **Real-World Mileage Fetch**: Auto-populates city, highway, and ARAI mileage based on selected bike.
- **Live State Fuel Prices**: Switch between Indian states and fuel grades (Regular Petrol, Power, XP 95, XP 100, CNG).
- **Riding Condition Multiplier**: Adjusts mileage based on traffic (City, Mixed, Highway, Eco).
- **Tank Range & Refuel Alerts**: Calculates full-tank range and notifies if fuel stops are needed.
- **Commute & Annual Budget**: Simulates monthly and yearly fuel bills with car vs. bike savings.
- **Side-by-Side Comparison**: Compares two motorcycles with 3-year and 5-year savings projections.

## How to Run
Simply open `index.html` in any modern web browser. No npm, build step, or web server required!
