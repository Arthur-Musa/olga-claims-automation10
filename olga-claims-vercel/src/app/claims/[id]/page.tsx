import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import Badge from '@/components/common/Badge';

export default function ClaimDetail() {
  return (
    <DashboardLayout>
      <Header 
        title="Detalhes do Sinistro" 
        subtitle="SIN-2025-0042 • Colisão em cruzamento"
      />
      
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Badge variant="info">Em Análise</Badge>
          <Badge variant="warning">Alta Prioridade</Badge>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline">Rejeitar</Button>
          <Button variant="primary">Aprovar</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="glass-card p-6 lg:col-span-2">
          <h3 className="font-medium text-white mb-4">Informações do Sinistro</h3>
          
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
            <div>
              <div className="text-sm text-gray-400">Cliente</div>
              <div className="font-medium">João Silva</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Apólice</div>
              <div className="font-medium">APL-2024-78542</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Data do Sinistro</div>
              <div className="font-medium">22/04/2025</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Data de Abertura</div>
              <div className="font-medium">22/04/2025</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Tipo</div>
              <div className="font-medium">Auto</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Valor Estimado</div>
              <div className="font-medium">R$ 12.500,00</div>
            </div>
          </div>
          
          <h4 className="font-medium text-white mb-2">Descrição</h4>
          <p className="text-gray-300 mb-6">
            Colisão em cruzamento da Av. Paulista com Rua Augusta. O segurado estava trafegando pela Av. Paulista quando um veículo terceiro avançou o sinal vermelho, resultando em colisão lateral. Danos na porta do motorista, para-lama e farol dianteiro esquerdo. Não houve vítimas.
          </p>
          
          <h4 className="font-medium text-white mb-2">Veículo</h4>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <div className="text-sm text-gray-400">Marca/Modelo</div>
              <div className="font-medium">Toyota Corolla XEi</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Ano</div>
              <div className="font-medium">2023</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Placa</div>
              <div className="font-medium">ABC-1234</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Chassi</div>
              <div className="font-medium">9BRBL*********1234</div>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6">
          <h3 className="font-medium text-white mb-4">Análise Automática</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <div className="text-sm text-gray-400">Cobertura</div>
                <Badge variant="success">Confirmada</Badge>
              </div>
              <div className="text-sm">Cobertura de colisão válida e ativa</div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <div className="text-sm text-gray-400">Consistência</div>
                <Badge variant="success">Alta</Badge>
              </div>
              <div className="text-sm">Dados consistentes com histórico</div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <div className="text-sm text-gray-400">Análise de Imagens</div>
                <Badge variant="success">Compatível</Badge>
              </div>
              <div className="text-sm">Danos compatíveis com relato</div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <div className="text-sm text-gray-400">Risco de Fraude</div>
                <Badge variant="success">Baixo</Badge>
              </div>
              <div className="text-sm">Nenhum padrão suspeito identificado</div>
            </div>
            
            <div className="pt-4 border-t border-gray-800">
              <div className="text-sm text-gray-400 mb-2">Recomendação do Sistema</div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-green-500"></div>
                <div className="font-medium">Aprovação Recomendada</div>
              </div>
              <div className="text-sm text-gray-400 mt-1">Confiança: 92%</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="glass-card p-6 lg:col-span-2">
          <h3 className="font-medium text-white mb-4">Documentos e Evidências</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-800 bg-opacity-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500 bg-opacity-10 text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Foto frontal do veículo</div>
                  <div className="text-xs text-gray-400">Enviado em 22/04/2025, 14:32</div>
                </div>
              </div>
              <Button variant="outline" size="sm">Visualizar</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 bg-opacity-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500 bg-opacity-10 text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Foto lateral esquerda</div>
                  <div className="text-xs text-gray-400">Enviado em 22/04/2025, 14:33</div>
                </div>
              </div>
              <Button variant="outline" size="sm">Visualizar</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 bg-opacity-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500 bg-opacity-10 text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Detalhe do dano no para-lama</div>
                  <div className="text-xs text-gray-400">Enviado em 22/04/2025, 14:35</div>
                </div>
              </div>
              <Button variant="outline" size="sm">Visualizar</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 bg-opacity-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500 bg-opacity-10 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Boletim de Ocorrência</div>
                  <div className="text-xs text-gray-400">Enviado em 22/04/2025, 14:40</div>
                </div>
              </div>
              <Button variant="outline" size="sm">Visualizar</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 bg-opacity-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500 bg-opacity-10 text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Orçamento da oficina</div>
                  <div className="text-xs text-gray-400">Enviado em 22/04/2025, 16:15</div>
                </div>
              </div>
              <Button variant="outline" size="sm">Visualizar</Button>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6">
          <h3 className="font-medium text-white mb-4">Histórico de Atividades</h3>
          
          <div className="relative pl-6 pb-6 border-l border-gray-700">
            <div className="mb-4">
              <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-[#6a11cb]"></div>
              <div className="text-sm font-medium">Sinistro Aberto</div>
              <div className="text-xs text-gray-400">22/04/2025, 14:30</div>
              <div className="text-sm mt-1">Cliente reportou sinistro via aplicativo</div>
            </div>
            
            <div className="mb-4">
              <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-gray-600"></div>
              <div className="text-sm font-medium">Documentos Enviados</div>
              <div className="text-xs text-gray-400">22/04/2025, 14:40</div>
              <div className="text-sm mt-1">5 documentos enviados pelo cliente</div>
            </div>
            
            <div className="mb-4">
              <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-gray-600"></div>
              <div className="text-sm font-medium">Análise Automática</div>
              <div className="text-xs text-gray-400">22/04/2025, 14:45</div>
              <div className="text-sm mt-1">Sistema recomendou aprovação (92%)</div>
            </div>
            
            <div className="mb-4">
              <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-gray-600"></div>
              <div className="text-sm font-medium">Encaminhado para Análise</div>
              <div className="text-xs text-gray-400">22/04/2025, 14:50</div>
              <div className="text-sm mt-1">Atribuído a Ana Silva</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 mb-6">
        <h3 className="font-medium text-white mb-4">Adicionar Comentário</h3>
        
        <div className="mb-4">
          <Input
            placeholder="Digite seu comentário ou observação..."
            className="mb-0"
          />
        </div>
        
        <div className="flex justify-end">
          <Button variant="primary">Adicionar Comentário</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
