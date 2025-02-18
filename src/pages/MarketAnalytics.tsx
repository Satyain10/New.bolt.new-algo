import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Alpha Vantage API Key (Get yours from https://www.alphavantage.co/)
const API_KEY = "IU62VTIB8QXZ4LOL";  
const SYMBOL = "AAPL"; // You can change this to another stock

const MarketAnalytics = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${SYMBOL}&interval=5min&apikey=${API_KEY}`
        );
        
        const rawData = response.data["Time Series (5min)"];
        const formattedData = Object.keys(rawData).map((timestamp) => ({
          time: timestamp.substring(11, 16), // Extract only the time part
          price: parseFloat(rawData[timestamp]["1. open"]),
        }));
        
        setMarketData(formattedData);
      } catch (error) {
        console.error("Error fetching market data", error);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Market Analytics</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Stock Price Chart ({SYMBOL})</h2>

          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis domain={["auto", "auto"]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalytics;
