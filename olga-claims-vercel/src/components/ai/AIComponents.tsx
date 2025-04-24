"use client";

import React, { useState } from 'react';
import { useClaimsStore } from '@/hooks/useStore';

// Componente para análise de imagens de sinistros
export const ImageAnalysis = ({ imageUrl, onAnalysisComplete }) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  
  const startAnalysis = async () => {
    setAnalyzing(true);
    setError(null);
    
    try {
      // Simulação de análise de imagem com IA
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Resultados simulados da análise
      const analysisResults = {
        damageDetected: true,
        damageAreas: [
          { area: 'Para-choque dianteiro', severity: 'Alta', confidence: 0.94 },
          { area: 'Farol dianteiro esquerdo', severity: 'Média', confidence: 0.87 },
          { area: 'Capô', severity: 'Baixa', confidence: 0.72 }
        ],
        vehicleInfo: {
          make: 'Toyota',
          model: 'Corolla',
          year: '2022',
          color: 'Prata',
          confidence: 0.96
        },
        estimatedCost: {
          min: 4500,
          max: 6800,
          currency: 'BRL'
        },
        fraudProbability: 0.03
      };
      
      setResults(analysisResults);
      
      if (onAnalysisComplete) {
        onAnalysisComplete(analysisResults);
      }
    } catch (err) {
      setError('Erro ao analisar imagem. Por favor, tente novamente.');
      console.error('Erro na análise de imagem:', err);
    } finally {
      setAnalyzing(false);
    }
  };
  
  return (
    <div className="glass-card p-6">
      <h3 className="font-medium text-white mb-4">Análise de Imagem com IA</h3>
      
      {imageUrl && (
        <div className="mb-4">
          <img 
            src={imageUrl} 
            alt="Imagem do sinistro" 
            className="w-full h-48 object-cover rounded-md mb-2"
          />
        </div>
      )}
      
      {!analyzing && !results && (
        <button
          onClick={startAnalysis}
          disabled={!imageUrl}
          className={`w-full py-2 rounded-md ${
            !imageUrl 
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-[#6a11cb] to-[#ff5722] text-white hover:opacity-90 transition-opacity'
          }`}
        >
          Iniciar Análise de Imagem
        </button>
      )}
      
      {analyzing && (
        <div className="text-center py-4">
          <div className="w-12 h-12 border-4 border-t-[#6a11cb] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Analisando imagem com IA...</p>
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
            <h4 className="text-white font-medium">Danos Detectados</h4>
            <span className={`px-2 py-1 rounded-full text-xs ${
              results.damageDetected 
                ? 'bg-red-900/30 text-red-400' 
                : 'bg-green-900/30 text-green-400'
            }`}>
              {results.damageDetected ? 'Danos Encontrados' : 'Sem Danos'}
            </span>
          </div>
          
          {results.damageAreas && results.damageAreas.length > 0 && (
            <div>
              <h5 className="text-sm text-gray-400 mb-2">Áreas Afetadas</h5>
              <div className="space-y-2">
                {results.damageAreas.map((damage, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-800/50 p-2 rounded-md">
                    <div>
                      <span className="text-white">{damage.area}</span>
                      <div className="flex items-center mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          damage.severity === 'Alta' ? 'bg-red-900/30 text-red-400' :
                          damage.severity === 'Média' ? 'bg-yellow-900/30 text-yellow-400' :
                          'bg-blue-900/30 text-blue-400'
                        }`}>
                          {damage.severity}
                        </span>
                        <span className="text-xs text-gray-400 ml-2">
                          {Math.round(damage.confidence * 100)}% confiança
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {results.vehicleInfo && (
            <div>
              <h5 className="text-sm text-gray-400 mb-2">Informações do Veículo</h5>
              <div className="bg-gray-800/50 p-3 rounded-md">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-xs text-gray-400">Marca</span>
                    <p className="text-white">{results.vehicleInfo.make}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">Modelo</span>
                    <p className="text-white">{results.vehicleInfo.model}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">Ano</span>
                    <p className="text-white">{results.vehicleInfo.year}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">Cor</span>
                    <p className="text-white">{results.vehicleInfo.color}</p>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  Confiança: {Math.round(results.vehicleInfo.confidence * 100)}%
                </div>
              </div>
            </div>
          )}
          
          {results.estimatedCost && (
            <div>
              <h5 className="text-sm text-gray-400 mb-2">Custo Estimado do Reparo</h5>
              <div className="bg-gray-800/50 p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <span className="text-white">Faixa de Valor:</span>
                  <span className="text-white font-medium">
                    R$ {results.estimatedCost.min.toLocaleString('pt-BR')} - R$ {results.estimatedCost.max.toLocaleString('pt-BR')}
                  </span>
                </div>
              </div>
            </div>
          )}
          
          {results.fraudProbability !== undefined && (
            <div>
              <h5 className="text-sm text-gray-400 mb-2">Análise de Risco</h5>
              <div className="bg-gray-800/50 p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <span className="text-white">Probabilidade de Fraude:</span>
                  <span className={`text-sm px-2 py-0.5 rounded-full ${
                    results.fraudProbability < 0.1 ? 'bg-green-900/30 text-green-400' :
                    results.fraudProbability < 0.3 ? 'bg-yellow-900/30 text-yellow-400' :
                    'bg-red-900/30 text-red-400'
                  }`}>
                    {Math.round(results.fraudProbability * 100)}%
                  </span>
                </div>
              </div>
            </div>
          )}
          
          <div className="pt-2">
            <button
              onClick={startAnalysis}
              className="w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Analisar Novamente
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente para análise de documentos
export const DocumentAnalysis = ({ documentUrl, documentType, onAnalysisComplete }) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  
  const startAnalysis = async () => {
    setAnalyzing(true);
    setError(null);
    
    try {
      // Simulação de análise de documento com IA
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Resultados simulados da análise baseados no tipo de documento
      let analysisResults;
      
      switch (documentType) {
        case 'policy':
          analysisResults = {
            documentType: 'Apólice de Seguro',
            extractedData: {
              policyNumber: 'APL-2023-78542',
              insuredName: 'Maria Silva',
              cpf: '123.456.789-00',
              vehicleInfo: {
                make: 'Toyota',
                model: 'Corolla',
                year: '2022',
                plate: 'ABC1D23',
                chassis: '9BRBL3HE1J0123456'
              },
              coverages: [
                { type: 'Colisão', value: 'R$ 100.000,00' },
                { type: 'Roubo/Furto', value: 'R$ 100.000,00' },
                { type: 'Terceiros', value: 'R$ 50.000,00' },
                { type: 'Vidros', value: 'Incluído' }
              ],
              validFrom: '01/01/2025',
              validTo: '31/12/2025'
            },
            confidence: 0.96,
            validDocument: true
          };
          break;
          
        case 'police_report':
          analysisResults = {
            documentType: 'Boletim de Ocorrência',
            extractedData: {
              reportNumber: 'BO-12345/2025',
              date: '22/04/2025',
              time: '14:30',
              location: 'Av. Paulista com Rua Augusta, São Paulo/SP',
              description: 'Colisão traseira em semáforo. Veículo A colidiu na traseira do Veículo B quando este freou no semáforo.',
              vehicles: [
                { plate: 'ABC1D23', make: 'Toyota', model: 'Corolla', driver: 'Maria Silva' },
                { plate: 'XYZ9W87', make: 'Honda', model: 'Civic', driver: 'João Pereira' }
              ],
              injuries: 'Sem feridos',
              witnesses: ['Ana Souza', 'Carlos Oliveira']
            },
            confidence: 0.92,
            validDocument: true
          };
          break;
          
        case 'invoice':
          analysisResults = {
            documentType: 'Nota Fiscal',
            extractedData: {
              invoiceNumber: 'NF-e 123456',
              date: '23/04/2025',
              provider: 'Auto Center Reparos Ltda',
              cnpj: '12.345.678/0001-90',
              items: [
                { description: 'Substituição para-choque dianteiro', value: 'R$ 2.500,00' },
                { description: 'Pintura para-choque', value: 'R$ 800,00' },
                { description: 'Substituição farol esquerdo', value: 'R$ 1.200,00' },
                { description: 'Alinhamento e balanceamento', value: 'R$ 300,00' }
              ],
              totalValue: 'R$ 4.800,00'
            },
            confidence: 0.94,
            validDocument: true
          };
          break;
          
        default:
          analysisResults = {
            documentType: 'Documento Desconhecido',
            extractedData: {
              text: 'Conteúdo extraído do documento...'
            },
            confidence: 0.70,
            validDocument: false
          };
      }
      
      setResults(analysisResults);
      
      if (onAnalysisComplete) {
        onAnalysisComplete(analysisResults);
      }
    } catch (err) {
      setError('Erro ao analisar documento. Por favor, tente novamente.');
      console.error('Erro na análise de documento:', err);
    } finally {
      setAnalyzing(false);
    }
  };
  
  return (
    <div className="glass-card p-6">
      <h3 className="font-medium text-white mb-4">Análise de Documento com IA</h3>
      
      {documentUrl && (
        <div className="mb-4">
          <div className="w-full h-48 bg-gray-800 rounded-md flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-sm text-gray-400 truncate">{documentUrl.split('/').pop()}</p>
        </div>
      )}
      
      {!analyzing && !results && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">Tipo de Documento</label>
            <select
              value={documentType}
              disabled
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#6a11cb]"
            >
              <option value="policy">Apólice de Seguro</option>
              <option value="police_report">Boletim de Ocorrência</option>
              <option value="invoice">Nota Fiscal</option>
              <option value="other">Outro</option>
            </select>
          </div>
          
          <button
            onClick={startAnalysis}
            disabled={!documentUrl}
            className={`w-full py-2 rounded-md ${
              !documentUrl 
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-[#6a11cb] to-[#ff5722] text-white hover:opacity-90 transition-opacity'
            }`}
          >
            Iniciar Análise de Documento
          </button>
        </div>
      )}
      
      {analyzing && (
        <div className="text-center py-4">
          <div className="w-12 h-12 border-4 border-t-[#6a11cb] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Analisando documento com IA...</p>
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
            <h4 className="text-white font-medium">{results.documentType}</h4>
            <span className={`px-2 py-1 rounded-full text-xs ${
              results.validDocument 
                ? 'bg-green-900/30 text-green-400' 
                : 'bg-red-900/30 text-red-400'
            }`}>
              {results.validDocument ? 'Documento Válido' : 'Documento Inválido'}
            </span>
          </div>
          
          <div>
            <h5 className="text-sm text-gray-400 mb-2">Dados Extraídos</h5>
            <div className="bg-gray-800/50 p-3 rounded-md">
              {documentType === 'policy' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-xs text-gray-400">Número da Apólice</span>
                      <p className="text-white">{results.extractedData.policyNumber}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400">Segurado</span>
                      <p className="text-white">{results.extractedData.insuredName}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400">CPF</span>
                      <p className="text-white">{results.extractedData.cpf}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400">Vigência</span>
                      <p className="text-white">{results.extractedData.validFrom} a {results.extractedData.validTo}</p>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-xs text-gray-400">Veículo</span>
                    <p className="text-white">
                      {results.extractedData.vehicleInfo.make} {results.extractedData.vehicleInfo.model} ({results.extractedData.vehicleInfo.year})
                    </p>
                    <p className="text-sm text-gray-400">
                      Placa: {results.extractedData.vehicleInfo.plate} | Chassi: {results.extractedData.vehicleInfo.chassis}
                    </p>
                  </div>
                  
                  <div>
                    <span className="text-xs text-gray-400">Coberturas</span>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      {results.extractedData.coverages.map((coverage, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-sm text-gray-300">{coverage.type}:</span>
                          <span className="text-sm text-white">{coverage.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {documentType === 'police_report' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-xs text-gray-400">Número do B.O.</span>
                      <p className="text-white">{results.extractedData.reportNumber}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400">Data e Hora</span>
                      <p className="text-white">{results.extractedData.date} às {results.extractedData.time}</p>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-xs text-gray-400">Local</span>
                    <p className="text-white">{results.extractedData.location}</p>
                  </div>
                  
                  <div>
                    <span className="text-xs text-gray-400">Descrição</span>
                    <p className="text-white">{results.extractedData.description}</p>
                  </div>
                  
                  <div>
                    <span className="text-xs text-gray-400">Veículos Envolvidos</span>
                    <div className="space-y-2 mt-1">
                      {results.extractedData.vehicles.map((vehicle, index) => (
                        <div key={index} className="bg-gray-800 p-2 rounded">
                          <p className="text-white">
                            {vehicle.make} {vehicle.model} - Placa: {vehicle.plate}
                          </p>
                          <p className="text-sm text-gray-400">
                            Condutor: {vehicle.driver}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {documentType === 'invoice' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-xs text-gray-400">Número da Nota</span>
                      <p className="text-white">{results.extractedData.invoiceNumber}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400">Data</span>
                      <p className="text-white">{results.extractedData.date}</p>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-xs text-gray-400">Fornecedor</span>
                    <p className="text-white">{results.extractedData.provider}</p>
                    <p className="text-sm text-gray-400">CNPJ: {results.extractedData.cnpj}</p>
                  </div>
                  
                  <div>
                    <span className="text-xs text-gray-400">Itens</span>
                    <div className="space-y-1 mt-1">
                      {results.extractedData.items.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-sm text-gray-300">{item.description}</span>
                          <span className="text-sm text-white">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between font-medium">
                    <span className="text-white">Total:</span>
                    <span className="text-white">{results.extractedData.totalValue}</span>
                  </div>
                </div>
              )}
              
              {documentType === 'other' && (
                <div>
                  <p className="text-white whitespace-pre-line">{results.extractedData.text}</p>
                </div>
              )}
            </div>
            <div className="mt-2 text-xs text-gray-400 text-right">
              Confiança: {Math.round(results.confidence * 100)}%
            </div>
          </div>
          
          <div className="pt-2">
            <button
              onClick={startAnalysis}
              className="w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Analisar Novamente
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente para detecção de fraudes
export const FraudAnalysis = ({ claimData, onAnalysisComplete }) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  
  const startAnalysis = async () => {
    setAnalyzing(true);
    setError(null);
    
    try {
      // Simulação de análise de fraude com IA
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Resultados simulados da análise
      const analysisResults = {
        overallRisk: 'Baixo',
        riskScore: 0.08,
        confidenceLevel: 0.95,
        riskFactors: [
          { factor: 'Histórico de sinistros recentes', risk: 'Médio', score: 0.35, details: 'Dois sinistros nos últimos 12 meses' },
          { factor: 'Valor do sinistro vs. valor do veículo', risk: 'Baixo', score: 0.12, details: 'Valor do sinistro representa 15% do valor do veículo' },
          { factor: 'Tempo entre contratação e sinistro', risk: 'Baixo', score: 0.05, details: 'Apólice ativa há mais de 2 anos' },
          { factor: 'Consistência da documentação', risk: 'Baixo', score: 0.03, details: 'Documentação completa e consistente' },
          { factor: 'Padrões de comportamento', risk: 'Baixo', score: 0.07, details: 'Comportamento consistente com perfil do segurado' }
        ],
        recommendations: [
          'Prosseguir com o processamento normal do sinistro',
          'Não é necessária investigação adicional'
        ]
      };
      
      setResults(analysisResults);
      
      if (onAnalysisComplete) {
        onAnalysisComplete(analysisResults);
      }
    } catch (err) {
      setError('Erro ao realizar análise de fraude. Por favor, tente novamente.');
      console.error('Erro na análise de fraude:', err);
    } finally {
      setAnalyzing(false);
    }
  };
  
  return (
    <div className="glass-card p-6">
      <h3 className="font-medium text-white mb-4">Análise de Fraude com IA</h3>
      
      {!analyzing && !results && (
        <div>
          <p className="text-gray-300 mb-4">
            A análise de fraude utiliza inteligência artificial para avaliar múltiplos fatores de risco e identificar possíveis inconsistências no sinistro.
          </p>
          
          <button
            onClick={startAnalysis}
            className="w-full py-2 bg-gradient-to-r from-[#6a11cb] to-[#ff5722] text-white rounded-md hover:opacity-90 transition-opacity"
          >
            Iniciar Análise de Fraude
          </button>
        </div>
      )}
      
      {analyzing && (
        <div className="text-center py-4">
          <div className="w-12 h-12 border-4 border-t-[#6a11cb] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Analisando padrões e fatores de risco...</p>
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
            <h4 className="text-white font-medium">Resultado da Análise</h4>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              results.overallRisk === 'Baixo' ? 'bg-green-900/30 text-green-400' :
              results.overallRisk === 'Médio' ? 'bg-yellow-900/30 text-yellow-400' :
              'bg-red-900/30 text-red-400'
            }`}>
              Risco {results.overallRisk}
            </span>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white">Score de Risco:</span>
              <span className="text-white font-medium">{Math.round(results.riskScore * 100)}%</span>
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
              <div 
                className={`h-2.5 rounded-full ${
                  results.riskScore < 0.3 ? 'bg-green-500' :
                  results.riskScore < 0.7 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${Math.round(results.riskScore * 100)}%` }}
              ></div>
            </div>
            
            <div className="text-xs text-gray-400 text-right">
              Nível de confiança: {Math.round(results.confidenceLevel * 100)}%
            </div>
          </div>
          
          <div>
            <h5 className="text-sm text-white font-medium mb-2">Fatores de Risco Analisados</h5>
            <div className="space-y-2">
              {results.riskFactors.map((factor, index) => (
                <div key={index} className="bg-gray-800/50 p-3 rounded-md">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white">{factor.factor}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      factor.risk === 'Baixo' ? 'bg-green-900/30 text-green-400' :
                      factor.risk === 'Médio' ? 'bg-yellow-900/30 text-yellow-400' :
                      'bg-red-900/30 text-red-400'
                    }`}>
                      {factor.risk}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{factor.details}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-sm text-white font-medium mb-2">Recomendações</h5>
            <ul className="space-y-1 pl-5 list-disc">
              {results.recommendations.map((recommendation, index) => (
                <li key={index} className="text-gray-300">{recommendation}</li>
              ))}
            </ul>
          </div>
          
          <div className="pt-2">
            <button
              onClick={startAnalysis}
              className="w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Atualizar Análise
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente para recomendações automáticas
export const ClaimRecommendation = ({ claimData, onRecommendationComplete }) => {
  const [generating, setGenerating] = useState(false);
  const [recommendation, setRecommendation] = useState(null);
  const [error, setError] = useState(null);
  
  const generateRecommendation = async () => {
    setGenerating(true);
    setError(null);
    
    try {
      // Simulação de geração de recomendação com IA
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Recomendação simulada
      const recommendationResult = {
        action: 'approve',
        actionLabel: 'Aprovar Sinistro',
        confidence: 0.92,
        reasoning: [
          'Documentação completa e consistente',
          'Análise de imagens confirma danos compatíveis com o relatado',
          'Baixo risco de fraude (8%)',
          'Cobertura confirmada para o tipo de sinistro',
          'Valor dentro da faixa esperada para este tipo de dano'
        ],
        nextSteps: [
          'Aprovar pagamento no valor de R$ 4.800,00',
          'Enviar notificação ao segurado sobre aprovação',
          'Encaminhar para oficina credenciada mais próxima'
        ],
        additionalInfo: {
          estimatedProcessingTime: '2 dias úteis',
          paymentMethod: 'Depósito em conta bancária',
          repairOptions: ['Oficina da rede credenciada', 'Reembolso mediante nota fiscal']
        }
      };
      
      setRecommendation(recommendationResult);
      
      if (onRecommendationComplete) {
        onRecommendationComplete(recommendationResult);
      }
    } catch (err) {
      setError('Erro ao gerar recomendação. Por favor, tente novamente.');
      console.error('Erro na geração de recomendação:', err);
    } finally {
      setGenerating(false);
    }
  };
  
  return (
    <div className="glass-card p-6">
      <h3 className="font-medium text-white mb-4">Recomendação Automática</h3>
      
      {!generating && !recommendation && (
        <div>
          <p className="text-gray-300 mb-4">
            A recomendação automática utiliza inteligência artificial para analisar todos os dados do sinistro e sugerir a melhor ação a ser tomada.
          </p>
          
          <button
            onClick={generateRecommendation}
            className="w-full py-2 bg-gradient-to-r from-[#6a11cb] to-[#ff5722] text-white rounded-md hover:opacity-90 transition-opacity"
          >
            Gerar Recomendação
          </button>
        </div>
      )}
      
      {generating && (
        <div className="text-center py-4">
          <div className="w-12 h-12 border-4 border-t-[#6a11cb] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Gerando recomendação com base em todos os dados disponíveis...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-900/20 border border-red-700/30 rounded-md p-4 mb-4">
          <p className="text-red-400">{error}</p>
        </div>
      )}
      
      {recommendation && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-white font-medium">Recomendação</h4>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              recommendation.action === 'approve' ? 'bg-green-900/30 text-green-400' :
              recommendation.action === 'review' ? 'bg-yellow-900/30 text-yellow-400' :
              'bg-red-900/30 text-red-400'
            }`}>
              {recommendation.actionLabel}
            </span>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white">Confiança na recomendação:</span>
              <span className="text-white font-medium">{Math.round(recommendation.confidence * 100)}%</span>
            </div>
            
            <h5 className="text-sm text-white font-medium mb-2">Justificativa</h5>
            <ul className="space-y-1 pl-5 list-disc mb-4">
              {recommendation.reasoning.map((reason, index) => (
                <li key={index} className="text-gray-300">{reason}</li>
              ))}
            </ul>
            
            <h5 className="text-sm text-white font-medium mb-2">Próximos Passos</h5>
            <ul className="space-y-1 pl-5 list-disc">
              {recommendation.nextSteps.map((step, index) => (
                <li key={index} className="text-gray-300">{step}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-md">
            <h5 className="text-sm text-white font-medium mb-2">Informações Adicionais</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <span className="text-xs text-gray-400">Tempo estimado de processamento</span>
                <p className="text-white">{recommendation.additionalInfo.estimatedProcessingTime}</p>
              </div>
              <div>
                <span className="text-xs text-gray-400">Método de pagamento</span>
                <p className="text-white">{recommendation.additionalInfo.paymentMethod}</p>
              </div>
            </div>
            
            <div className="mt-3">
              <span className="text-xs text-gray-400">Opções de reparo</span>
              <ul className="space-y-1 pl-5 list-disc mt-1">
                {recommendation.additionalInfo.repairOptions.map((option, index) => (
                  <li key={index} className="text-sm text-white">{option}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <button
              onClick={generateRecommendation}
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Atualizar Recomendação
            </button>
            <button
              className="px-4 py-2 bg-gradient-to-r from-[#6a11cb] to-[#ff5722] text-white rounded-md hover:opacity-90 transition-opacity"
            >
              Aceitar Recomendação
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
