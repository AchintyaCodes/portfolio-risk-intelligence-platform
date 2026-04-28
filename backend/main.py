from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf
import pandas as pd
import numpy as np

app = FastAPI()

# Enable frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Portfolio Risk API running"}

@app.get("/portfolio")
def analyze_portfolio():
    tickers = ["AAPL", "TSLA", "MSFT", "NVDA"]

    data = yf.download(tickers, period="1y")["Close"]

    returns = data.pct_change().dropna()

    mean_returns = returns.mean() * 252
    cov_matrix = returns.cov() * 252

    weights = np.array([0.35, 0.25, 0.20, 0.20])

    portfolio_return = np.sum(mean_returns * weights)
    portfolio_volatility = np.sqrt(
        np.dot(weights.T, np.dot(cov_matrix, weights))
    )

    sharpe_ratio = portfolio_return / portfolio_volatility

    var_95 = np.percentile(returns.dot(weights), 5)

    return {
        "expected_return": round(portfolio_return * 100, 2),
        "volatility": round(portfolio_volatility * 100, 2),
        "sharpe_ratio": round(sharpe_ratio, 2),
        "value_at_risk": round(var_95 * 100, 2),
    }