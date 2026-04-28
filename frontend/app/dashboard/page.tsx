"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const performanceData = [
  { month: "Jan", value: 10000 },
  { month: "Feb", value: 11200 },
  { month: "Mar", value: 10800 },
  { month: "Apr", value: 12500 },
  { month: "May", value: 13800 },
  { month: "Jun", value: 15400 },
];

const allocationData = [
  { name: "AAPL", value: 35 },
  { name: "TSLA", value: 25 },
  { name: "MSFT", value: 20 },
  { name: "NVDA", value: 20 },
];

const COLORS = ["#ffffff", "#8884d8", "#82ca9d", "#ffc658"];

export default function Dashboard() {
  const [portfolioMetrics, setPortfolioMetrics] = useState({
    expected_return: 0,
    volatility: 0,
    sharpe_ratio: 0,
    value_at_risk: 0,
  });

  const [tickers, setTickers] = useState("AAPL,TSLA,MSFT,NVDA");
  const [weights, setWeights] = useState("35,25,20,20");

  const fetchPortfolioData = () => {
    axios
      .get("http://127.0.0.1:8000/portfolio", {
        params: {
          tickers,
          weights,
        },
      })
      .then((response) => {
        setPortfolioMetrics(response.data);
      })
      .catch((error) => {
        console.error("Error fetching portfolio data:", error);
      });
  };

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white px-8 py-10">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Portfolio Analytics Dashboard
        </h1>

        <p className="mt-4 text-lg text-gray-400 max-w-3xl">
          Monitor portfolio performance, optimize allocation, and leverage
          AI-powered financial intelligence for strategic investment decisions.
        </p>
      </section>

      {/* Portfolio Input */}
      <section className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12 backdrop-blur-xl shadow-xl">
        <h2 className="text-3xl font-semibold mb-6">
          Portfolio Configuration
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            value={tickers}
            onChange={(e) => setTickers(e.target.value)}
            placeholder="Tickers (e.g. AAPL,TSLA,MSFT)"
            className="p-4 rounded-2xl bg-black border border-white/10 focus:outline-none focus:border-white/30"
          />

          <input
            type="text"
            value={weights}
            onChange={(e) => setWeights(e.target.value)}
            placeholder="Weights (e.g. 40,30,30)"
            className="p-4 rounded-2xl bg-black border border-white/10 focus:outline-none focus:border-white/30"
          />

          <button
            onClick={fetchPortfolioData}
            className="rounded-2xl bg-white text-black font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Analyze Portfolio
          </button>
        </div>
      </section>

      {/* Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
          <h3 className="text-gray-400">Expected Return</h3>
          <p className="text-4xl font-bold mt-3">
            {portfolioMetrics.expected_return}%
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
          <h3 className="text-gray-400">Volatility</h3>
          <p className="text-4xl font-bold mt-3">
            {portfolioMetrics.volatility}%
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
          <h3 className="text-gray-400">Sharpe Ratio</h3>
          <p className="text-4xl font-bold mt-3">
            {portfolioMetrics.sharpe_ratio}
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
          <h3 className="text-gray-400">Value at Risk</h3>
          <p className="text-4xl font-bold mt-3">
            {portfolioMetrics.value_at_risk}%
          </p>
        </div>
      </section>

      {/* Charts */}
      <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-xl mb-12">
        <h2 className="text-3xl font-semibold mb-8">
          Portfolio Performance Overview
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Portfolio Growth */}
          <div className="h-96 bg-black/30 rounded-3xl p-6 border border-white/10">
            <h3 className="text-2xl font-semibold mb-4">
              Portfolio Growth
            </h3>

            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={performanceData}>
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#ffffff"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Asset Allocation */}
          <div className="h-96 bg-black/30 rounded-3xl p-6 border border-white/10">
            <h3 className="text-2xl font-semibold mb-4">
              Asset Allocation
            </h3>

            <ResponsiveContainer width="100%" height="85%">
              <PieChart>
                <Pie
                  data={allocationData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  label
                >
                  {allocationData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* AI Insights */}
      <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-xl">
        <h2 className="text-3xl font-semibold mb-6">
          AI Investment Insights
        </h2>

        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
            • Portfolio diversification is strong, though TSLA exposure may
            slightly increase volatility.
          </p>

          <p>
            • Rebalancing 5–10% into lower-beta assets may improve Sharpe ratio.
          </p>

          <p>
            • Current projected return remains above benchmark with acceptable
            institutional-grade risk parameters.
          </p>
        </div>
      </section>
    </main>
  );
}