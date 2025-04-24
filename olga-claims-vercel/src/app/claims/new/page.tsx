import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import Tabs from '@/components/common/Tabs';

export default function NewClaim() {
  return (
    <DashboardLayout>
      <Header 
        title="Novo Sinistro" 
        subtitle="Registrar um novo sinistro no sistema"
      />
      
      <div className="glass-card p-6 mb-6">
        <h3 className="font-medium text-white mb-4">Informações do Segurado</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input
            label="Número da Apólice"
            placeholder="Ex: APL-2024-78542"
            required
          />
          
          <div className="flex gap-4">
            <Button variant="outline" size="sm" className="self-end">
              Buscar
            </Button>
            
            <Button variant="outline" size="sm" className="self-end">
              Escanear QR Code
            </Button>
          </div>
          
          <Input
            label="Nome do Segurado"
            placeholder="Nome completo"
            required
          />
          
          <Input
            label="CPF/CNPJ"
            placeholder="000.000.000-00"
            required
          />
          
          <Input
            label="E-mail"
            type="email"
            placeholder="email@exemplo.com"
          />
          
          <Input
            label="Telefone"
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>
      
      <div className="glass-card p-6 mb-6">
        <h3 className="font-medium text-white mb-4">Informações do Sinistro</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Select
            label="Tipo de Sinistro"
            options={[
              { value: 'auto_colisao', label: 'Auto - Colisão' },
              { value: 'auto_roubo', label: 'Auto - Roubo/Furto' },
              { value: 'auto_incendio', label: 'Auto - Incêndio' },
              { value: 'auto_terceiros', label: 'Auto - Danos a Terceiros' },
              { value: 'residencial_incendio', label: 'Residencial - Incêndio' },
              { value: 'residencial_roubo', label: 'Residencial - Roubo/Furto' },
              { value: 'residencial_danos', label: 'Residencial - Danos Elétricos' },
              { value: 'residencial_alagamento', label: 'Residencial - Alagamento' },
              { value: 'empresarial_incendio', label: 'Empresarial - Incêndio' },
              { value: 'empresarial_roubo', label: 'Empresarial - Roubo/Furto' },
              { value: 'empresarial_danos', label: 'Empresarial - Danos Elétricos' },
              { value: 'vida_morte', label: 'Vida - Morte Natural' },
              { value: 'vida_acidente', label: 'Vida - Morte Acidental' },
              { value: 'vida_invalidez', label: 'Vida - Invalidez' }
            ]}
            placeholder="Selecione o tipo de sinistro"
            required
          />
          
          <Input
            label="Data do Sinistro"
            type="date"
            required
          />
          
          <Input
            label="Local do Sinistro"
            placeholder="Endereço completo"
            required
          />
          
          <Input
            label="Valor Estimado (R$)"
            type="number"
            placeholder="0,00"
          />
          
          <div className="md:col-span-2">
            <Input
              label="Descrição do Sinistro"
              placeholder="Descreva detalhadamente como ocorreu o sinistro..."
              required
            />
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 mb-6">
        <h3 className="font-medium text-white mb-4">Informações do Bem</h3>
        
        <Tabs 
          tabs={[
            { id: 'auto', label: 'Automóvel' },
            { id: 'residencial', label: 'Residencial' },
            { id: 'empresarial', label: 'Empresarial' },
            { id: 'vida', label: 'Vida' }
          ]}
          activeTab="auto"
          onChange={() => {}}
        />
        
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Input
              label="Marca/Modelo"
              placeholder="Ex: Toyota Corolla XEi"
              required
            />
            
            <Input
              label="Ano"
              placeholder="Ex: 2023"
              required
            />
            
            <Input
              label="Placa"
              placeholder="Ex: ABC-1234"
              required
            />
            
            <Input
              label="Chassi"
              placeholder="Ex: 9BRBL*********1234"
              required
            />
            
            <Input
              label="Cor"
              placeholder="Ex: Prata"
            />
            
            <Select
              label="Condutor no Momento"
              options={[
                { value: 'segurado', label: 'Segurado' },
                { value: 'terceiro', label: 'Terceiro Autorizado' }
              ]}
              placeholder="Selecione o condutor"
              required
            />
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 mb-6">
        <h3 className="font-medium text-white mb-4">Documentos e Evidências</h3>
        
        <div className="space-y-6 mb-6">
          <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
            <div className="mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-gray-400">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </div>
            <p className="text-gray-300 mb-2">Arraste e solte arquivos aqui ou</p>
            <Button variant="outline" size="sm">Selecionar Arquivos</Button>
            <p className="text-xs text-gray-500 mt-2">Formatos aceitos: JPG, PNG, PDF. Tamanho máximo: 10MB</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-white mb-2">Documentos Recomendados:</h4>
            <ul className="text-sm text-gray-400 space-y-1 pl-5 list-disc">
              <li>Boletim de Ocorrência (obrigatório para roubo/furto)</li>
              <li>Fotos do veículo/bem danificado (mínimo 4 ângulos diferentes)</li>
              <li>Orçamento de reparo (se disponível)</li>
              <li>CNH do condutor (para sinistros de auto)</li>
              <li>Nota fiscal do bem (para bens recém-adquiridos)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 mb-6">
        <h3 className="font-medium text-white mb-4">Informações Adicionais</h3>
        
        <div className="mb-6">
          <Input
            label="Observações"
            placeholder="Informações adicionais relevantes para a análise do sinistro..."
          />
        </div>
      </div>
      
      <div className="flex justify-end gap-4 mb-8">
        <Button variant="outline">Cancelar</Button>
        <Button variant="outline">Salvar Rascunho</Button>
        <Button variant="primary">Enviar Sinistro</Button>
      </div>
    </DashboardLayout>
  );
}
