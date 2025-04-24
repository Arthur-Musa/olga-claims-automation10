"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Header from '@/components/layout/Header';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import SimpleChart from '@/components/charts/SimpleChart';
import ClaimCard from '@/components/claims/ClaimCard';
import Button from '@/components/common/Button';
import Tabs from '@/components/common/Tabs';

// Dados de exemplo para o dashboard
const statsData = [
  { 
    title: 'Sinistros Ativos', 
    value: '248', 
    change: '+12% vs. mês anterior', 
    trend: 'up' as const,
    color: 'purple' as const
  },
  { 
    title: 'Tempo Médio', 
    value: '3.2 dias', 
    change: '-18% vs. mês anterior', 
    trend: 'up' as const,
    color: 'green' as const
  },
  { 
    title: 'Taxa de Automação', 
    value: '68%', 
    change: '+5% vs. mês anterior', 
    trend: 'up' as const,
    color: 'blue' as const
  },
  { 
    title: 'Economia Gerada', 
    value: 'R$ 1.2M', 
    change: '+22% vs. mês anterior', 
    trend: 'up' as const,
    color: 'orange' as const
  }
];

const claimsData = [
  {
    id: 'SIN-2025-0042',
    title: 'Colisão em cruzamento',
    customer: 'João Silva',
    date: '22/04/2025',
    status: 'new' as const,
    amount: 'R$ 12.500,00',
    type: 'Auto',
    priority: 'high' as const
  },
  {
    id: 'SIN-2025-0041',
    title: 'Danos por vazamento',
    customer: 'Maria Oliveira',
    date: '21/04/2025',
    status: 'processing' as const,
    amount: 'R$ 8.200,00',
    type: 'Residencial',
    priority: 'medium' as const
  },
  {
    id: 'SIN-2025-0040',
    title: 'Furto de equipamentos',
    customer: 'Empresa ABC Ltda',
    date: '20/04/2025',
    status: 'approved' as const,
    amount: 'R$ 22.800,00',
    type: 'Empresarial',
    priority: 'medium' as const
  }
];

const monthlyClaimsData = [
  { name: 'Jan', value: 120 },
  { name: 'Fev', value: 140 },
  { name: 'Mar', value: 160 },
  { name: 'Abr', value: 180 },
  { name: 'Mai', value: 220 },
  { name: 'Jun', value: 240 },
  { name: 'Jul', value: 280 },
  { name: 'Ago', value: 250 },
  { name: 'Set', value: 260 },
  { name: 'Out', value: 280 },
  { name: 'Nov', value: 320 },
  { name: 'Dez', value: 360 }
];

const processingTimeData = [
  { name: 'Jan', value: 5.2 },
  { name: 'Fev', value: 5.0 },
  { name: 'Mar', value: 4.8 },
  { name: 'Abr', value: 4.5 },
  { name: 'Mai', value: 4.2 },
  { name: 'Jun', value: 4.0 },
  { name: 'Jul', value: 3.8 },
  { name: 'Ago', value: 3.6 },
  { name: 'Set', value: 3.4 },
  { name: 'Out', value: 3.2 },
  { name: 'Nov', value: 3.0 },
  { name: 'Dez', value: 2.8 }
];

const claimsByTypeData = [
  { name: 'Auto', value: 45 },
  { name: 'Residencial', value: 25 },
  { name: 'Vida', value: 15 },
  { name: 'Empresarial', value: 10 },
  { name: 'Outros', value: 5 }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('all');
  
  return (
    <DashboardLayout>
      <Header 
        title="Dashboard" 
        subtitle="Visão geral da operação de sinistros"
      />
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            color={stat.color}
          />
        ))}
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartCard 
          title="Volume de Sinistros" 
          subtitle="Últimos 12 meses"
        >
          <SimpleChart 
            data={monthlyClaimsData} 
            type="bar" 
            dataKey="value" 
            color="#6a11cb"
          />
        </ChartCard>
        
        <ChartCard 
          title="Tempo Médio de Processamento" 
          subtitle="Em dias, últimos 12 meses"
        >
          <SimpleChart 
            data={processingTimeData} 
            type="line" 
            dataKey="value" 
            color="#ff5722"
          />
        </ChartCard>
      </div>
      
      {/* Recent Claims */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Sinistros Recentes</h2>
          <Button variant="outline" size="sm">Ver Todos</Button>
        </div>
        
        <Tabs 
          tabs={[
            { id: 'all', label: 'Todos' },
            { id: 'new', label: 'Novos' },
            { id: 'processing', label: 'Em Análise' },
            { id: 'approved', label: 'Aprovados' }
          ]}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {claimsData.map((claim, index) => (
            <ClaimCard
              key={index}
              id={claim.id}
              title={claim.title}
              customer={claim.customer}
              date={claim.date}
              status={claim.status}
              amount={claim.amount}
              type={claim.type}
              priority={claim.priority}
            />
          ))}
        </div>
      </div>
      
      {/* Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard 
          title="Sinistros por Tipo" 
          subtitle="Distribuição atual"
          className="lg:col-span-1"
        >
          <SimpleChart 
            data={claimsByTypeData} 
            type="area" 
            dataKey="value" 
            color="#2575fc"
            height={200}
          />
        </ChartCard>
        
        <div className="glass-card p-6 lg:col-span-2">
          <h3 className="font-medium text-white mb-4">Ações Recomendadas</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-500 bg-opacity-10 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-white">Revisar sinistros pendentes</h4>
                <p className="text-sm text-gray-400">Existem 5 sinistros aguardando revisão há mais de 24h</p>
              </div>
              <Button variant="outline" size="sm">Revisar</Button>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-yellow-500 bg-opacity-10 text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-white">Potenciais fraudes detectadas</h4>
                <p className="text-sm text-gray-400">O sistema identificou 3 sinistros com padrões suspeitos</p>
              </div>
              <Button variant="outline" size="sm">Analisar</Button>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-green-500 bg-opacity-10 text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-white">Oportunidade de automação</h4>
                <p className="text-sm text-gray-400">Sinistros de vidros automotivos podem ser totalmente automatizados</p>
              </div>
              <Button variant="outline" size="sm">Configurar</Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
