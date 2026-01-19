import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);

  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const options = {
          method: "GET",
          headers: { accept: "application/json" },
        };

        const [coinRes, historyRes] = await Promise.all([
          fetch(
            `https://api.coingecko.com/api/v3/coins/${coinId}`,
            options
          ).then((res) => res.json()),
          fetch(
            `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
            options
          ).then((res) => res.json()),
        ]);

        setCoinData(coinRes);
        setHistoricalData(historyRes);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currency, coinId]);

  if (loading || !coinData?.id || !historicalData?.prices) {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }

  const priceChange24h = coinData.market_data?.price_change_percentage_24h;
  const isPriceUp = priceChange24h > 0;

  return (
    <div className="coin">
      <div className="coin-header">
        <div className="coin-name">
          <img src={coinData.image?.large} alt={coinData.name} />
          <div className="coin-title">
            <h1>{coinData.name}</h1>
            <span className="coin-symbol">
              {coinData.symbol?.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="coin-price-section">
          <div className="current-price">
            <span className="price-label">Current Price</span>
            <h2>
              {currency.symbol}
              {coinData.market_data?.current_price?.[
                currency.name.toLowerCase()
              ]?.toLocaleString() ?? "N/A"}
            </h2>
          </div>
          {priceChange24h && (
            <div
              className={`price-change ${isPriceUp ? "positive" : "negative"}`}
            >
              <span>{isPriceUp ? "▲" : "▼"}</span>
              {Math.abs(priceChange24h).toFixed(2)}%
            </div>
          )}
        </div>
      </div>

      <div className="coin-chart">
        <h3>Price Chart (10 Days)</h3>
        <LineChart historicalData={historicalData} />
      </div>

      <div className="coin-stats">
        <h3>Market Statistics</h3>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-label">Market Cap Rank</span>
            <span className="stat-value">
              #{coinData.market_cap_rank ?? "N/A"}
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-label">Market Cap</span>
            <span className="stat-value">
              {currency.symbol}
              {coinData.market_data?.market_cap?.[
                currency.name.toLowerCase()
              ]?.toLocaleString() ?? "N/A"}
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-label">24h Trading Volume</span>
            <span className="stat-value">
              {currency.symbol}
              {coinData.market_data?.total_volume?.[
                currency.name.toLowerCase()
              ]?.toLocaleString() ?? "N/A"}
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-label">Circulating Supply</span>
            <span className="stat-value">
              {coinData.market_data?.circulating_supply?.toLocaleString() ??
                "N/A"}
            </span>
          </div>

          <div className="stat-card highlight">
            <span className="stat-label">24h High</span>
            <span className="stat-value high">
              {currency.symbol}
              {coinData.market_data?.high_24h?.[
                currency.name.toLowerCase()
              ]?.toLocaleString() ?? "N/A"}
            </span>
          </div>

          <div className="stat-card highlight">
            <span className="stat-label">24h Low</span>
            <span className="stat-value low">
              {currency.symbol}
              {coinData.market_data?.low_24h?.[
                currency.name.toLowerCase()
              ]?.toLocaleString() ?? "N/A"}
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-label">All-Time High</span>
            <span className="stat-value">
              {currency.symbol}
              {coinData.market_data?.ath?.[
                currency.name.toLowerCase()
              ]?.toLocaleString() ?? "N/A"}
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-label">All-Time Low</span>
            <span className="stat-value">
              {currency.symbol}
              {coinData.market_data?.atl?.[
                currency.name.toLowerCase()
              ]?.toLocaleString() ?? "N/A"}
            </span>
          </div>
        </div>
      </div>

      {coinData.description?.en && (
        <div className="coin-description">
          <h3>About {coinData.name}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html:
                coinData.description.en.split(". ").slice(0, 3).join(". ") +
                ".",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Coin;
