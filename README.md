# Portfolio Risk Intelligence Platform

Full-stack quantitative finance platform featuring Monte Carlo simulation, Markowitz efficient frontier optimization, correlation analysis, historical backtesting, stress testing, and institutional risk metrics (VaR, CVaR, max drawdown, beta).

**Tech Stack:** FastAPI (Python) + Next.js 16 (TypeScript) + yfinance + scipy + Recharts

---

## Features

- **8 Risk Metrics** — Expected return, volatility, Sharpe ratio, VaR 95/99, CVaR, max drawdown, beta vs SPY
- **Correlation Heatmap** — Pairwise correlation matrix for diversification analysis
- **Historical Backtesting** — 1-year equity curve vs SPY with drawdown analysis
- **Stress Testing** — 6 historical crisis scenarios (2008, COVID, rate shocks, etc.)
- **Monte Carlo Simulation** — 200 paths, 252-day horizon with percentile breakdowns
- **Efficient Frontier** — MPT-based optimal risk/return curve
- **Portfolio Optimizer** — Scipy max-Sharpe optimization with 5–60% per-asset bounds
- **AI Insights** — Dynamic insights generated from live metrics

---

## Local Development

### Backend (FastAPI)

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Mac/Linux
pip install fastapi uvicorn yfinance pandas numpy scipy
uvicorn main:app --reload
```

Backend runs on `http://127.0.0.1:8000`

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`

---

## Deployment

### Frontend → Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo → Set root directory to `frontend`
4. Deploy

### Backend → Railway

1. Go to [railway.app](https://railway.app) → New Project
2. Deploy from GitHub repo → Set root directory to `backend`
3. Set start command: `uvicorn main:app --host 0.0.0.0 --port 8000`
4. Copy the Railway URL

### Update API URL

In `frontend/app/dashboard/page.tsx`, change:

```typescript
const API = "http://127.0.0.1:8000";
```

to:

```typescript
const API = "https://your-railway-url.railway.app";
```

Then redeploy the frontend.

---

## Resume Bullet

> *"Built a full-stack quantitative finance platform featuring Monte Carlo simulation (200 paths, 252-day horizon), Markowitz efficient frontier optimization via scipy, correlation analysis, historical backtesting, stress testing (6 crisis scenarios), and institutional risk metrics (VaR, CVaR, max drawdown, beta). FastAPI backend with live yfinance data, Next.js 16 frontend with Recharts visualizations."*

---

## API Endpoints

- `GET /portfolio` — Portfolio metrics (return, vol, Sharpe, VaR, CVaR, drawdown, beta, per-asset breakdown)
- `GET /monte-carlo` — Monte Carlo simulation (200 paths, percentiles)
- `GET /optimize` — Max-Sharpe portfolio optimization
- `GET /efficient-frontier` — MPT frontier curve
- `GET /insights` — AI-generated investment insights
- `GET /correlation` — Correlation matrix
- `GET /backtest` — Historical equity curve vs SPY
- `GET /stress-test` — 6 crisis scenario simulations

---

## License

MIT
