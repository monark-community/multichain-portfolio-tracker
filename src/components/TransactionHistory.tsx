
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";

const transactions = [
  {
    type: "receive",
    asset: "ETH",
    amount: "2.5",
    value: "$4,892.50",
    from: "0x742d...3f8c",
    time: "2 hours ago",
    chain: "Ethereum",
    hash: "0xabc123...def456",
  },
  {
    type: "send",
    asset: "USDC",
    amount: "1,000",
    value: "$1,000.00",
    to: "0x8a9b...2d1e",
    time: "5 hours ago",
    chain: "Polygon",
    hash: "0xdef456...abc123",
  },
  {
    type: "swap",
    asset: "BNB → ETH",
    amount: "5.2 → 0.8",
    value: "$1,234.56",
    time: "1 day ago",
    chain: "BSC",
    hash: "0x123abc...456def",
  },
  {
    type: "receive",
    asset: "MATIC",
    amount: "500",
    value: "$456.78",
    from: "0x1c2d...9f4a",
    time: "2 days ago",
    chain: "Polygon",
    hash: "0x456def...123abc",
  },
];

export function TransactionHistory() {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">Recent Transactions</CardTitle>
        <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:text-white">
          Export CSV
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((tx, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900/70 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  tx.type === 'receive' ? 'bg-green-600/20' : 
                  tx.type === 'send' ? 'bg-red-600/20' : 'bg-blue-600/20'
                }`}>
                  {tx.type === 'receive' ? (
                    <ArrowDown className="w-5 h-5 text-green-400" />
                  ) : tx.type === 'send' ? (
                    <ArrowUp className="w-5 h-5 text-red-400" />
                  ) : (
                    <span className="text-blue-400 text-xs font-bold">⇄</span>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-white capitalize">{tx.type}</p>
                    <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                      {tx.chain}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">
                    {tx.asset} • {tx.time}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-white">{tx.value}</p>
                <p className="text-sm text-slate-400">{tx.amount}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white">
            Load More Transactions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
