import React from "react";

export const EndoscopiaIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <path d="M9 10h6" />
    <path d="M9 14h4" />
    <circle cx="15" cy="6" r="1.5" fill="currentColor" />
  </svg>
);

export const ColonoscopiaIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const CapsulaIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="8" width="18" height="8" rx="4" />
    <path d="M12 8v8" />
    <circle cx="7.5" cy="12" r="1.5" fill="currentColor" />
    <path d="M15 10l2 2-2 2" />
  </svg>
);

export const GastroIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 0 0 4.5 2.6V6a4 4 0 0 0 4 4v0a4 4 0 0 0 4-4V2.6a.3.3 0 0 0-.3-.3h-1.4a.3.3 0 0 0-.3.3v2.8a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V2.6a.3.3 0 0 0-.3-.3H4.8z" />
    <path d="M8.5 10v10.5a1.5 1.5 0 0 0 3 0V10" />
    <path d="M18 2v20" />
    <path d="M15 15a3 3 0 0 1 6 0" />
  </svg>
);

export const BalaoIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="10" r="7" />
    <path d="M12 17v5" />
    <path d="M9 22h6" />
    <path d="M10 8a2 2 0 0 1 2-2" />
  </svg>
);

export const HospitalProcIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 12h6" />
    <path d="M12 9v6" />
  </svg>
);
