"use client";

import React from 'react';

const SimpleChart = ({ type, data, dataKey, nameKey, color, unit, height }) => {
  // Simulação de um componente de gráfico
  // Em uma implementação real, usaríamos uma biblioteca como Recharts
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <div className="text-gray-400 mb-2">
          {type === 'bar' && 'Gráfico de Barras'}
          {type === 'line' && 'Gráfico de Linha'}
          {type === 'pie' && 'Gráfico de Pizza'}
          {type === 'radar' && 'Gráfico de Radar'}
          {type === 'area' && 'Gráfico de Área'}
        </div>
        <div className="text-sm text-gray-500">
          (Visualização simulada de gráfico {type})
        </div>
        
        {/* Visualização simplificada dos dados */}
        <div className="mt-4 space-y-2">
          {data && data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="h-4 rounded-sm" 
                style={{ 
                  width: `${(item[dataKey] / 100) * 100}px`,
                  backgroundColor: color || '#6a11cb'
                }}
              ></div>
              <span className="ml-2 text-sm text-white">
                {item[nameKey || 'name']}: {item[dataKey]}{unit || ''}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleChart;
