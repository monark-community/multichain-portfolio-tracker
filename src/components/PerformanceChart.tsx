
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const performanceData = [
  { date: "Jan", value: 15000 },
  { date: "Feb", value: 16500 },
  { date: "Mar", value: 14800 },
  { date: "Apr", value: 18200 },
  { date: "May", value: 19800 },
  { date: "Jun", value: 21479 },
];

export function PerformanceChart() {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Portfolio Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="date" 
                stroke="#64748B"
                fontSize={12}
              />
              <YAxis 
                stroke="#64748B"
                fontSize={12}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-slate-400">7d Change</p>
            <p className="text-lg font-semibold text-green-400">+8.2%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-slate-400">30d Change</p>
            <p className="text-lg font-semibold text-green-400">+15.7%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-slate-400">All Time</p>
            <p className="text-lg font-semibold text-green-400">+43.2%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
