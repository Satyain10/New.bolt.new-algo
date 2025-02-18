import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dummyData = [
  { time: '09:30', AAPL: 150.23, GOOGL: 2750.12, MSFT: 310.45 },
  { time: '10:00', AAPL: 151.45, GOOGL: 2755.67, MSFT: 312.78 },
  { time: '10:30', AAPL: 152.67, GOOGL: 2760.89, MSFT: 315.23 },
  { time: '11:00', AAPL: 151.89, GOOGL: 2758.34, MSFT: 314.56 },
  { time: '11:30', AAPL: 153.12, GOOGL: 2765.78, MSFT: 316.89 },
  { time: '12:00', AAPL: 154.34, GOOGL: 2770.45, MSFT: 318.90 },
];

const MarketAnalytics = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Market Analytics</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Market Overview */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Market Overview</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dummyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="AAPL" stroke="#8884d8" />
                  <Line type="monotone" dataKey="GOOGL" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="MSFT" stroke="#ffc658" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Market Movers */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Market Movers</h2>
            <div className="space-y-4">
              {[
                { symbol: 'AAPL', name: 'Apple Inc.', change: '+2.45%', price: '$154.34' },
                { symbol: 'GOOGL', name: 'Alphabet Inc.', change: '+1.78%', price: '$2,770.45' },
                { symbol: 'MSFT', name: 'Microsoft Corp.', change: '+1.23%', price: '$318.90' },
                { symbol: 'AMZN', name: 'Amazon.com Inc.', change: '+0.89%', price: '$3,456.78' },
                { symbol: 'TSLA', name: 'Tesla Inc.', change: '-0.45%', price: '$875.34' },
              ].map((stock, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">{stock.symbol}</h3>
                    <p className="text-sm text-gray-500">{stock.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{stock.price}</p>
                    <p className={`text-sm ${stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stock.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalytics;