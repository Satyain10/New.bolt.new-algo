import React from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart as ChartIcon,
  BarChart2,
  Activity,
  PlayCircle,
  Database,
  Briefcase,
  Menu
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: BarChart2, label: 'Strategy Builder', path: '/strategy-builder' },
    { icon: ChartIcon, label: 'Backtesting', path: '/backtesting' },
    { icon: Activity, label: 'Live Trading', path: '/live-trading' },
    { icon: PlayCircle, label: 'Paper Trading', path: '/paper-trading' },
    { icon: Database, label: 'Market Data', path: '/market-data' },
    { icon: Briefcase, label: 'My Portfolio', path: '/portfolio' },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-800">Dashboard</span>
          <Menu className="h-6 w-6 text-gray-500 cursor-pointer md:hidden" />
        </div>
      </div>
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-2xl font-semibold text-gray-900">Welcome to Satya Quant</h1>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Dashboard cards would go here */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900">Active Strategies</h3>
              <p className="mt-2 text-3xl font-semibold text-blue-600">5</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900">Today's P&L</h3>
              <p className="mt-2 text-3xl font-semibold text-green-600">+$1,234.56</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900">Open Positions</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;