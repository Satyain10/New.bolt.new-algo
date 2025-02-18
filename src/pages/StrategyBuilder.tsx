import React, { useState } from 'react';
import { Save, Plus, X } from 'lucide-react';

const StrategyBuilder = () => {
  const [conditions, setConditions] = useState([{ type: 'entry', indicator: '', operator: '', value: '' }]);

  const addCondition = () => {
    setConditions([...conditions, { type: 'entry', indicator: '', operator: '', value: '' }]);
  };

  const removeCondition = (index: number) => {
    setConditions(conditions.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Strategy Builder</h1>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Strategy Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter strategy name"
          />
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Trading Conditions</h2>
          
          {conditions.map((condition, index) => (
            <div key={index} className="flex items-center gap-4 mb-4">
              <select
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={condition.type}
              >
                <option value="entry">Entry</option>
                <option value="exit">Exit</option>
                <option value="stop-loss">Stop Loss</option>
                <option value="take-profit">Take Profit</option>
              </select>

              <select
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={condition.indicator}
              >
                <option value="">Select Indicator</option>
                <option value="price">Price</option>
                <option value="ma">Moving Average</option>
                <option value="rsi">RSI</option>
                <option value="macd">MACD</option>
              </select>

              <select
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={condition.operator}
              >
                <option value="">Select Operator</option>
                <option value="greater">Greater Than</option>
                <option value="less">Less Than</option>
                <option value="equal">Equals</option>
                <option value="crosses-above">Crosses Above</option>
                <option value="crosses-below">Crosses Below</option>
              </select>

              <input
                type="text"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Value"
                value={condition.value}
              />

              <button
                onClick={() => removeCondition(index)}
                className="p-2 text-red-600 hover:text-red-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}

          <button
            onClick={addCondition}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <Plus className="h-5 w-5 mr-1" />
            Add Condition
          </button>
        </div>

        <div className="flex justify-end">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <Save className="h-5 w-5 mr-2" />
            Save Strategy
          </button>
        </div>
      </div>
    </div>
  );
};

export default StrategyBuilder;