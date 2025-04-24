import { create } from 'zustand';

// Tipos para o estado global
export interface Claim {
  id: string;
  title: string;
  customer: string;
  date: string;
  status: 'new' | 'processing' | 'approved' | 'rejected';
  amount: string;
  type: string;
  priority: 'low' | 'medium' | 'high';
  description?: string;
  vehicle?: {
    make: string;
    model: string;
    year: string;
    plate: string;
    vin: string;
  };
  documents?: {
    id: string;
    name: string;
    type: string;
    date: string;
    url: string;
  }[];
  history?: {
    action: string;
    date: string;
    user: string;
    notes?: string;
  }[];
  analysis?: {
    coverage: 'confirmed' | 'pending' | 'denied';
    consistency: 'high' | 'medium' | 'low';
    imageAnalysis: 'compatible' | 'incompatible' | 'pending';
    fraudRisk: 'high' | 'medium' | 'low';
    recommendation: 'approve' | 'review' | 'reject';
    confidence: number;
  };
}

export interface AutomationRule {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive';
  conditions: string[];
  actions: string[];
  metrics: {
    processed: number;
    success_rate: number;
    avg_time: number;
  };
}

export interface AISettings {
  documentModel: string;
  imageModel: string;
  fraudModel: string;
  approvalThreshold: number;
  fraudThreshold: number;
  inconsistencyThreshold: number;
  continuousLearning: boolean;
  analystFeedback: boolean;
  autoRetraining: boolean;
  lastTrainingDate: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'analyst' | 'manager' | 'viewer';
  avatar?: string;
}

interface ClaimsState {
  claims: Claim[];
  filteredClaims: Claim[];
  selectedClaim: Claim | null;
  automationRules: AutomationRule[];
  aiSettings: AISettings;
  currentUser: User;
  isLoading: boolean;
  error: string | null;
  
  // Ações para sinistros
  fetchClaims: () => Promise<void>;
  getClaim: (id: string) => Promise<void>;
  createClaim: (claim: Partial<Claim>) => Promise<void>;
  updateClaim: (id: string, updates: Partial<Claim>) => Promise<void>;
  deleteClaim: (id: string) => Promise<void>;
  filterClaims: (filters: any) => void;
  
  // Ações para regras de automação
  fetchAutomationRules: () => Promise<void>;
  createAutomationRule: (rule: Partial<AutomationRule>) => Promise<void>;
  updateAutomationRule: (id: string, updates: Partial<AutomationRule>) => Promise<void>;
  toggleAutomationRule: (id: string) => Promise<void>;
  
  // Ações para configurações de IA
  fetchAISettings: () => Promise<void>;
  updateAISettings: (settings: Partial<AISettings>) => Promise<void>;
  startManualTraining: () => Promise<void>;
}

// Dados iniciais de exemplo
const initialClaims: Claim[] = [
  {
    id: 'SIN-2025-0042',
    title: 'Colisão em cruzamento',
    customer: 'João Silva',
    date: '22/04/2025',
    status: 'new',
    amount: 'R$ 12.500,00',
    type: 'Auto',
    priority: 'high',
    description: 'Colisão em cruzamento da Av. Paulista com Rua Augusta. O segurado estava trafegando pela Av. Paulista quando um veículo terceiro avançou o sinal vermelho, resultando em colisão lateral. Danos na porta do motorista, para-lama e farol dianteiro esquerdo. Não houve vítimas.',
    vehicle: {
      make: 'Toyota',
      model: 'Corolla XEi',
      year: '2023',
      plate: 'ABC-1234',
      vin: '9BRBL*********1234'
    },
    documents: [
      {
        id: 'DOC-001',
        name: 'Foto frontal do veículo',
        type: 'image',
        date: '22/04/2025',
        url: '/images/claim-001-front.jpg'
      },
      {
        id: 'DOC-002',
        name: 'Foto lateral esquerda',
        type: 'image',
        date: '22/04/2025',
        url: '/images/claim-001-left.jpg'
      },
      {
        id: 'DOC-003',
        name: 'Boletim de Ocorrência',
        type: 'pdf',
        date: '22/04/2025',
        url: '/docs/claim-001-bo.pdf'
      }
    ],
    history: [
      {
        action: 'Sinistro Aberto',
        date: '22/04/2025, 14:30',
        user: 'João Silva',
        notes: 'Cliente reportou sinistro via aplicativo'
      },
      {
        action: 'Documentos Enviados',
        date: '22/04/2025, 14:40',
        user: 'João Silva',
        notes: '5 documentos enviados pelo cliente'
      },
      {
        action: 'Análise Automática',
        date: '22/04/2025, 14:45',
        user: 'Sistema',
        notes: 'Sistema recomendou aprovação (92%)'
      }
    ],
    analysis: {
      coverage: 'confirmed',
      consistency: 'high',
      imageAnalysis: 'compatible',
      fraudRisk: 'low',
      recommendation: 'approve',
      confidence: 92
    }
  },
  {
    id: 'SIN-2025-0041',
    title: 'Danos por vazamento',
    customer: 'Maria Oliveira',
    date: '21/04/2025',
    status: 'processing',
    amount: 'R$ 8.200,00',
    type: 'Residencial',
    priority: 'medium'
  },
  {
    id: 'SIN-2025-0040',
    title: 'Furto de equipamentos',
    customer: 'Empresa ABC Ltda',
    date: '20/04/2025',
    status: 'approved',
    amount: 'R$ 22.800,00',
    type: 'Empresarial',
    priority: 'medium'
  },
  {
    id: 'SIN-2025-0039',
    title: 'Acidente com terceiro',
    customer: 'Pedro Santos',
    date: '19/04/2025',
    status: 'processing',
    amount: 'R$ 15.300,00',
    type: 'Auto',
    priority: 'high'
  },
  {
    id: 'SIN-2025-0038',
    title: 'Danos por incêndio',
    customer: 'Ana Ferreira',
    date: '18/04/2025',
    status: 'approved',
    amount: 'R$ 45.600,00',
    type: 'Residencial',
    priority: 'high'
  },
  {
    id: 'SIN-2025-0037',
    title: 'Roubo de veículo',
    customer: 'Carlos Mendes',
    date: '17/04/2025',
    status: 'rejected',
    amount: 'R$ 35.000,00',
    type: 'Auto',
    priority: 'medium'
  }
];

const initialAutomationRules: AutomationRule[] = [
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

const initialAISettings: AISettings = {
  documentModel: 'olga-doc-v3',
  imageModel: 'olga-vision-v2',
  fraudModel: 'olga-fraud-v3',
  approvalThreshold: 92,
  fraudThreshold: 60,
  inconsistencyThreshold: 7,
  continuousLearning: true,
  analystFeedback: true,
  autoRetraining: true,
  lastTrainingDate: '10/04/2025'
};

const initialUser: User = {
  id: 'user-001',
  name: 'Admin',
  email: 'admin@olga-ai.com',
  role: 'admin',
  avatar: '/images/avatar.jpg'
};

// Criação da store Zustand
export const useClaimsStore = create<ClaimsState>((set, get) => ({
  claims: initialClaims,
  filteredClaims: initialClaims,
  selectedClaim: null,
  automationRules: initialAutomationRules,
  aiSettings: initialAISettings,
  currentUser: initialUser,
  isLoading: false,
  error: null,
  
  // Implementação das ações para sinistros
  fetchClaims: async () => {
    set({ isLoading: true });
    try {
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 500));
      set({ claims: initialClaims, filteredClaims: initialClaims, isLoading: false });
    } catch (error) {
      set({ error: 'Erro ao carregar sinistros', isLoading: false });
    }
  },
  
  getClaim: async (id: string) => {
    set({ isLoading: true });
    try {
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 300));
      const claim = initialClaims.find(c => c.id === id) || null;
      set({ selectedClaim: claim, isLoading: false });
    } catch (error) {
      set({ error: 'Erro ao carregar detalhes do sinistro', isLoading: false });
    }
  },
  
  createClaim: async (claim: Partial<Claim>) => {
    set({ isLoading: true });
    try {
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 800));
      const newClaim: Claim = {
        id: `SIN-2025-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
        title: claim.title || 'Novo Sinistro',
        customer: claim.customer || 'Cliente',
        date: claim.date || new Date().toLocaleDateString('pt-BR'),
        status: 'new',
        amount: claim.amount || 'R$ 0,00',
        type: claim.type || 'Auto',
        priority: claim.priority || 'medium',
        ...claim
      };
      
      set(state => ({ 
        claims: [newClaim, ...state.claims],
        filteredClaims: [newClaim, ...state.filteredClaims],
        isLoading: false 
      }));
    } catch (error) {
      set({ error: 'Erro ao criar sinistro', isLoading: false });
    }
  },
  
  updateClaim: async (id: string, updates: Partial<Claim>) => {
    set({ isLoading: true });
    try {
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      set(state => {
        const updatedClaims = state.claims.map(claim => 
          claim.id === id ? { ...claim, ...updates } : claim
        );
        
        const updatedFilteredClaims = state.filteredClaims.map(claim => 
          claim.id === id ? { ...claim, ...updates } : claim
        );
        
        const updatedSelectedClaim = state.selectedClaim && state.selectedClaim.id === id
          ? { ...state.selectedClaim, ...updates }
          : state.selectedClaim;
        
        return {
          claims: updatedClaims,
          filteredClaims: updatedFilteredClaims,
          selectedClaim: updatedSelectedClaim,
          isLoading: false
        };
      });
    } catch (error) {
      set({ error: 'Erro ao atualizar sinistro', isLoading: false });
    }
  },
  
  deleteClaim: async (id: string) => {
    set({ isLoading: true });
    try {
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      set(state => ({
        claims: state.claims.filter(claim => claim.id !== id),
        filteredClaims: state.filteredClaims.filter(claim => claim.id !== id),
        selectedClaim: state.selectedClaim?.id === id ? null : state.selectedClaim,
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao excluir sinistro', isLoading: false });
    }
  },
  
  filterClaims: (filters) => {
    const { claims } = get();
    
    let filtered = [...claims];
    
    // Filtro por status
    if (filters.status && filters.status !== 'all') {
      filtered = filtered.filter(claim => claim.status === filters.status);
    }
    
    // Filtro por tipo
    if (filters.type && filters.type !== 'all') {
      filtered = filtered.filter(claim => claim.type.toLowerCase() === filters.type);
    }
    
    // Filtro por termo de busca
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(claim => 
        claim.id.toLowerCase().includes(term) ||
        claim.title.toLowerCase().includes(term) ||
        claim.customer.toLowerCase().includes(term)
      );
    }
    
    // Filtro por prioridade
    if (filters.priority) {
      filtered = filtered.filter(claim => claim.priority === filters.priority);
    }
    
    set({ filteredClaims: filtered });
  },
  
  // Implementação das ações para regras de automação
  fetchAutomationRules: async () => {
    set({ isLoading: true });
    try {
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 500));
      set({ automationRules: initialAutomationRules, isLoading: false });
    } catch (error) {
      set({ error: 'Erro ao carregar regras de automação', isLoading: false });
    }
  },
  
  createAutomationRule: async (rule: Partial<AutomationRule>) => {
    set({ isLoading: true });
    try {
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const newRule: AutomationRule = {
        id: `rule-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
        name: rule.name || 'Nova Regra',
        description: rule.description || 'Descrição da regra',
        status: 'inactive',
        conditions: rule.conditions || [],
        actions: rule.actions || [],
        metrics: {
          processed: 0,
          success_rate: 0,
          avg_time: 0
        },
        ...rule
      };
      
      set(state => ({ 
        automationRules: [...state.automationRules, newRule],
        isLoading: false 
      }));
    } catch (error) {
      set({ error: 'Erro ao criar regra de automação', isLoading: false });
    }
  },
  
  updateAutomationRule: async (id: string, updates: Partial<AutomationRule>) => {
    set({ isLoading: true });
    try {
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      set(state => {
        const updatedRules = state.automationRules.map(rule => 
          rule.id === id ? { ...rule, ...updates } : rule
        );
        
        return {
          automationRules: updatedRules,
          isLoading: false
        };
      });
    } catch (error) {
      set({ error: 'Erro ao atualizar regra de automação', isLoading: false });
    }
  },
  
  toggleAutomationRule: async (id: string) => {
    set({ isLoading: true });
    try {
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 300));
      
      set(state => {
        const updatedRules = state.automationRules.map(rule => 
          rule.id === id ? { 
            ...rule, 
            status: rule.status === 'active' ? 'inactive' : 'active' 
          } : rule
        );
        
        return {
          automationRules: updatedRules,
          isLoading: false
        };
      });
    } catch (error) {
      set({ error: 'Erro ao alterar status da regra', isLoading: false });
    }
  },
  
  // Implementação das ações para configurações de IA
  fetchAISettings: async () => {
    set({ isLoading: true });
    try {
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 500));
      set({ aiSettings: initialAISettings, isLoading: false });
    } catch (error) {
      set({ error: 'Erro ao carregar configurações de IA', isLoading: false });
    }
  },
  
  updateAISettings: async (settings: Partial<AISettings>) => {
    set({ isLoading: true });
    try {
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 800));
      
      set(state => ({
        aiSettings: { ...state.aiSettings, ...settings },
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao atualizar configurações de IA', isLoading: false });
    }
  },
  
  startManualTraining: async () => {
    set({ isLoading: true });
    try {
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const today = new Date().toLocaleDateString('pt-BR');
      
      set(state => ({
        aiSettings: { ...state.aiSettings, lastTrainingDate: today },
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao iniciar treinamento manual', isLoading: false });
    }
  }
}));
