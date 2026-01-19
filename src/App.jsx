import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Coin from './pages/Coin/Coin'
import Home from './pages/Home/Home'
import MarketOverview from './pages/MarketOverview/MarketOverview'
import NewsUpdates from './pages/NewsUpdates/NewsUpdates'
import LearnCrypto from './pages/LearnCrypto/LearnCrypto'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/market-overview" element={<MarketOverview />} />
        <Route path="/news-updates" element={<NewsUpdates />} />
        <Route path="/learn-crypto" element={<LearnCrypto />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
