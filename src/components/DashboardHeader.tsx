
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function DashboardHeader() {
  const [connectedWallets] = useState([
    { address: "0x742d...3f8c", chain: "Ethereum", balance: "$12,345" },
    { address: "0x8a9b...2d1e", chain: "Polygon", balance: "$5,678" },
    { address: "0x1c2d...9f4a", chain: "BSC", balance: "$3,456" },
  ]);

  return (
    <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white">Portfolio Dashboard</h1>
            <p className="text-slate-400">Track your crypto assets across multiple chains</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            + Connect Wallet
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {connectedWallets.map((wallet, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">{wallet.chain}</p>
                    <p className="font-mono text-sm text-slate-300">{wallet.address}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-green-400">{wallet.balance}</p>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
