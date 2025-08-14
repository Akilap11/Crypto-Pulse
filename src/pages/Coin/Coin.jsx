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

  return (
    <div className="coin">
      <div className="coin-name">
        <img src={coinData.image?.large} alt={coinData.name} />
        <p>
          <b>
            {coinData.name} ({coinData.symbol})
          </b>
        </p>
      </div>

      <div className="coin-chart">
        <LineChart historicalData={historicalData} />
      </div>

      <div className="coin-info">
        <ul>
          <li>Crypto Market Rank</li>
          <li>{coinData.market_cap_rank ?? "N/A"}</li>
        </ul>
        <ul>
          <li>Current Price</li>
          <li>
            {currency.symbol}
            {coinData.market_data?.current_price?.[
              currency.name.toLowerCase()
            ]?.toLocaleString() ?? "N/A"}
          </li>
        </ul>
        <ul>
          <li>Market Cap</li>
          <li>
            {currency.symbol}
            {coinData.market_data?.market_cap?.[
              currency.name.toLowerCase()
            ]?.toLocaleString() ?? "N/A"}
          </li>
        </ul>
        <ul>
          <li>24 Hour high</li>
          <li>
            {currency.symbol}
            {coinData.market_data?.high_24h?.[currency.name.toLowerCase()]?.toLocaleString() ?? "N/A"}
          </li>
        </ul>
        <ul>
          <li>24 Hour low</li>
          <li>
            {currency.symbol}
            {coinData.market_data?.low_24h?.[currency.name.toLowerCase()]?.toLocaleString() ?? "N/A"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Coin;
