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

from fastapi import Query

@app.get("/portfolio")
def analyze_portfolio(
    tickers: str = Query(...),
    weights: str = Query(...)
):
    ticker_list = tickers.split(",")
    weight_list = np.array(
        [float(w) / 100 for w in weights.split(",")]
    )

    data = yf.download(
        ticker_list,
        period="1y",
        auto_adjust=True
    )["Close"]

    returns = data.pct_change().dropna()

    mean_returns = returns.mean() * 252
    cov_matrix = returns.cov() * 252

    portfolio_return = float(
        np.sum(mean_returns * weight_list)
    )

    portfolio_volatility = float(
        np.sqrt(
            np.dot(
                weight_list.T,
                np.dot(cov_matrix, weight_list)
            )
        )
    )

    sharpe_ratio = (
        portfolio_return / portfolio_volatility
        if portfolio_volatility != 0
        else 0
    )

    portfolio_daily_returns = returns.dot(weight_list)

    var_95 = float(
        np.percentile(portfolio_daily_returns, 5)
    )

    return {
        "expected_return": round(portfolio_return * 100, 2),
        "volatility": round(portfolio_volatility * 100, 2),
        "sharpe_ratio": round(sharpe_ratio, 2),
        "value_at_risk": round(var_95 * 100, 2),
    }