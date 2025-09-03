'use client';

import dynamic from 'next/dynamic';

// Type for the data points
interface DataPoint {
  name: string;
  revenue: number;
}

interface RevenueChartProps {
  data: DataPoint[];
}

// Create a client-side only chart component
const RevenueChartClient = ({ data }: RevenueChartProps) => {
  const Chart = dynamic(
    () => import('recharts').then((mod) => {
      const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } = mod;
      
      return function ChartComponent({ data }: { data: DataPoint[] }) {
        return (
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  tickFormatter={(value: number) => `$${value.toLocaleString()}`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    borderRadius: '0.5rem',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                    padding: '0.5rem',
                    fontSize: '0.875rem'
                  }}
                  formatter={(value: unknown) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
                  labelStyle={{ color: '#4B5563', fontWeight: 500 }}
                />
                <Bar 
                  dataKey="revenue" 
                  fill="#3B82F6" 
                  radius={[4, 4, 0, 0]}
                  barSize={24}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      };
    }),
    { 
      ssr: false,
      loading: () => <div className="h-[300px] flex items-center justify-center">Loading chart...</div> 
    }
  );

  return <Chart data={data} />;
};

export { RevenueChartClient as RevenueChart };
