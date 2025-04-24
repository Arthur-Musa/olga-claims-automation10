"use client";

import React, { useState } from 'react';
import { useClaimsStore } from '@/hooks/useStore';

// Componente para processamento automatizado de sinistros
export const AutomatedClaimProcessor = ({ onProcessingComplete }) => {
  const [processing, setProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  
  const steps = [
    'Validando documentação',
    'Analisando imagens do sinistro',
    'Verificando cobertura da apólice',
    'Avaliando risco de fraude',
    'Calculando valor do sinistro',
    'Gerando recomendação',
    'Finalizando processamento'
  ];
  
  const startProcessing = async () => {
    setProcessing(true);
    setCurrentStep(0);
    setError(null);
    setResults(null);
    
    try {
      // Simulação do processamento automatizado com IA
      for (let i = 0; i < steps.length; i++) {
        setCurrentStep(i);
        // Tempo variável para cada etapa para simular processamento real
        const stepTime = 1000 + Math.random() * 1500;
        await new Promise(resolve => setTimeout(resolve, stepTime));
      }
      
      // Resultados simulados do processamento
      const processingResults = {
        claimId: 'CLM-2025-78542',
        processingTime: 8.3, // segundos
        status: 'completed',
        outcome: 'approved',
        automationLevel: 'full', // full, partial, manual
        steps: [
          { name: 'Validação de documentação', status: 'success', details: 'Todos os documentos validados com sucesso' },
          { name: 'Análise de imagens', status: 'success', details: 'Danos identificados e classificados' },
          { name: 'Verificação de cobertura', status: 'success', details: 'Sinistro coberto pela apólice' },
          { name: 'Avaliação de fraude', status: 'success', details: 'Baixo risco de fraude (8%)' },
          { name: 'Cálculo de valor', status: 'success', details: 'Valor estimado: R$ 4.800,00' },
          { name: 'Geração de recomendação', status: 'success', details: 'Recomendação: Aprovar sinistro' },
          { name: 'Finalização', status: 'success', details: 'Processamento concluído com sucesso' }
        ],
        approvalDetails: {
          approvedAmount: 4800.00,
          paymentMethod: 'Depósito bancário',
          estimatedPaymentDate: '25/04/2025',
          repairOption: 'Oficina credenciada'
        }
      };
      
      setResults(processingResults);
      
      if (onProcessingComplete) {
        onProcessingComplete(processingResults);
      }
    } catch (err) {
      setError('Erro ao processar sinistro automaticamente. Por favor, tente novamente.');
      console.error('Erro no processamento automatizado:', err);
    } finally {
      setProcessing(false);
    }
  };
  
  return (
    <div className="space-y-4">
      {!processing && !results && (
        <div>
          <p className="text-gray-300 mb-4">
            O processamento automatizado utiliza IA para analisar todos os aspectos do sinistro e tomar decisões sem intervenção humana.
          </p>
          
          <button
            onClick={startProcessing}
            className="w-full py-2 bg-gradient-to-r from-[#6a11cb] to-[#ff5722] text-white rounded-md hover:opacity-90 transition-opacity"
          >
            Iniciar Processamento Automatizado
          </button>
        </div>
      )}
      
      {processing && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-white font-medium">Processando Sinistro</h4>
            <span className="text-sm text-gray-400">Etapa {currentStep + 1} de {steps.length}</span>
          </div>
          
          <div className="w-full bg-gray-800 rounded-full h-2.5">
            <div 
              className="h-2.5 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#ff5722]"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          
          <div className="text-center py-4">
            <div className="w-16 h-16 border-4 border-t-[#6a11cb] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white font-medium">{steps[currentStep]}</p>
            <p className="text-sm text-gray-400 mt-1">Por favor, aguarde...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="bg-red-900/20 border border-red-700/30 rounded-md p-4 mb-4">
          <p className="text-red-400">{error}</p>
        </div>
      )}
      
      {results && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-white font-medium">Processamento Concluído</h4>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              results.outcome === 'approved' ? 'bg-green-900/30 text-green-400' :
              results.outcome === 'review' ? 'bg-yellow-900/30 text-yellow-400' :
              'bg-red-900/30 text-red-400'
            }`}>
              {results.outcome === 'approved' ? 'Aprovado' : 
               results.outcome === 'review' ? 'Revisão Manual' : 'Rejeitado'}
            </span>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-md">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <span className="text-xs text-gray-400">ID do Sinistro</span>
                <p className="text-white">{results.claimId}</p>
              </div>
              <div>
                <span className="text-xs text-gray-400">Tempo de Processamento</span>
                <p className="text-white">{results.processingTime} segundos</p>
              </div>
              <div>
                <span className="text-xs text-gray-400">Nível de Automação</span>
                <p className="text-white">
                  {results.automationLevel === 'full' ? 'Totalmente Automatizado' :
                   results.automationLevel === 'partial' ? 'Parcialmente Automatizado' : 'Manual'}
                </p>
              </div>
              <div>
                <span className="text-xs text-gray-400">Status</span>
                <p className="text-white capitalize">{results.status}</p>
              </div>
            </div>
            
            <h5 className="text-sm text-white font-medium mb-2">Etapas do Processamento</h5>
            <div className="space-y-2">
              {results.steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                    step.status === 'success' ? 'bg-green-900/30 text-green-400' :
                    step.status === 'warning' ? 'bg-yellow-900/30 text-yellow-400' :
                    'bg-red-900/30 text-red-400'
                  }`}>
                    {step.status === 'success' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : step.status === 'warning' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="text-white">{step.name}</p>
                    <p className="text-sm text-gray-400">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {results.outcome === 'approved' && results.approvalDetails && (
            <div className="bg-gray-800/50 p-4 rounded-md">
              <h5 className="text-sm text-white font-medium mb-3">Detalhes da Aprovação</h5>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-xs text-gray-400">Valor Aprovado</span>
                  <p className="text-white">R$ {results.approvalDetails.approvedAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-400">Método de Pagamento</span>
                  <p className="text-white">{results.approvalDetails.paymentMethod}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-400">Data Estimada de Pagamento</span>
                  <p className="text-white">{results.approvalDetails.estimatedPaymentDate}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-400">Opção de Reparo</span>
                  <p className="text-white">{results.approvalDetails.repairOption}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex justify-end gap-3">
            <button
              onClick={startProcessing}
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Processar Novamente
            </button>
            <button
              className="px-4 py-2 bg-gradient-to-r from-[#6a11cb] to-[#ff5722] text-white rounded-md hover:opacity-90 transition-opacity"
            >
              Confirmar Resultado
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente para automação de fluxo de trabalho
export const WorkflowAutomation = ({ onComplete }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [error, setError] = useState(null);
  
  const tasks = [
    { id: 1, name: 'Verificação de documentação', description: 'Verificando se todos os documentos necessários foram enviados' },
    { id: 2, name: 'Validação de apólice', description: 'Confirmando cobertura e vigência da apólice' },
    { id: 3, name: 'Análise de imagens', description: 'Processando imagens do sinistro com IA' },
    { id: 4, name: 'Avaliação de danos', description: 'Estimando custos de reparo com base na análise de imagens' },
    { id: 5, name: 'Verificação de fraude', description: 'Analisando indicadores de risco de fraude' },
    { id: 6, name: 'Cálculo de pagamento', description: 'Determinando valor a ser pago com base na cobertura e danos' },
    { id: 7, name: 'Aprovação automática', description: 'Aprovando sinistro com base em regras predefinidas' },
    { id: 8, name: 'Notificação ao segurado', description: 'Enviando comunicação sobre aprovação do sinistro' },
    { id: 9, name: 'Agendamento de reparo', description: 'Coordenando com oficina credenciada' },
    { id: 10, name: 'Atualização de registros', description: 'Atualizando sistema com informações do sinistro' }
  ];
  
  const startAutomation = async () => {
    setIsRunning(true);
    setCurrentTask(null);
    setCompletedTasks([]);
    setError(null);
    
    try {
      for (const task of tasks) {
        setCurrentTask(task);
        
        // Simulação de execução da tarefa
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1500));
        
        setCompletedTasks(prev => [...prev, task]);
        setCurrentTask(null);
      }
      
      if (onComplete) {
        onComplete({
          status: 'success',
          tasksCompleted: tasks.length,
          timeElapsed: '00:01:23',
          outcome: 'Sinistro processado com sucesso'
        });
      }
    } catch (err) {
      setError('Erro ao executar automação de fluxo de trabalho. Por favor, tente novamente.');
      console.error('Erro na automação de fluxo:', err);
    } finally {
      setIsRunning(false);
    }
  };
  
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-white mb-4">Automação de Fluxo de Trabalho</h3>
      
      {!isRunning && completedTasks.length === 0 && (
        <div>
          <p className="text-gray-300 mb-4">
            A automação de fluxo de trabalho executa todas as etapas do processamento de sinistros de forma sequencial e automatizada.
          </p>
          
          <button
            onClick={startAutomation}
            className="w-full py-2 bg-gradient-to-r from-[#6a11cb] to-[#ff5722] text-white rounded-md hover:opacity-90 transition-opacity"
          >
            Iniciar Automação de Fluxo
          </button>
        </div>
      )}
      
      {isRunning && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-white font-medium">Executando Fluxo Automatizado</h4>
            <span className="text-sm text-gray-400">
              {completedTasks.length} de {tasks.length} tarefas concluídas
            </span>
          </div>
          
          <div className="w-full bg-gray-800 rounded-full h-2.5">
            <div 
              className="h-2.5 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#ff5722]"
              style={{ width: `${(completedTasks.length / tasks.length) * 100}%` }}
            ></div>
          </div>
          
          {currentTask && (
            <div className="bg-gray-800/50 p-4 rounded-md flex items-center">
              <div className="w-8 h-8 mr-4 flex-shrink-0">
                <div className="w-8 h-8 border-4 border-t-[#6a11cb] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
              <div>
                <p className="text-white font-medium">{currentTask.name}</p>
                <p className="text-sm text-gray-400">{currentTask.description}</p>
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            {completedTasks.map((task) => (
              <div key={task.id} className="bg-gray-800/50 p-3 rounded-md flex items-center">
                <div className="w-6 h-6 bg-green-900/30 text-green-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-white">{task.name}</p>
                  <p className="text-sm text-gray-400">{task.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {error && (
        <div className="bg-red-900/20 border border-red-700/30 rounded-md p-4 mb-4">
          <p className="text-red-400">{error}</p>
        </div>
      )}
      
      {!isRunning && completedTasks.length === tasks.length && (
        <div className="space-y-4">
          <div className="bg-green-900/20 border border-green-700/30 rounded-md p-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-900/30 text-green-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-green-400 font-medium">Fluxo de trabalho concluído com sucesso</p>
                <p className="text-sm text-green-500/70">Todas as tarefas foram executadas automaticamente</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-md">
            <h5 className="text-sm text-white font-medium mb-3">Resumo da Execução</h5>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-xs text-gray-400">Tarefas Concluídas</span>
                <p className="text-white">{tasks.length} de {tasks.length}</p>
              </div>
              <div>
                <span className="text-xs text-gray-400">Tempo Total</span>
                <p className="text-white">00:01:23</p>
              </div>
              <div>
                <span className="text-xs text-gray-400">Taxa de Sucesso</span>
                <p className="text-white">100%</p>
              </div>
              <div>
                <span className="text-xs text-gray-400">Intervenção Humana</span>
                <p className="text-white">Nenhuma</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <button
              onClick={startAutomation}
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Executar Novamente
            </button>
            <button
              className="px-4 py-2 bg-gradient-to-r from-[#6a11cb] to-[#ff5722] text-white rounded-md hover:opacity-90 transition-opacity"
            >
              Ver Relatório Detalhado
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente para monitoramento de SLA
export const SLAMonitoring = () => {
  const [timeframe, setTimeframe] = useState('day');
  
  // Dados simulados de SLA
  const slaData = {
    day: {
      averageProcessingTime: '1h 23min',
      slaCompliance: 97.5,
      totalClaims: 42,
      withinSLA: 41,
      outsideSLA: 1,
      byStage: [
        { stage: 'Recebimento', target: '15min', actual: '12min', compliance: 100 },
        { stage: 'Análise Inicial', target: '30min', actual: '28min', compliance: 98 },
        { stage: 'Avaliação de Danos', target: '1h', actual: '52min', compliance: 100 },
        { stage: 'Aprovação', target: '30min', actual: '25min', compliance: 100 },
        { stage: 'Pagamento', target: '24h', actual: '22h', compliance: 95 }
      ]
    },
    week: {
      averageProcessingTime: '1h 45min',
      slaCompliance: 94.2,
      totalClaims: 287,
      withinSLA: 270,
      outsideSLA: 17,
      byStage: [
        { stage: 'Recebimento', target: '15min', actual: '14min', compliance: 98 },
        { stage: 'Análise Inicial', target: '30min', actual: '32min', compliance: 92 },
        { stage: 'Avaliação de Danos', target: '1h', actual: '58min', compliance: 97 },
        { stage: 'Aprovação', target: '30min', actual: '28min', compliance: 96 },
        { stage: 'Pagamento', target: '24h', actual: '23h', compliance: 93 }
      ]
    },
    month: {
      averageProcessingTime: '1h 52min',
      slaCompliance: 92.8,
      totalClaims: 1243,
      withinSLA: 1153,
      outsideSLA: 90,
      byStage: [
        { stage: 'Recebimento', target: '15min', actual: '14min', compliance: 97 },
        { stage: 'Análise Inicial', target: '30min', actual: '34min', compliance: 89 },
        { stage: 'Avaliação de Danos', target: '1h', actual: '1h 5min', compliance: 92 },
        { stage: 'Aprovação', target: '30min', actual: '32min', compliance: 94 },
        { stage: 'Pagamento', target: '24h', actual: '25h', compliance: 91 }
      ]
    }
  };
  
  const currentData = slaData[timeframe];
  
  return (
    <div className="glass-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium text-white">Monitoramento de SLA</h3>
        
        <div className="flex bg-gray-800 rounded-md overflow-hidden">
          <button
            onClick={() => setTimeframe('day')}
            className={`px-3 py-1 text-sm ${
              timeframe === 'day' 
                ? 'bg-gradient-to-r from-[#6a11cb] to-[#ff5722] text-white' 
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            Hoje
          </button>
          <button
            onClick={() => setTimeframe('week')}
            className={`px-3 py-1 text-sm ${
              timeframe === 'week' 
                ? 'bg-gradient-to-r from-[#6a11cb] to-[#ff5722] text-white' 
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            Semana
          </button>
          <button
            onClick={() => setTimeframe('month')}
            className={`px-3 py-1 text-sm ${
              timeframe === 'month' 
                ? 'bg-gradient-to-r from-[#6a11cb] to-[#ff5722] text-white' 
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            Mês
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800/50 p-4 rounded-md">
          <h4 className="text-gray-400 text-sm mb-1">Tempo Médio de Processamento</h4>
          <p className="text-white text-2xl font-medium">{currentData.averageProcessingTime}</p>
        </div>
        
        <div className="bg-gray-800/50 p-4 rounded-md">
          <h4 className="text-gray-400 text-sm mb-1">Conformidade com SLA</h4>
          <p className="text-white text-2xl font-medium">{currentData.slaCompliance}%</p>
        </div>
        
        <div className="bg-gray-800/50 p-4 rounded-md">
          <h4 className="text-gray-400 text-sm mb-1">Total de Sinistros</h4>
          <div className="flex items-end">
            <p className="text-white text-2xl font-medium">{currentData.totalClaims}</p>
            <div className="flex text-sm ml-4">
              <span className="text-green-400 mr-2">{currentData.withinSLA} dentro</span>
              <span className="text-red-400">{currentData.outsideSLA} fora</span>
            </div>
          </div>
        </div>
      </div>
      
      <h4 className="text-white font-medium mb-3">SLA por Etapa do Processo</h4>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-800/70">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Etapa</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Meta</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Atual</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Conformidade</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-300">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {currentData.byStage.map((stage, index) => (
              <tr key={index} className="hover:bg-gray-800/30">
                <td className="px-4 py-3 text-white">{stage.stage}</td>
                <td className="px-4 py-3 text-white">{stage.target}</td>
                <td className="px-4 py-3 text-white">{stage.actual}</td>
                <td className="px-4 py-3 text-white">{stage.compliance}%</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    stage.compliance >= 95 ? 'bg-green-900/30 text-green-400' :
                    stage.compliance >= 90 ? 'bg-yellow-900/30 text-yellow-400' :
                    'bg-red-900/30 text-red-400'
                  }`}>
                    {stage.compliance >= 95 ? 'Excelente' :
                     stage.compliance >= 90 ? 'Adequado' : 'Atenção'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
