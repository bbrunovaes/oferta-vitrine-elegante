
import React from 'react';

const PowerBILogo = ({ className = "w-16 h-16" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo with chart curve */}
      <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full p-3 shadow-lg">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-black">
          {/* Chart bars */}
          <rect x="6" y="25" width="4" height="10" fill="currentColor" rx="1" />
          <rect x="12" y="20" width="4" height="15" fill="currentColor" rx="1" />
          <rect x="18" y="15" width="4" height="20" fill="currentColor" rx="1" />
          <rect x="24" y="10" width="4" height="25" fill="currentColor" rx="1" />
          <rect x="30" y="18" width="4" height="17" fill="currentColor" rx="1" />
          
          {/* Curved line connecting the tops */}
          <path 
            d="M 8 25 Q 14 18, 20 15 T 32 18" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round"
          />
          
          {/* Data points */}
          <circle cx="8" cy="25" r="2" fill="currentColor" />
          <circle cx="14" cy="20" r="2" fill="currentColor" />
          <circle cx="20" cy="15" r="2" fill="currentColor" />
          <circle cx="26" cy="10" r="2" fill="currentColor" />
          <circle cx="32" cy="18" r="2" fill="currentColor" />
        </svg>
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-xl font-bold text-white leading-tight">Power BI</span>
        <span className="text-sm text-yellow-200 leading-tight">na prática</span>
      </div>
    </div>
  );
};

export default PowerBILogo;
