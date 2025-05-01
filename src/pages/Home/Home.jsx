import React from 'react'
import './home.css'

const home = () => {
  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br/> Crypto Marketplace</h1>

        <p>Buy and sell cryptocurrencies, digital assets and NFTs</p>

        <form>
          <input type="text" placeholder='Search Crypto..' />
          <button type="submit">Search</button>
        </form>

      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24h Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
      </div>

    </div>
  )
}

export default home