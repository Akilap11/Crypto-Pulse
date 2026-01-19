# CryptoPulse – Real-Time Crypto Price Tracker

![App Preview](https://raw.githubusercontent.com/Akilap11/Crypto-Pulse/main/public/preview.png)

## Overview

CryptoPulse is a real-time cryptocurrency market tracking application focused on price trends, historical data visualization, and clear presentation of market information.

The project was built to practice working with third-party APIs, managing client-side state, and designing a responsive UI for data-heavy applications. It includes individual coin pages with interactive charts and supports multiple fiat currencies.

## Features

- Real-time cryptocurrency price tracking using live market data
- Individual coin detail pages with historical price charts
- Custom date range selection for trend analysis
- Currency switching (USD, LKR, INR)
- Responsive layout optimized for desktop and mobile
- Clean navigation and client-side routing

## Tech Stack

- React – Frontend framework
- CoinGecko API – Cryptocurrency market data
- Axios – API communication
- Recharts – Data visualization
- React DatePicker – Date range selection
- React Router – Client-side routing

## Installation and Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/Akilap11/Crypto-Pulse.git
cd Crypto-Pulse
npm install
````

## Environment Variables

This project uses the CoinGecko API and requires an API key.

Create a `.env` file in the project root and add:

```env
VITE_COINGECKO_API_KEY=your_api_key_here
```

Start the development server:

```bash
npm run dev
```

## Notes and Limitations

* API rate limits are handled at the client level
* Market data depends on CoinGecko availability and response time
* Authentication is intentionally omitted to keep the app lightweight

## Future Improvements

* User watchlists with persistence
* Coin comparison view
* Improved caching to reduce API calls
* Optional authentication for personalized features