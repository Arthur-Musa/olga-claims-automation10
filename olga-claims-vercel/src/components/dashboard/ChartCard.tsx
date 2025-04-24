"use client";

import React from 'react';

const ChartCard = ({ title, children, subtitle, className }) => {
  return (
    <div className={`glass-card p-6 ${className || ''}`}>
      <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-gray-400 mb-4">{subtitle}</p>}
      <div className="h-64">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
