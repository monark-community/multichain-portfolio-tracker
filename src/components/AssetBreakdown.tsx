
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Ethereum", value: 45, color: "#627EEA" },
  { name: "Bitcoin", value: 25, color: "#F7931A" },
  { name: "Polygon", value: 15, color: "#8247E5" },
  { name: "BSC", value: 10, color: "#F3BA2F" },
  { name: "Others", value: 5, color: "#64748B" },
];

const assets = [
  { symbol: "ETH", name: "Ethereum", balance: "5.234", value: "$9,876.54", chain: "Ethereum" },
  { symbol: "BTC", name: "Bitcoin", balance: "0.157", value: "$5,432.10", chain: "Bitcoin" },
  { symbol: "MATIC", name: "Polygon", balance: "1,234.56", value: "$3,210.98", chain: "Polygon" },
  { symbol: "BNB", name: "BNB", balance: "8.91", value: "$2,156.78", chain: "BSC" },
];

export function AssetBreakdown() {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Asset Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-3">
          {assets.map((asset, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                  {asset.symbol.slice(0, 2)}
                </div>
                <div>
                  <p className="font-medium text-white">{asset.name}</p>
                  <p className="text-sm text-slate-400">{asset.chain}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-white">{asset.value}</p>
                <p className="text-sm text-slate-400">{asset.balance} {asset.symbol}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
