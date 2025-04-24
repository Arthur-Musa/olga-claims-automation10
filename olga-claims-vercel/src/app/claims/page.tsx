import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import Tabs from '@/components/common/Tabs';
import Badge from '@/components/common/Badge';
import ClaimCard from '@/components/claims/ClaimCard';

// Dados de exemplo para a página de sinistros
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
  },
  {
    id: 'SIN-2025-0039',
    title: 'Acidente com terceiro',
    customer: 'Pedro Santos',
    date: '19/04/2025',
    status: 'processing' as const,
    amount: 'R$ 15.300,00',
    type: 'Auto',
    priority: 'high' as const
  },
  {
    id: 'SIN-2025-0038',
    title: 'Danos por incêndio',
    customer: 'Ana Ferreira',
    date: '18/04/2025',
    status: 'approved' as const,
    amount: 'R$ 45.600,00',
    type: 'Residencial',
    priority: 'high' as const
  },
  {
    id: 'SIN-2025-0037',
    title: 'Roubo de veículo',
    customer: 'Carlos Mendes',
    date: '17/04/2025',
    status: 'rejected' as const,
    amount: 'R$ 35.000,00',
    type: 'Auto',
    priority: 'medium' as const
  }
];

export default function Claims() {
  const [activeTab, setActiveTab] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');
  
  // Filtrar sinistros com base na aba ativa e termo de busca
  const filteredClaims = claimsData.filter(claim => {
    const matchesTab = activeTab === 'all' || claim.status === activeTab;
    const matchesSearch = 
      claim.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.customer.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesTab && matchesSearch;
  });
  
  return (
    <DashboardLayout>
      <Header 
        title="Sinistros" 
        subtitle="Gerencie e acompanhe todos os sinistros"
      />
      
      {/* Filtros e Ações */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Input
            placeholder="Buscar sinistro..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 mb-0"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            }
          />
          
          <Select
            options={[
              { value: 'all', label: 'Todos os tipos' },
              { value: 'auto', label: 'Auto' },
              { value: 'residencial', label: 'Residencial' },
              { value: 'empresarial', label: 'Empresarial' },
              { value: 'vida', label: 'Vida' }
            ]}
            placeholder="Filtrar por tipo"
            className="w-full sm:w-48 mb-0"
          />
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <Button variant="outline" size="md" className="w-full md:w-auto">
            Exportar
          </Button>
          <Button variant="primary" size="md" className="w-full md:w-auto">
            Novo Sinistro
          </Button>
        </div>
      </div>
      
      {/* Tabs */}
      <Tabs 
        tabs={[
          { id: 'all', label: 'Todos' },
          { id: 'new', label: 'Novos' },
          { id: 'processing', label: 'Em Análise' },
          { id: 'approved', label: 'Aprovados' },
          { id: 'rejected', label: 'Recusados' }
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      
      {/* Estatísticas Rápidas */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Badge variant="default">Total: {claimsData.length}</Badge>
        <Badge variant="info">Novos: {claimsData.filter(c => c.status === 'new').length}</Badge>
        <Badge variant="warning">Em Análise: {claimsData.filter(c => c.status === 'processing').length}</Badge>
        <Badge variant="success">Aprovados: {claimsData.filter(c => c.status === 'approved').length}</Badge>
        <Badge variant="danger">Recusados: {claimsData.filter(c => c.status === 'rejected').length}</Badge>
      </div>
      
      {/* Lista de Sinistros */}
      {filteredClaims.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClaims.map((claim, index) => (
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
      ) : (
        <div className="glass-card p-8 text-center">
          <div className="text-gray-400 mb-2">Nenhum sinistro encontrado</div>
          <p className="text-sm text-gray-500">Tente ajustar seus filtros ou criar um novo sinistro</p>
        </div>
      )}
      
      {/* Paginação */}
      <div className="flex justify-center mt-8">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>Anterior</Button>
          <Button variant="outline" size="sm" className="bg-[#6a11cb]/20">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">Próxima</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
