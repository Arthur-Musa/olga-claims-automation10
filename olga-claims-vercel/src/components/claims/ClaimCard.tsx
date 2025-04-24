import React from 'react';

interface ClaimCardProps {
  id: string;
  title: string;
  customer: string;
  date: string;
  status: 'new' | 'processing' | 'approved' | 'rejected';
  amount?: string;
  type: string;
  priority?: 'low' | 'medium' | 'high';
}

const ClaimCard: React.FC<ClaimCardProps> = ({
  id,
  title,
  customer,
  date,
  status,
  amount,
  type,
  priority = 'medium'
}) => {
  const getStatusClass = () => {
    switch (status) {
      case 'new':
        return 'status-new';
      case 'processing':
        return 'status-processing';
      case 'approved':
        return 'status-approved';
      case 'rejected':
        return 'status-rejected';
      default:
        return 'status-new';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'new':
        return 'Novo';
      case 'processing':
        return 'Em Análise';
      case 'approved':
        return 'Aprovado';
      case 'rejected':
        return 'Recusado';
      default:
        return 'Novo';
    }
  };

  const getPriorityClass = () => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-blue-500';
      default:
        return 'bg-yellow-500';
    }
  };

  return (
    <div className="glass-card p-4 hover:border-[#6a11cb]/30 transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="text-sm text-gray-400">#{id}</div>
          <h3 className="font-medium text-white">{title}</h3>
        </div>
        <div className={`status-badge ${getStatusClass()}`}>
          {getStatusText()}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <div className="text-xs text-gray-400">Cliente</div>
          <div className="text-sm">{customer}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Data</div>
          <div className="text-sm">{date}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Tipo</div>
          <div className="text-sm">{type}</div>
        </div>
        {amount && (
          <div>
            <div className="text-xs text-gray-400">Valor</div>
            <div className="text-sm">{amount}</div>
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full ${getPriorityClass()} mr-2`}></div>
          <span className="text-xs text-gray-400">
            {priority === 'high' ? 'Alta Prioridade' : priority === 'medium' ? 'Média Prioridade' : 'Baixa Prioridade'}
          </span>
        </div>
        <button className="text-[#6a11cb] hover:text-[#2575fc] text-sm transition-colors duration-200">
          Ver detalhes
        </button>
      </div>
    </div>
  );
};

export default ClaimCard;
