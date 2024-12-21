import { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const PriceChart = () => {
  const [timeframe, setTimeframe] = useState('1D');

  // Sample price data - replace with actual API data
  const priceData = [
    { time: '00:00', price: 0.08 },
    { time: '04:00', price: 0.085 },
    { time: '08:00', price: 0.082 },
    { time: '12:00', price: 0.095 },
    { time: '16:00', price: 0.09 },
    { time: '20:00', price: 0.1 },
    { time: '24:00', price: 0.098 }
  ];

  const timeframes = ['1D', '1W', '1M', '1Y'];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-[#7F664F]">Price Chart</h3>
        <div className="flex gap-2">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 rounded-lg text-sm ${
                timeframe === tf
                  ? 'bg-[#7F664F] text-[#FCF4D7]'
                  : 'text-[#7F664F] hover:bg-[#A4AD89]/20'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={priceData}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7F664F" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#7F664F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#A4AD89" 
              opacity={0.2} 
            />
            <XAxis 
              dataKey="time" 
              stroke="#7F664F" 
              tick={{ fill: '#7F664F' }} 
            />
            <YAxis 
              stroke="#7F664F" 
              tick={{ fill: '#7F664F' }}
              domain={['dataMin - 0.01', 'dataMax + 0.01']}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FCF4D7',
                border: '1px solid #A4AD89',
                borderRadius: '8px'
              }}
              itemStyle={{ color: '#7F664F' }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#7F664F"
              fillOpacity={1}
              fill="url(#colorPrice)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between text-[#7F664F] text-sm">
        <div>
          <p>24h Low</p>
          <p className="font-semibold">$0.08</p>
        </div>
        <div>
          <p>24h High</p>
          <p className="font-semibold">$0.10</p>
        </div>
        <div>
          <p>24h Change</p>
          <p className="font-semibold text-green-600">+22.5%</p>
        </div>
      </div>
    </div>
  );
};

export default PriceChart;