import { useEffect } from "react";

// Mock data for our capacity visualization
const techStack = [
  { name: "Microsoft Azure", capacity: "95%" },
  { name: "Terraform (IaC)", capacity: "95%" },
  { name: "Cloudflare & DNS", capacity: "85%" },
  { name: "Snowflake Recovery", capacity: "80%" },
  { name: "Azure DevOps / CI-CD", capacity: "90%" },
];

export default function App() {
  // Enforce dark mode on the HTML element
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <main className="p-4 md:p-8 mx-auto max-w-7xl font-sans text-gray-300">
      
      {/* 1. Global Header / Environment Selector */}
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-gray-800">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Aditya // Site Reliability Engineer</h1>
          <p className="text-sm text-gray-500 font-mono mt-1">Platform Obsession • Infrastructure as Code</p>
        </div>
        
        {/* Grafana-style Environment Dropdowns */}
        <div className="flex gap-4 mt-4 md:mt-0 font-mono text-xs">
          <div className="bg-[#181b1f] border border-gray-700 px-3 py-1.5 rounded flex items-center gap-2">
            <span className="text-gray-500">Env:</span>
            <span className="text-emerald-400">production</span>
          </div>
          <div className="bg-[#181b1f] border border-gray-700 px-3 py-1.5 rounded flex items-center gap-2">
            <span className="text-gray-500">Region:</span>
            <span className="text-blue-400">eu-west-1 (Ireland)</span>
          </div>
        </div>
      </header>

      {/* 2. Top Row: High-Impact Metrics (The Gauges) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        
        <div className="bg-[#181b1f] border border-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-400 mb-1">System Uptime (Experience)</h3>
          <p className="text-3xl font-bold text-emerald-400 font-mono">8.0 Yrs</p>
          <div className="mt-4 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-full"></div>
          </div>
        </div>

        <div className="bg-[#181b1f] border border-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-400 mb-1">Active Throughput</h3>
          <p className="text-3xl font-bold text-blue-400 font-mono">AZ-104 & TF</p>
          <p className="text-xs text-gray-500 mt-2">Running bootcamps via Persista Learning</p>
        </div>

        <div className="bg-[#181b1f] border border-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-400 mb-1">Global Load Balancing</h3>
          <p className="text-3xl font-bold text-purple-400 font-mono">Netherlands</p>
          <p className="text-xs text-gray-500 mt-2">Targeting Senior Engineering Roles</p>
        </div>
      </div>

      {/* 3. Middle Row: Tech Stack Capacity (Bar Charts) */}
      <div className="bg-[#181b1f] border border-gray-800 p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-medium text-white mb-6">Core Infrastructure Capacity</h3>
        <div className="space-y-4">
          {techStack.map((tech) => (
            <div key={tech.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300 font-medium">{tech.name}</span>
                <span className="text-gray-500 font-mono">{tech.capacity}</span>
              </div>
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500" 
                  style={{ width: tech.capacity }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Bottom Row: Event Logs (Work History) */}
      <div className="bg-[#181b1f] border border-gray-800 p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-white mb-4">Deployment Logs (Recent Architecture)</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left font-mono">
            <thead className="text-xs text-gray-500 uppercase bg-[#111217]">
              <tr>
                <th className="px-4 py-3 rounded-tl-md">Timestamp</th>
                <th className="px-4 py-3">Level</th>
                <th className="px-4 py-3">Service Module</th>
                <th className="px-4 py-3 rounded-tr-md">Message Payload</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="hover:bg-[#1f2329] transition-colors">
                <td className="px-4 py-3 text-gray-400">2026-08</td>
                <td className="px-4 py-3"><span className="text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">INFO</span></td>
                <td className="px-4 py-3 text-blue-400">Data-Protection</td>
                <td className="px-4 py-3 text-gray-300">Architected Golden, Silver, Bronze recovery tiers for Snowflake on Azure Cloud.</td>
              </tr>
              <tr className="hover:bg-[#1f2329] transition-colors">
                <td className="px-4 py-3 text-gray-400">2026-08</td>
                <td className="px-4 py-3"><span className="text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">INFO</span></td>
                <td className="px-4 py-3 text-blue-400">Curriculum-Engine</td>
                <td className="px-4 py-3 text-gray-300">Deployed 4-week Terraform bootcamp including theory docs, labs, and broadcast templates.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </main>
  );
}