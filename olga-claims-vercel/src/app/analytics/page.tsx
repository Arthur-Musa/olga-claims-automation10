import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import ChartCard from '@/components/dashboard/ChartCard';
import SimpleChart from '@/components/charts/SimpleChart';
import Tabs from '@/components/common/Tabs';

// Dados de exemplo para a página de análises
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

const fraudDetectionData = [
  { name: 'Jan', value: 2.1 },
  { name: 'Fev', value: 2.3 },
  { name: 'Mar', value: 2.5 },
  { name: 'Abr', value: 2.2 },
  { name: 'Mai', value: 2.8 },
  { name: 'Jun', value: 3.0 },
  { name: 'Jul', value: 3.2 },
  { name: 'Ago', value: 3.5 },
  { name: 'Set', value: 3.8 },
  { name: 'Out', value: 4.0 },
  { name: 'Nov', value: 4.2 },
  { name: 'Dez', value: 4.5 }
];

const automationRateData = [
  { name: 'Jan', value: 52 },
  { name: 'Fev', value: 54 },
  { name: 'Mar', value: 56 },
  { name: 'Abr', value: 58 },
  { name: 'Mai', value: 60 },
  { name: 'Jun', value: 62 },
  { name: 'Jul', value: 64 },
  { name: 'Ago', value: 65 },
  { name: 'Set', value: 66 },
  { name: 'Out', value: 67 },
  { name: 'Nov', value: 68 },
  { name: 'Dez', value: 70 }
];

const costSavingsData = [
  { name: 'Jan', value: 0.6 },
  { name: 'Fev', value: 0.65 },
  { name: 'Mar', value: 0.7 },
  { name: 'Abr', value: 0.75 },
  { name: 'Mai', value: 0.8 },
  { name: 'Jun', value: 0.85 },
  { name: 'Jul', value: 0.9 },
  { name: 'Ago', value: 0.95 },
  { name: 'Set', value: 1.0 },
  { name: 'Out', value: 1.1 },
  { name: 'Nov', value: 1.15 },
  { name: 'Dez', value: 1.2 }
];

export default function Analytics() {
  const [activeTab, setActiveTab] = React.useState('performance');
  const [timeRange, setTimeRange] = React.useState('year');
  
  return (
    <DashboardLayout>
      <Header 
        title="Análises" 
        subtitle="Métricas e insights sobre a operação de sinistros"
      />
      
      {/* Filtros */}
      <div className="flex justify-between items-center mb-6">
        <Tabs 
          tabs={[
            { id: 'performance', label: 'Performance' },
            { id: 'trends', label: 'Tendências' },
            { id: 'automation', label: 'Automação' },
            { id: 'fraud', label: 'Fraude' }
          ]}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
        
        <div className="flex gap-2">
          <Button 
            variant={timeRange === 'month' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setTimeRange('month')}
          >
            Mês
          </Button>
          <Button 
            variant={timeRange === 'quarter' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setTimeRange('quarter')}
          >
            Trimestre
          </Button>
          <Button 
            variant={timeRange === 'year' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setTimeRange('year')}
          >
            Ano
          </Button>
        </div>
      </div>
      
      {/* Performance Tab */}
      {activeTab === 'performance' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ChartCard 
              title="Sinistros por Tipo" 
              subtitle="Distribuição atual"
            >
              <SimpleChart 
                data={claimsByTypeData} 
                type="area" 
                dataKey="value" 
                color="#2575fc"
                height={200}
              />
            </ChartCard>
            
            <ChartCard 
              title="Taxa de Aprovação" 
              subtitle="Por tipo de sinistro"
              className="lg:col-span-2"
            >
              <div className="h-[200px] flex items-center justify-center">
                <div className="grid grid-cols-4 gap-4 w-full">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text-purple">92%</div>
                    <div className="text-sm text-gray-400">Auto</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text-purple">88%</div>
                    <div className="text-sm text-gray-400">Residencial</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text-purple">95%</div>
                    <div className="text-sm text-gray-400">Vida</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text-purple">85%</div>
                    <div className="text-sm text-gray-400">Empresarial</div>
                  </div>
                </div>
              </div>
            </ChartCard>
          </div>
        </div>
      )}
      
      {/* Automation Tab */}
      {activeTab === 'automation' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard 
              title="Taxa de Automação" 
              subtitle="Percentual de sinistros processados sem intervenção humana"
            >
              <SimpleChart 
                data={automationRateData} 
                type="line" 
                dataKey="value" 
                color="#6a11cb"
              />
            </ChartCard>
            
            <ChartCard 
              title="Economia Gerada" 
              subtitle="Em milhões de R$, últimos 12 meses"
            >
              <SimpleChart 
                data={costSavingsData} 
                type="area" 
                dataKey="value" 
                color="#ff5722"
              />
            </ChartCard>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="font-medium text-white mb-4">Oportunidades de Automação</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-white">Sinistros de Vidros Automotivos</h4>
                  <p className="text-sm text-gray-400">Potencial de automação de 95%</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Economia estimada</div>
                  <div className="text-lg font-medium text-white">R$ 320.000/ano</div>
                </div>
                <Button variant="primary" size="sm">Implementar</Button>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-white">Sinistros Residenciais Simples</h4>
                  <p className="text-sm text-gray-400">Potencial de automação de 80%</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Economia estimada</div>
                  <div className="text-lg font-medium text-white">R$ 280.000/ano</div>
                </div>
                <Button variant="primary" size="sm">Implementar</Button>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-white">Verificação de Documentos</h4>
                  <p className="text-sm text-gray-400">Potencial de automação de 90%</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Economia estimada</div>
                  <div className="text-lg font-medium text-white">R$ 420.000/ano</div>
                </div>
                <Button variant="primary" size="sm">Implementar</Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Fraud Tab */}
      {activeTab === 'fraud' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard 
              title="Taxa de Detecção de Fraudes" 
              subtitle="Percentual de sinistros identificados como fraudulentos"
            >
              <SimpleChart 
                data={fraudDetectionData} 
                type="line" 
                dataKey="value" 
                color="#F44336"
              />
            </ChartCard>
            
            <ChartCard 
              title="Economia por Prevenção de Fraudes" 
              subtitle="Em milhões de R$, últimos 12 meses"
            >
              <div className="h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold gradient-text-orange">R$ 4.8M</div>
                  <div className="text-lg text-gray-400 mt-2">Economia Total</div>
                  <div className="text-sm text-green-500 mt-1">+22% vs. ano anterior</div>
                </div>
              </div>
            </ChartCard>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="font-medium text-white mb-4">Padrões de Fraude Detectados</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-red-500 bg-opacity-10 text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Múltiplos Sinistros em Curto Período</h4>
                    <p className="text-sm text-gray-400">Mesmo segurado com 3+ sinistros em 6 meses</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Detecções</div>
                  <div className="text-lg font-medium text-white">28 casos</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-red-500 bg-opacity-10 text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Documentação Inconsistente</h4>
                    <p className="text-sm text-gray-400">Divergências em datas, valores ou descrições</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Detecções</div>
                  <div className="text-lg font-medium text-white">42 casos</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-red-500 bg-opacity-10 text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Danos Incompatíveis</h4>
                    <p className="text-sm text-gray-400">Análise de imagens detecta inconsistências</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Detecções</div>
                  <div className="text-lg font-medium text-white">35 casos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Trends Tab */}
      {activeTab === 'trends' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard 
              title="Tendência de Sinistros" 
              subtitle="Projeção para os próximos 6 meses"
            >
              <div className="h-[300px] flex items-center justify-center">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-sm text-gray-400">Atual (média mensal)</div>
                      <div className="text-2xl font-bold">248 sinistros</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Projeção (6 meses)</div>
                      <div className="text-2xl font-bold text-green-500">+12%</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Auto</span>
                        <span className="text-green-500">+15%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Residencial</span>
                        <span className="text-green-500">+8%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Vida</span>
                        <span className="text-red-500">-3%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Empresarial</span>
                        <span className="text-green-500">+22%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ChartCard>
            
            <ChartCard 
              title="Insights Sazonais" 
              subtitle="Padrões identificados por IA"
            >
              <div className="space-y-4 p-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500 bg-opacity-10 text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Aumento de 35% em sinistros de alagamento entre Dezembro e Março</h4>
                    <p className="text-sm text-gray-400 mt-1">Recomendação: Campanha preventiva em Novembro</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500 bg-opacity-10 text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Pico de colisões em Dezembro, com 28% acima da média anual</h4>
                    <p className="text-sm text-gray-400 mt-1">Recomendação: Ajuste temporário de equipe de análise</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500 bg-opacity-10 text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Sinistros de roubo aumentam 22% durante feriados prolongados</h4>
                    <p className="text-sm text-gray-400 mt-1">Recomendação: Alertas preventivos para segurados</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500 bg-opacity-10 text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Correlação de 85% entre ondas de calor e sinistros de incêndio</h4>
                    <p className="text-sm text-gray-400 mt-1">Recomendação: Monitoramento de previsões meteorológicas</p>
                  </div>
                </div>
              </div>
            </ChartCard>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
