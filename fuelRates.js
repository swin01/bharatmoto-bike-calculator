// All-India State & City Fuel Rates Database (Kolkata: ₹113.50/L)
const ALL_INDIA_FUEL_RATES = {
    "West Bengal": {
      cities: {
        "Kolkata": { regular: 113.50, power: 118.00, xp95: 122.50, xp100: 160.00, cng: 89.50 },
        "Howrah": { regular: 113.50, power: 118.00, xp95: 122.50, xp100: 160.00, cng: 89.50 },
        "Siliguri": { regular: 114.20, power: 118.70, xp95: 123.20, xp100: 160.00, cng: 91.00 },
        "Asansol": { regular: 113.80, power: 118.30, xp95: 122.80, xp100: 160.00, cng: 90.00 },
        "Durgapur": { regular: 113.65, power: 118.15, xp95: 122.65, xp100: 160.00, cng: 89.50 }
      }
    },
    "Maharashtra": {
      cities: {
        "Mumbai": { regular: 111.21, power: 115.70, xp95: 119.80, xp100: 160.00, cng: 75.00 },
        "Pune": { regular: 111.45, power: 115.95, xp95: 120.00, xp100: 160.00, cng: 87.00 },
        "Nagpur": { regular: 112.10, power: 116.60, xp95: 120.70, xp100: 160.00, cng: 89.00 },
        "Nashik": { regular: 111.60, power: 116.10, xp95: 120.20, xp100: 160.00, cng: 88.00 }
      }
    },
    "Delhi": {
      cities: {
        "New Delhi": { regular: 94.72, power: 98.90, xp95: 102.80, xp100: 160.00, cng: 75.09 },
        "Central Delhi": { regular: 94.72, power: 98.90, xp95: 102.80, xp100: 160.00, cng: 75.09 }
      }
    },
    "Karnataka": {
      cities: {
        "Bengaluru": { regular: 111.68, power: 116.18, xp95: 120.50, xp100: 160.00, cng: 82.50 },
        "Mysuru": { regular: 111.40, power: 115.90, xp95: 120.20, xp100: 160.00, cng: 83.00 },
        "Mangaluru": { regular: 110.80, power: 115.30, xp95: 119.60, xp100: 160.00, cng: 82.00 }
      }
    },
    "Tamil Nadu": {
      cities: {
        "Chennai": { regular: 107.76, power: 112.26, xp95: 116.80, xp100: 160.00, cng: 85.00 },
        "Coimbatore": { regular: 108.20, power: 112.70, xp95: 117.20, xp100: 160.00, cng: 86.00 },
        "Madurai": { regular: 108.40, power: 112.90, xp95: 117.40, xp100: 160.00, cng: 86.50 }
      }
    },
    "Telangana": {
      cities: {
        "Hyderabad": { regular: 116.15, power: 120.65, xp95: 125.20, xp100: 160.00, cng: 91.00 },
        "Warangal": { regular: 115.80, power: 120.30, xp95: 124.80, xp100: 160.00, cng: 91.00 }
      }
    },
    "Uttar Pradesh": {
      cities: {
        "Lucknow": { regular: 96.57, power: 100.80, xp95: 104.90, xp100: 160.00, cng: 84.50 },
        "Noida": { regular: 96.65, power: 100.90, xp95: 105.00, xp100: 160.00, cng: 79.20 },
        "Kanpur": { regular: 96.63, power: 100.90, xp95: 104.95, xp100: 160.00, cng: 85.00 },
        "Varanasi": { regular: 97.46, power: 101.70, xp95: 105.80, xp100: 160.00, cng: 86.00 }
      }
    },
    "Gujarat": {
      cities: {
        "Ahmedabad": { regular: 96.42, power: 100.70, xp95: 104.80, xp100: 160.00, cng: 78.50 },
        "Surat": { regular: 96.28, power: 100.50, xp95: 104.60, xp100: 160.00, cng: 78.50 },
        "Vadodara": { regular: 96.08, power: 100.30, xp95: 104.40, xp100: 160.00, cng: 78.00 }
      }
    },
    "Kerala": {
      cities: {
        "Thiruvananthapuram": { regular: 109.42, power: 113.92, xp95: 118.50, xp100: 160.00, cng: 86.00 },
        "Kochi": { regular: 107.90, power: 112.40, xp95: 117.00, xp100: 160.00, cng: 85.50 }
      }
    },
    "Rajasthan": {
      cities: {
        "Jaipur": { regular: 104.88, power: 109.38, xp95: 113.90, xp100: 160.00, cng: 86.50 },
        "Jodhpur": { regular: 105.40, power: 109.90, xp95: 114.40, xp100: 160.00, cng: 87.00 }
      }
    },
    "Punjab": {
      cities: {
        "Chandigarh": { regular: 96.20, power: 100.50, xp95: 104.50, xp100: 160.00, cng: 84.00 },
        "Ludhiana": { regular: 98.40, power: 102.90, xp95: 106.90, xp100: 160.00, cng: 86.00 }
      }
    },
    "Bihar": {
      cities: {
        "Patna": { regular: 107.24, power: 111.74, xp95: 116.20, xp100: 160.00, cng: 86.00 }
      }
    },
    "Madhya Pradesh": {
      cities: {
        "Bhopal": { regular: 108.65, power: 113.15, xp95: 117.50, xp100: 160.00, cng: 88.00 },
        "Indore": { regular: 108.66, power: 113.16, xp95: 117.50, xp100: 160.00, cng: 88.00 }
      }
    },
    "Odisha": {
      cities: {
        "Bhubaneswar": { regular: 103.19, power: 107.69, xp95: 112.00, xp100: 160.00, cng: 85.00 }
      }
    },
    "Andhra Pradesh": {
      cities: {
        "Visakhapatnam": { regular: 109.80, power: 114.30, xp95: 118.80, xp100: 160.00, cng: 87.00 },
        "Vijayawada": { regular: 110.20, power: 114.70, xp95: 119.20, xp100: 160.00, cng: 87.50 }
      }
    },
    "Assam": {
      cities: {
        "Guwahati": { regular: 98.18, power: 102.68, xp95: 106.90, xp100: 160.00, cng: 85.00 }
      }
    },
    "Haryana": {
      cities: {
        "Gurugram": { regular: 97.18, power: 101.40, xp95: 105.40, xp100: 160.00, cng: 80.50 }
      }
    },
    "Goa": {
      cities: {
        "Panaji": { regular: 97.80, power: 102.30, xp95: 106.50, xp100: 160.00, cng: 85.00 }
      }
    },
    "Jharkhand": {
      cities: {
        "Ranchi": { regular: 99.84, power: 104.30, xp95: 108.50, xp100: 160.00, cng: 86.00 }
      }
    },
    "Chhattisgarh": {
      cities: {
        "Raipur": { regular: 102.45, power: 106.95, xp95: 111.00, xp100: 160.00, cng: 86.50 }
      }
    },
    "Uttarakhand": {
      cities: {
        "Dehradun": { regular: 95.28, power: 99.70, xp95: 103.80, xp100: 160.00, cng: 84.00 }
      }
    },
    "Himachal Pradesh": {
      cities: {
        "Shimla": { regular: 97.20, power: 101.70, xp95: 105.80, xp100: 160.00, cng: 85.00 }
      }
    },
    "Jammu & Kashmir": {
      cities: {
        "Srinagar": { regular: 101.50, power: 106.00, xp95: 110.20, xp100: 160.00, cng: 87.00 }
      }
    }
  };
