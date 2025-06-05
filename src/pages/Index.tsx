
import { useState } from "react";
import { Sidebar, SidebarContent, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { PortfolioOverview } from "@/components/PortfolioOverview";
import { AssetBreakdown } from "@/components/AssetBreakdown";
import { TransactionHistory } from "@/components/TransactionHistory";
import { PerformanceChart } from "@/components/PerformanceChart";

const Index = () => {
  const [isConnected, setIsConnected] = useState(false);

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4 text-white">
              MultiTrack
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Unified blockchain analytics across multiple chains
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h2 className="text-2xl font-semibold mb-6">Connect Your Wallets</h2>
            <p className="text-slate-400 mb-8">
              Connect your wallets to start tracking your crypto portfolio across multiple blockchains
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={() => setIsConnected(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-3"
              >
                <span>🦊</span>
                Connect MetaMask
              </button>
              
              <button 
                onClick={() => setIsConnected(true)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-3"
              >
                <span>👛</span>
                Connect WalletConnect
              </button>
            </div>
            
            <p className="text-sm text-slate-500 mt-6">
              Demo mode available - Click any button to explore the dashboard
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-900">
        <AppSidebar />
        <main className="flex-1">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <PortfolioOverview />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AssetBreakdown />
              <PerformanceChart />
            </div>
            <TransactionHistory />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
