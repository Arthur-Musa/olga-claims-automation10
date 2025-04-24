import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#6a11cb] to-[#ff5722]">
            Olga Claims Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformando o processamento de sinistros com inteligência artificial e automação avançada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-8 rounded-xl transition-transform hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#ff5722] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Processamento Inteligente</h2>
            <p className="text-gray-300 mb-6">
              Automatize a análise de documentos e imagens com IA avançada, reduzindo o tempo de processamento em até 60%.
            </p>
            <Link href="/claims" className="text-[#ff5722] hover:text-white transition-colors">
              Explorar sinistros →
            </Link>
          </div>

          <div className="glass-card p-8 rounded-xl transition-transform hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#ff5722] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Detecção de Fraudes</h2>
            <p className="text-gray-300 mb-6">
              Identifique padrões suspeitos e anomalias com algoritmos de aprendizado de máquina, reduzindo perdas por fraude.
            </p>
            <Link href="/analytics" className="text-[#ff5722] hover:text-white transition-colors">
              Ver análises →
            </Link>
          </div>

          <div className="glass-card p-8 rounded-xl transition-transform hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#ff5722] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Automação Personalizada</h2>
            <p className="text-gray-300 mb-6">
              Crie regras de automação personalizadas para diferentes tipos de sinistros e segmentos de clientes.
            </p>
            <Link href="/settings" className="text-[#ff5722] hover:text-white transition-colors">
              Configurar automação →
            </Link>
          </div>
        </div>

        <div className="glass-card p-8 rounded-xl mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Transforme sua operação de sinistros</h2>
              <p className="text-gray-300 mb-6">
                A plataforma Olga Claims Automation combina inteligência artificial, automação e expertise em seguros para revolucionar o processamento de sinistros.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff5722] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Redução de 60% no tempo de processamento</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff5722] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Diminuição de 40% nos custos operacionais</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff5722] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Aumento de 35% na satisfação do cliente</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff5722] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Detecção de fraudes 3x mais eficiente</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6a11cb] to-[#ff5722] opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Demonstração Interativa</h3>
                    <Link href="/dashboard" className="inline-block px-6 py-3 bg-gradient-to-r from-[#6a11cb] to-[#ff5722] text-white rounded-md hover:opacity-90 transition-opacity">
                      Acessar Dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto para revolucionar seu processamento de sinistros?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard" className="px-8 py-4 bg-gradient-to-r from-[#6a11cb] to-[#ff5722] text-white rounded-md hover:opacity-90 transition-opacity">
              Começar Agora
            </Link>
            <Link href="/test" className="px-8 py-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
              Ver Demonstração
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
