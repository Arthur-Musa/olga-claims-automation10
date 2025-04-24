import { useEffect } from 'react';
import { useClaimsStore } from '@/lib/store';

// Hook personalizado para carregar sinistros
export const useClaims = (filters = {}) => {
  const { 
    claims, 
    filteredClaims, 
    isLoading, 
    error, 
    fetchClaims, 
    filterClaims 
  } = useClaimsStore();

  useEffect(() => {
    fetchClaims();
  }, [fetchClaims]);

  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      filterClaims(filters);
    }
  }, [filters, filterClaims]);

  return { claims: filteredClaims, isLoading, error };
};

// Hook personalizado para carregar um sinistro específico
export const useClaim = (id: string) => {
  const { selectedClaim, isLoading, error, getClaim } = useClaimsStore();

  useEffect(() => {
    if (id) {
      getClaim(id);
    }
  }, [id, getClaim]);

  return { claim: selectedClaim, isLoading, error };
};

// Hook personalizado para carregar regras de automação
export const useAutomationRules = () => {
  const { 
    automationRules, 
    isLoading, 
    error, 
    fetchAutomationRules,
    createAutomationRule,
    updateAutomationRule,
    toggleAutomationRule
  } = useClaimsStore();

  useEffect(() => {
    fetchAutomationRules();
  }, [fetchAutomationRules]);

  return { 
    rules: automationRules, 
    isLoading, 
    error,
    createRule: createAutomationRule,
    updateRule: updateAutomationRule,
    toggleRule: toggleAutomationRule
  };
};

// Hook personalizado para carregar configurações de IA
export const useAISettings = () => {
  const { 
    aiSettings, 
    isLoading, 
    error, 
    fetchAISettings,
    updateAISettings,
    startManualTraining
  } = useClaimsStore();

  useEffect(() => {
    fetchAISettings();
  }, [fetchAISettings]);

  return { 
    settings: aiSettings, 
    isLoading, 
    error,
    updateSettings: updateAISettings,
    startTraining: startManualTraining
  };
};

// Hook personalizado para obter o usuário atual
export const useCurrentUser = () => {
  const { currentUser } = useClaimsStore();
  return { user: currentUser };
};
