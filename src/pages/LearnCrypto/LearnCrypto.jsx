import React, { useState } from "react";
import "./LearnCrypto.css";

const Learn = () => {
  const [activeTab, setActiveTab] = useState("beginner");

  const educationalContent = {
    beginner: [
      {
        title: "What is Cryptocurrency?",
        description:
          "Learn the basics of digital currencies and how they work using blockchain technology.",
        icon: "💰",
      },
      {
        title: "How to Buy Crypto",
        description:
          "Step-by-step guide on purchasing your first cryptocurrency safely and securely.",
        icon: "🛒",
      },
      {
        title: "Understanding Wallets",
        description:
          "Explore different types of crypto wallets and how to keep your assets secure.",
        icon: "👛",
      },
      {
        title: "Blockchain Basics",
        description:
          "Understand the technology that powers cryptocurrencies and decentralized systems.",
        icon: "⛓️",
      },
    ],
    intermediate: [
      {
        title: "Trading Strategies",
        description:
          "Learn effective trading techniques and how to analyze market trends.",
        icon: "📊",
      },
      {
        title: "Technical Analysis",
        description:
          "Master chart patterns, indicators, and technical analysis tools.",
        icon: "📈",
      },
      {
        title: "DeFi Explained",
        description:
          "Discover decentralized finance platforms and how to use them.",
        icon: "🏦",
      },
      {
        title: "Staking & Yield Farming",
        description:
          "Learn how to earn passive income through staking and liquidity provision.",
        icon: "🌾",
      },
    ],
    advanced: [
      {
        title: "Smart Contracts",
        description:
          "Deep dive into programmable contracts and their applications.",
        icon: "📝",
      },
      {
        title: "Layer 2 Solutions",
        description:
          "Understand scaling solutions and how they improve blockchain performance.",
        icon: "🚀",
      },
      {
        title: "Token Economics",
        description:
          "Study the economic models behind successful cryptocurrency projects.",
        icon: "💎",
      },
      {
        title: "Security Best Practices",
        description:
          "Advanced security measures to protect your crypto investments.",
        icon: "🔒",
      },
    ],
  };

  const glossary = [
    {
      term: "Blockchain",
      definition:
        "A distributed ledger technology that records transactions across multiple computers.",
    },
    { term: "Altcoin", definition: "Any cryptocurrency other than Bitcoin." },
    {
      term: "HODL",
      definition:
        "Hold On for Dear Life - a strategy of holding crypto long-term.",
    },
    {
      term: "Market Cap",
      definition:
        "Total value of a cryptocurrency (price × circulating supply).",
    },
    {
      term: "DeFi",
      definition:
        "Decentralized Finance - financial services without traditional intermediaries.",
    },
    {
      term: "Gas Fee",
      definition:
        "Transaction fees paid to process operations on a blockchain.",
    },
  ];

  return (
    <div className="learn">
      <div className="learn-header">
        <h1>Learn About Crypto</h1>
        <p>Master cryptocurrency from basics to advanced concepts</p>
      </div>

      <div className="learn-content">
        <div className="tabs">
          <button
            className={activeTab === "beginner" ? "tab active" : "tab"}
            onClick={() => setActiveTab("beginner")}
          >
            Beginner
          </button>
          <button
            className={activeTab === "intermediate" ? "tab active" : "tab"}
            onClick={() => setActiveTab("intermediate")}
          >
            Intermediate
          </button>
          <button
            className={activeTab === "advanced" ? "tab active" : "tab"}
            onClick={() => setActiveTab("advanced")}
          >
            Advanced
          </button>
        </div>

        <div className="courses-grid">
          {educationalContent[activeTab].map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="start-btn">Start Learning</button>
            </div>
          ))}
        </div>

        <div className="glossary-section">
          <h2>Crypto Glossary</h2>
          <p className="glossary-intro">
            Essential terms every crypto enthusiast should know
          </p>
          <div className="glossary-grid">
            {glossary.map((item, index) => (
              <div key={index} className="glossary-card">
                <h4>{item.term}</h4>
                <p>{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
