/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  // Configuração para o Netlify
  output: 'export',
  // Desabilitar recursos que não são compatíveis com exportação estática
  experimental: {
    serverActions: false,
  },
}
