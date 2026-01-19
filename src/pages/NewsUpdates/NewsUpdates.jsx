import React from "react";
import "./NewsUpdates.css";

const News = () => {
  const newsData = [
    {
      id: 1,
      title: "Bitcoin Reaches New All-Time High",
      description:
        "Bitcoin has surpassed its previous record, reaching unprecedented levels as institutional adoption continues to grow.",
      date: "2 hours ago",
      category: "Market",
      image:
        "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400",
    },
    {
      id: 2,
      title: "Ethereum 2.0 Upgrade Shows Strong Performance",
      description:
        "The latest Ethereum upgrade demonstrates significant improvements in transaction speed and energy efficiency.",
      date: "5 hours ago",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400",
    },
    {
      id: 3,
      title: "Major Banks Announce Crypto Trading Services",
      description:
        "Leading financial institutions are expanding their cryptocurrency offerings to meet growing customer demand.",
      date: "1 day ago",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400",
    },
    {
      id: 4,
      title: "DeFi Platforms See Record Growth",
      description:
        "Decentralized finance applications continue to attract billions in total value locked across multiple protocols.",
      date: "1 day ago",
      category: "DeFi",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400",
    },
    {
      id: 5,
      title: "New Regulations Aim to Protect Investors",
      description:
        "Government agencies introduce comprehensive framework for cryptocurrency trading and investment protection.",
      date: "2 days ago",
      category: "Regulation",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400",
    },
    {
      id: 6,
      title: "NFT Market Shows Resilience",
      description:
        "Non-fungible tokens continue to drive innovation in digital art, gaming, and collectibles markets.",
      date: "3 days ago",
      category: "NFT",
      image:
        "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=400",
    },
  ];

  return (
    <div className="news">
      <div className="news-header">
        <h1>Crypto News & Updates</h1>
        <p>
          Stay informed with the latest cryptocurrency news and market updates
        </p>
      </div>

      <div className="news-content">
        <div className="featured-news">
          <div className="featured-card">
            <img src={newsData[0].image} alt={newsData[0].title} />
            <div className="featured-content">
              <span className="category">{newsData[0].category}</span>
              <h2>{newsData[0].title}</h2>
              <p>{newsData[0].description}</p>
              <div className="news-meta">
                <span>{newsData[0].date}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="news-grid">
          {newsData.slice(1).map((news) => (
            <div key={news.id} className="news-card">
              <img src={news.image} alt={news.title} />
              <div className="news-card-content">
                <span className="category">{news.category}</span>
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <div className="news-meta">
                  <span>{news.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
