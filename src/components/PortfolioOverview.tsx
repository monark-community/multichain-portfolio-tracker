
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

export function PortfolioOverview() {
  const portfolioData = {
    totalValue: "$21,479.32",
    change24h: "+$1,234.56",
    changePercent: "+6.1%",
    isPositive: true,
  };

  const metrics = [
    { label: "Total Assets", value: "47", change: "+3" },
    { label: "Chains", value: "8", change: "+1" },
    { label: "Transactions", value: "1,234", change: "+56" },
    { label: "Avg. Gas", value: "$12.34", change: "-$2.1" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      <Card className="md:col-span-2 bg-gradient-to-br from-blue-600 to-purple-600 border-none text-white">
        <CardHeader>
          <CardTitle className="text-white/90">Total Portfolio Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-4xl font-bold">{portfolioData.totalValue}</p>
            <div className="flex items-center gap-2 text-white/90">
              {portfolioData.isPositive ? (
                <ArrowUp className="w-4 h-4" />
              ) : (
                <ArrowDown className="w-4 h-4" />
              )}
              <span>{portfolioData.change24h}</span>
              <span>({portfolioData.changePercent})</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {metrics.map((metric, index) => (
        <Card key={index} className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              {metric.label}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-white">{metric.value}</p>
              <p className="text-sm text-green-400">{metric.change}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
