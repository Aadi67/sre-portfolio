import { useEffect, useState } from "react";

// 1. Rich Content: Expanded Tech Stack
const techStack = [
  { name: "Microsoft Azure (AZ-104 Level)", capacity: "95%" },
  { name: "Terraform (IaC & Modules)", capacity: "95%" },
  { name: "AWS & Cloud FinOps", capacity: "85%" },
  { name: "Snowflake Architecture & Backup", capacity: "85%" },
  { name: "PowerShell & Automation", capacity: "90%" },
];

// 2. Rich Content: Detailed Deployment History
const systemLogs = [
  { 
    id: 1, 
    category: "ARCHITECTURE", 
    date: "2026-08", 
    level: "CRITICAL", 
    service: "Snowflake-Azure", 
    message: "Designed enterprise backup policies & data protection tiers (Golden, Silver, Bronze) for Snowflake on Azure Cloud." 
  },
  { 
    id: 2, 
    category: "EDUCATION", 
    date: "2026-09", 
    level: "INFO", 
    service: "Persista-Learning", 
    message: "Launched 31-day AZ-104 Azure Cloud certification course including theory guides, lab workbooks, and marketing." 
  },
  { 
    id: 3, 
    category: "EDUCATION", 
    date: "2026-08", 
    level: "INFO", 
    service: "Bootcamp-Engine", 
    message: "Deployed complete curriculum and broadcast workflows for a 4-week cohort-based Terraform bootcamp." 
  },
  { 
    id: 4, 
    category: "FINOPS", 
    date: "2026-09", 
    level: "WARN", 
    service: "AWS-Optimization", 
    message: "Developed 10-level prep lab explanations focusing on AWS FinOps analysis and cost optimization architecture." 
  },
];

export default function App() {
  // 3. Dynamic State: Active filter for the logs table
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Filter logic
  const filteredLogs = activeFilter === "ALL" 
    ? systemLogs 
    : systemLogs.filter(log => log.category === activeFilter);

  return (
    <main className="p-4 md:p-8 mx-auto max-w-7xl font-sans text-gray-300 selection:bg-emerald-500/30">
      
      {/* HEADER: With Glowing Pulse Animation */}
      <header className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-gray-800">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-white tracking-tight">Aditya</h1>
            {/* Blinking Live Status Indicator */}
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <p className="text-sm text-gray-400 font-mono">Senior DevOps & Site Reliability Engineer</p>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-4 lg:mt-0 font-mono text-xs">
          <div className="bg-[#181b1f] border border-gray-700 px-3 py-1.5 rounded flex items-center gap-2 shadow-inner">
            <span className="text-gray-500">Status:</span>
            <span className="text-emerald-400">Available for Deployment</span>
          </div>
          <div className="bg-[#181b1f] border border-gray-700 px-3 py-1.5 rounded flex items-center gap-2 shadow-inner">
            <span className="text-gray-500">Target Zones:</span>
            <span className="text-blue-400">EU (Netherlands / Ireland)</span>
          </div>
        </div>
      </header>

      {/* METRICS ROW: Interactive Hover Effects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: "System Uptime (YOE)", value: "7-8 Yrs", sub: "Enterprise DevOps", color: "bg-emerald-500", text: "text-emerald-400" },
          { label: "Throughput", value: "31-Day", sub: "AZ-104 Course Deployed", color: "bg-blue-500", text: "text-blue-400" },
          { label: "Data Protection", value: "3 Tiers", sub: "Golden/Silver/Bronze Built", color: "bg-purple-500", text: "text-purple-400" }
        ].map((metric, i) => (
          <div key={i} className="group bg-[#181b1f] border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-black/50">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">{metric.label}</h3>
            <p className={`text-4xl font-bold ${metric.text} font-mono mb-1`}>{metric.value}</p>
            <p className="text-sm text-gray-400">{metric.sub}</p>
            <div className="mt-5 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
              <div className={`h-full ${metric.color} w-full transform origin-left group-hover:scale-105 transition-transform duration-500`}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* TECH STACK: Left Column */}
        <div className="lg:col-span-1 bg-[#181b1f] border border-gray-800 p-6 rounded-xl">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">Resource Allocation</h3>
          <div className="space-y-5">
            {techStack.map((tech) => (
              <div key={tech.name} className="group">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300 group-hover:text-white transition-colors">{tech.name}</span>
                  <span className="text-gray-500 font-mono">{tech.capacity}</span>
                </div>
                <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500/80 group-hover:bg-blue-400 transition-colors" style={{ width: tech.capacity }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LOGS: Right Column (Interactive) */}
        <div className="lg:col-span-2 bg-[#181b1f] border border-gray-800 p-6 rounded-xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">System Event Logs</h3>
            
            {/* Interactive Filters */}
            <div className="flex bg-[#111217] p-1 rounded-lg border border-gray-800 font-mono text-xs">
              {['ALL', 'ARCHITECTURE', 'EDUCATION', 'FINOPS'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    activeFilter === filter 
                    ? 'bg-gray-800 text-white shadow-sm' 
                    : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left font-mono">
              <tbody className="divide-y divide-gray-800/50">
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-[#1f2329] transition-colors group">
                    <td className="py-4 pr-4 text-gray-500 whitespace-nowrap">{log.date}</td>
                    <td className="py-4 pr-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        log.level === 'CRITICAL' ? 'text-red-400 bg-red-400/10' :
                        log.level === 'WARN' ? 'text-yellow-400 bg-yellow-400/10' :
                        'text-emerald-400 bg-emerald-400/10'
                      }`}>
                        {log.level}
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-blue-400/80 group-hover:text-blue-400 transition-colors whitespace-nowrap">
                      [{log.service}]
                    </td>
                    <td className="py-4 text-gray-300 leading-relaxed min-w-[300px]">
                      {log.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}