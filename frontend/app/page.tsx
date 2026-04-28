export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-tight">
          Portfolio Risk Intelligence
        </h1>
        <button className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl leading-tight">
          AI-Powered Portfolio Risk &
          <span className="text-gray-400"> Investment Intelligence</span>
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl">
          Optimize investments, forecast returns, and unlock institutional-grade
          financial insights with advanced analytics.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
            Launch Dashboard
          </button>

          <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Metrics Preview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-24">
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          <h3 className="text-gray-400">Portfolio Risk Score</h3>
          <p className="text-3xl font-bold mt-2">Low Risk</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          <h3 className="text-gray-400">Projected Return</h3>
          <p className="text-3xl font-bold mt-2">+18.4%</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          <h3 className="text-gray-400">Sharpe Ratio</h3>
          <p className="text-3xl font-bold mt-2">2.31</p>
        </div>
      </section>
    </main>
  );
}