import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import Badge from '@/components/common/Badge';
import ChartCard from '@/components/dashboard/ChartCard';
import SimpleChart from '@/components/charts/SimpleChart';

// Dados de exemplo para a página de configurações
const automationRulesData = [
  { 
    id: 'rule-001',
    name: 'Aprovação Automática - Vidros',
    description: 'Aprovar automaticamente sinistros de vidros com valor abaixo de R$ 2.000',
    status: 'active',
    conditions: [
      'Tipo de sinistro: Auto - Vidros',
      'Valor estimado <= R$ 2.000',
      'Cliente há mais de 1 ano',
      'Sem sinistros nos últimos 6 meses'
    ],
    actions: [
      'Aprovar sinistro',
      'Enviar notificação ao cliente',
      'Gerar ordem de serviço'
    ],
    metrics: {
      processed: 128,
      success_rate: 98.4,
      avg_time: 0.8
    }
  },
  { 
    id: 'rule-002',
    name: 'Análise de Fraude - Colisões',
    description: 'Identificar potenciais fraudes em sinistros de colisão',
    status: 'active',
    conditions: [
      'Tipo de sinistro: Auto - Colisão',
      'Valor estimado > R$ 10.000',
      'Ocorrido em horário noturno (22h-5h)',
      'Sem boletim de ocorrência'
    ],
    actions: [
      'Marcar para revisão manual',
      'Solicitar documentação adicional',
      'Atribuir prioridade alta'
    ],
    metrics: {
      processed: 87,
      success_rate: 92.5,
      avg_time: 1.2
    }
  },
  { 
    id: 'rule-003',
    name: 'Triagem Inicial - Residencial',
    description: 'Classificar e rotear sinistros residenciais',
    status: 'active',
    conditions: [
      'Tipo de sinistro: Residencial',
      'Qualquer valor'
    ],
    actions: [
      'Classificar por tipo (incêndio, roubo, danos elétricos, etc.)',
      'Atribuir ao departamento correto',
      'Definir SLA com base na complexidade'
    ],
    metrics: {
      processed: 215,
      success_rate: 99.1,
      avg_time: 0.5
    }
  },
  { 
    id: 'rule-004',
    name: 'Detecção de Inconsistências em Documentos',
    description: 'Identificar inconsistências entre documentos enviados',
    status: 'inactive',
    conditions: [
      'Qualquer tipo de sinistro',
      'Documentação completa enviada'
    ],
    actions: [
      'Analisar datas, valores e descrições',
      'Comparar com informações da apólice',
      'Marcar inconsistências para revisão'
    ],
    metrics: {
      processed: 0,
      success_rate: 0,
      avg_time: 0
    }
  }
];

const performanceData = [
  { name: 'Jan', manual: 5.2, automated: 0.8 },
  { name: 'Fev', manual: 5.0, automated: 0.8 },
  { name: 'Mar', manual: 4.8, automated: 0.7 },
  { name: 'Abr', manual: 4.5, automated: 0.7 },
  { name: 'Mai', manual: 4.2, automated: 0.6 },
  { name: 'Jun', manual: 4.0, automated: 0.6 },
  { name: 'Jul', manual: 3.8, automated: 0.5 },
  { name: 'Ago', manual: 3.6, automated: 0.5 },
  { name: 'Set', manual: 3.4, automated: 0.4 },
  { name: 'Out', manual: 3.2, automated: 0.4 },
  { name: 'Nov', manual: 3.0, automated: 0.3 },
  { name: 'Dez', manual: 2.8, automated: 0.3 }
];

export default function Settings() {
  const [activeTab, setActiveTab] = React.useState('automation');
  
  return (
    <DashboardLayout>
      <Header 
        title="Configurações" 
        subtitle="Gerenciar regras de automação e configurações do sistema"
      />
      
      <div className="flex flex-wrap gap-4 mb-6">
        <Button 
          variant={activeTab === 'automation' ? 'primary' : 'outline'} 
          onClick={() => setActiveTab('automation')}
        >
          Regras de Automação
        </Button>
        <Button 
          variant={activeTab === 'ai' ? 'primary' : 'outline'} 
          onClick={() => setActiveTab('ai')}
        >
          Configurações de IA
        </Button>
        <Button 
          variant={activeTab === 'workflow' ? 'primary' : 'outline'} 
          onClick={() => setActiveTab('workflow')}
        >
          Fluxos de Trabalho
        </Button>
        <Button 
          variant={activeTab === 'integrations' ? 'primary' : 'outline'} 
          onClick={() => setActiveTab('integrations')}
        >
          Integrações
        </Button>
      </div>
      
      {activeTab === 'automation' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Regras de Automação</h2>
            <Button variant="primary">Nova Regra</Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard 
              title="Tempo Médio de Processamento" 
              subtitle="Manual vs. Automatizado (em dias)"
            >
              <SimpleChart 
                data={performanceData} 
                type="line" 
                dataKey="manual" 
                color="#ff5722"
                multipleLines={[
                  { dataKey: "manual", color: "#ff5722", name: "Manual" },
                  { dataKey: "automated", color: "#6a11cb", name: "Automatizado" }
                ]}
              />
            </ChartCard>
            
            <ChartCard 
              title="Métricas de Automação" 
              subtitle="Desempenho atual do sistema"
            >
              <div className="h-[300px] flex items-center justify-center">
                <div className="grid grid-cols-3 gap-8 w-full">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text-purple">68%</div>
                    <div className="text-sm text-gray-400">Taxa de Automação</div>
                    <div className="text-xs text-green-500">+5% vs. mês anterior</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text-purple">96.8%</div>
                    <div className="text-sm text-gray-400">Precisão</div>
                    <div className="text-xs text-green-500">+1.2% vs. mês anterior</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text-purple">0.4</div>
                    <div className="text-sm text-gray-400">Tempo Médio (dias)</div>
                    <div className="text-xs text-green-500">-0.1 vs. mês anterior</div>
                  </div>
                </div>
              </div>
            </ChartCard>
          </div>
          
          <div className="space-y-4">
            {automationRulesData.map((rule) => (
              <div key={rule.id} className="glass-card p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium text-white">{rule.name}</h3>
                    <p className="text-sm text-gray-400">{rule.description}</p>
                  </div>
                  <Badge variant={rule.status === 'active' ? 'success' : 'default'}>
                    {rule.status === 'active' ? 'Ativo' : 'Inativo'}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-white mb-2">Condições</h4>
                    <ul className="text-sm text-gray-400 space-y-1 pl-5 list-disc">
                      {rule.conditions.map((condition, index) => (
                        <li key={index}>{condition}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-white mb-2">Ações</h4>
                    <ul className="text-sm text-gray-400 space-y-1 pl-5 list-disc">
                      {rule.actions.map((action, index) => (
                        <li key={index}>{action}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-white mb-2">Métricas</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">Sinistros processados:</span>
                        <span className="text-sm font-medium">{rule.metrics.processed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">Taxa de sucesso:</span>
                        <span className="text-sm font-medium">{rule.metrics.success_rate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">Tempo médio:</span>
                        <span className="text-sm font-medium">{rule.metrics.avg_time} dias</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-3 mt-4">
                  <Button variant="outline" size="sm">Editar</Button>
                  <Button variant="outline" size="sm">Duplicar</Button>
                  {rule.status === 'active' ? (
                    <Button variant="outline" size="sm">Desativar</Button>
                  ) : (
                    <Button variant="primary" size="sm">Ativar</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {activeTab === 'ai' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Configurações de IA</h2>
            <Button variant="primary">Salvar Alterações</Button>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="font-medium text-white mb-4">Modelos de IA</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Análise de Documentos</h4>
                <Select
                  options={[
                    { value: 'olga-doc-v3', label: 'Olga Document Analysis v3 (Recomendado)' },
                    { value: 'olga-doc-v2', label: 'Olga Document Analysis v2' },
                    { value: 'azure-form-recognizer', label: 'Azure Form Recognizer' },
                    { value: 'google-document-ai', label: 'Google Document AI' }
                  ]}
                  value="olga-doc-v3"
                />
                <div className="text-xs text-gray-400 mt-1">
                  Modelo utilizado para extração de dados de documentos como boletins de ocorrência, laudos e orçamentos.
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Análise de Imagens</h4>
                <Select
                  options={[
                    { value: 'olga-vision-v2', label: 'Olga Vision v2 (Recomendado)' },
                    { value: 'olga-vision-v1', label: 'Olga Vision v1' },
                    { value: 'azure-computer-vision', label: 'Azure Computer Vision' },
                    { value: 'google-vision-ai', label: 'Google Vision AI' }
                  ]}
                  value="olga-vision-v2"
                />
                <div className="text-xs text-gray-400 mt-1">
                  Modelo utilizado para análise de danos em veículos e propriedades a partir de imagens.
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Detecção de Fraudes</h4>
                <Select
                  options={[
                    { value: 'olga-fraud-v3', label: 'Olga Fraud Detection v3 (Recomendado)' },
                    { value: 'olga-fraud-v2', label: 'Olga Fraud Detection v2' },
                    { value: 'custom', label: 'Modelo Personalizado' }
                  ]}
                  value="olga-fraud-v3"
                />
                <div className="text-xs text-gray-400 mt-1">
                  Modelo utilizado para identificar padrões suspeitos e potenciais fraudes em sinistros.
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="font-medium text-white mb-4">Parâmetros de Confiança</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Limiar de Aprovação Automática</h4>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="70" 
                    max="99" 
                    value="92" 
                    className="w-full"
                  />
                  <span className="text-white font-medium">92%</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Nível mínimo de confiança para aprovação automática de sinistros sem intervenção humana.
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Limiar de Alerta de Fraude</h4>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="30" 
                    max="90" 
                    value="60" 
                    className="w-full"
                  />
                  <span className="text-white font-medium">60%</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Nível de confiança para marcar um sinistro como potencialmente fraudulento.
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Sensibilidade de Detecção de Inconsistências</h4>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    value="7" 
                    className="w-full"
                  />
                  <span className="text-white font-medium">7</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Sensibilidade para detecção de inconsistências entre documentos e relatos (1 = menos sensível, 10 = mais sensível).
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="font-medium text-white mb-4">Treinamento e Feedback</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-white">Aprendizado Contínuo</h4>
                  <div className="text-xs text-gray-400">
                    Permitir que os modelos aprendam com as decisões dos analistas
                  </div>
                </div>
                <div className="relative inline-block w-12 h-6 rounded-full bg-gray-700">
                  <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-[#6a11cb] transform translate-x-6"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-white">Feedback de Analistas</h4>
                  <div className="text-xs text-gray-400">
                    Solicitar feedback dos analistas sobre decisões automatizadas
                  </div>
                </div>
                <div className="relative inline-block w-12 h-6 rounded-full bg-gray-700">
                  <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-[#6a11cb] transform translate-x-6"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-white">Retraining Automático</h4>
                  <div className="text-xs text-gray-400">
                    Retraining automático dos modelos a cada 30 dias
                  </div>
                </div>
                <div className="relative inline-block w-12 h-6 rounded-full bg-gray-700">
                  <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-[#6a11cb] transform translate-x-6"></div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button variant="outline" size="sm">Iniciar Treinamento Manual</Button>
                <div className="text-xs text-gray-400 mt-1">
                  Último treinamento: 10/04/2025 (13 dias atrás)
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
