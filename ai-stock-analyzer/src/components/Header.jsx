
import React from "react";
import { TrendingUp, BrainCircuit } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 px-6 py-4 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-emerald-500/20 p-3">
            <BrainCircuit className="h-7 w-7 text-emerald-400" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide text-white sm:text-2xl">
              AI Stock Analyzer
            </h1>
            <p className="text-xs text-gray-400">
              Smart Market Insights
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <TrendingUp className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">
            Market Analysis
          </span>
        </div>

      </div>
    </header>
  );
};

export default Header;
