"use client";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-10">
      <h1 className="text-5xl font-bold mb-8">
        Portfolio Analytics Dashboard
      </h1>

      {/* Portfolio Input */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Portfolio Configuration
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Ticker (e.g. AAPL)"
            className="p-4 rounded-xl bg-black border border-white/10"
          />

          <input
            type="number"
            placeholder="Weight %"
            className="p-4 rounded-xl bg-black border border-white/10"
          />

          <button className="rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
            Add Asset
          </button>
        </div>
      </section>

      {/* Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-gray-400">Expected Return</h3>
          <p className="text-3xl font-bold mt-2">18.4%</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-gray-400">Volatility</h3>
          <p className="text-3xl font-bold mt-2">9.2%</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-gray-400">Sharpe Ratio</h3>
          <p className="text-3xl font-bold mt-2">2.31</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-gray-400">Value at Risk</h3>
          <p className="text-3xl font-bold mt-2">-4.7%</p>
        </div>
      </section>

      {/* Chart Placeholder */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6">
          Portfolio Performance Overview
        </h2>

        <div className="h-96 flex items-center justify-center text-gray-500 border border-dashed border-white/10 rounded-xl">
          Chart Integration Coming Next
        </div>
      </section>
    </main>
  );
}