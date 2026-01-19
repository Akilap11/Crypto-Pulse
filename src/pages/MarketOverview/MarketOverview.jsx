import React, { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
import "./MarketOverview.css";

const MarketOverview = () => {
  const { allCoin, currency } = useContext(CoinContext);

  const topGainers = [...allCoin]
    .sort(
      (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
    )
    .slice(0, 5);

  const topLosers = [...allCoin]
    .sort(
      (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h
    )
    .slice(0, 5);

  const topVolume = [...allCoin]
    .sort((a, b) => b.total_volume - a.total_volume)
    .slice(0, 5);

  const renderCoinCard = (coin) => (
    <Link to={`/coin/${coin.id}`} key={coin.id} className="coin-card">
      <div className="coin-card-header">
        <img src={coin.image} alt={coin.name} />
        <div>
          <h4>{coin.name}</h4>
          <p>{coin.symbol.toUpperCase()}</p>
        </div>
      </div>
      <div className="coin-card-price">
        <p className="price">
          {currency.symbol} {coin.current_price.toLocaleString()}
        </p>
        <p className={coin.price_change_percentage_24h > 0 ? "green" : "red"}>
          {coin.price_change_percentage_24h > 0 ? "+" : ""}
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
    </Link>
  );

  return (
    <div className="market-overview">
      <div className="market-header">
        <h1>Market Overview</h1>
        <p>Real-time cryptocurrency market data and trends</p>
      </div>

      <div className="market-stats">
        <div className="stats-grid">
          <div className="stat-card">
            <p className="stat-label">Total Market Cap</p>
            <h3>
              {currency.symbol}{" "}
              {allCoin
                .reduce((sum, coin) => sum + coin.market_cap, 0)
                .toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </h3>
          </div>
          <div className="stat-card">
            <p className="stat-label">24h Trading Volume</p>
            <h3>
              {currency.symbol}{" "}
              {allCoin
                .reduce((sum, coin) => sum + coin.total_volume, 0)
                .toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </h3>
          </div>
          <div className="stat-card">
            <p className="stat-label">Active Cryptocurrencies</p>
            <h3>{allCoin.length.toLocaleString()}</h3>
          </div>
          <div className="stat-card">
            <p className="stat-label">Bitcoin Dominance</p>
            <h3>
              {(
                (allCoin.find((c) => c.id === "bitcoin")?.market_cap /
                  allCoin.reduce((sum, coin) => sum + coin.market_cap, 0)) *
                100
              ).toFixed(2)}
              %
            </h3>
          </div>
        </div>
      </div>

      <div className="market-content">
        <div className="market-section">
          <div className="section-header">
            <h2>🔥 Top Gainers (24h)</h2>
          </div>
          <div className="coins-grid">{topGainers.map(renderCoinCard)}</div>
        </div>

        <div className="market-section">
          <div className="section-header">
            <h2>📉 Top Losers (24h)</h2>
          </div>
          <div className="coins-grid">{topLosers.map(renderCoinCard)}</div>
        </div>

        <div className="market-section">
          <div className="section-header">
            <h2>💰 Highest Volume</h2>
          </div>
          <div className="coins-grid">{topVolume.map(renderCoinCard)}</div>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;
