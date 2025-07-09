import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";

const Coin = () => {
  const { coinId } = useParams();

  const [coinData, setCoinData] = useState({});
  const {currency} = useContext(CoinContext);

  useEffect(() => {
    const fetchCoinData = async () => {
      const options = { method: "GET", headers: { accept: "application/json" } };

      fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
        .then((res) => res.json())
        .then((res) => setCoinData(res))
        .catch((err) => console.error(err));
    };

    fetchCoinData();
  }, [currency, coinId]);

  if(coinData){
return (
    <div className="coin">
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image?.large} alt={coinData.name} />
          <p><b>{coinData.name} ({coinData.symbol})</b></p>
        </div>
      </div>
      
    </div>
  );
  }
  else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
  
};

export default Coin;
