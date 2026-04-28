"use client";

import { motion } from "framer-motion";
import Link from "next/link"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Portfolio Risk Intelligence
        </h1>

        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button>

        <Link href="/dashboard">
          <button className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300">
            Get Started
          </button>
        </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col items-center justify-center text-center px-6 py-32"
      >
        <h2 className="text-5xl md:text-7xl font-bold max-w-6xl leading-tight">
          AI-Powered Portfolio Risk &
          <span className="text-gray-400"> Investment Intelligence</span>
        </h2>

        <p className="mt-8 text-lg md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
          Optimize investments, forecast returns, and unlock institutional-grade
          financial insights with real-time analytics, advanced simulations,
          and intelligent recommendations.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Link href="/dashboard">
          <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300 shadow-lg">
            Launch Dashboard
          </button>
        </Link>

          <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition duration-300">
            Explore Features
          </button>
        </div>
      </motion.section>

      {/* Metrics Preview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-24 max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
        >
          <h3 className="text-gray-400 text-lg">Portfolio Risk Score</h3>
          <p className="text-4xl font-bold mt-3">Low Risk</p>
          <p className="text-sm text-gray-500 mt-2">
            AI-calculated diversified portfolio assessment
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
        >
          <h3 className="text-gray-400 text-lg">Projected Return</h3>
          <p className="text-4xl font-bold mt-3">+18.4%</p>
          <p className="text-sm text-gray-500 mt-2">
            Forecasted annualized return using predictive modeling
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
        >
          <h3 className="text-gray-400 text-lg">Sharpe Ratio</h3>
          <p className="text-4xl font-bold mt-3">2.31</p>
          <p className="text-sm text-gray-500 mt-2">
            Institutional-grade risk-adjusted performance metric
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold">
            Built for Strategic Investors
          </h3>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
            Harness AI, quantitative finance, and advanced portfolio science
            to make smarter, data-driven investment decisions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
              <h4 className="text-2xl font-semibold">
                Monte Carlo Simulations
              </h4>
              <p className="mt-3 text-gray-400">
                Forecast thousands of future market scenarios with advanced
                probabilistic modeling.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
              <h4 className="text-2xl font-semibold">
                Portfolio Optimization
              </h4>
              <p className="mt-3 text-gray-400">
                Maximize returns and minimize risk using Modern Portfolio
                Theory and AI.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
              <h4 className="text-2xl font-semibold">
                Real-Time Intelligence
              </h4>
              <p className="mt-3 text-gray-400">
                Live market analytics, actionable insights, and institutional
                financial dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-white/10 text-gray-500">
        © 2026 Portfolio Risk Intelligence Platform — Engineered for elite
        financial decision-making.
      </footer>
    </main>
  );
}