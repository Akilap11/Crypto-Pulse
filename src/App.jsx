import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Coin from './pages/Coin/Coin'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coin/:coinId" element={<Coin/>} />
      </Routes>
    </div>
  )
}

export default App