# Guia de Implantação da Olga Claims Automation no Netlify

Este guia fornece instruções detalhadas para implantar a plataforma Olga Claims Automation no Netlify, garantindo que todas as funcionalidades estejam disponíveis e funcionando corretamente.

## Pré-requisitos

- Conta no Netlify (gratuita ou paga)
- Repositório Git contendo o código da aplicação (GitHub, GitLab ou Bitbucket)
- Node.js versão 18.17.0 ou superior instalado localmente (para testes)

## Arquivos de Configuração

A aplicação já está configurada para implantação no Netlify com os seguintes arquivos:

1. **next.config.js** - Configurado com `output: 'export'` para gerar arquivos estáticos
2. **netlify.toml** - Define as configurações de build e deploy
3. **package.json** - Contém os scripts e dependências necessários

## Passos para Implantação

### 1. Preparação do Repositório

Certifique-se de que seu repositório contenha todos os arquivos da aplicação, incluindo os arquivos de configuração mencionados acima.

### 2. Implantação no Netlify

#### Opção A: Implantação via Interface Web do Netlify

1. Acesse [app.netlify.com](https://app.netlify.com/) e faça login
2. Clique em "Add new site" > "Import an existing project"
3. Selecione seu provedor Git (GitHub, GitLab, Bitbucket)
4. Autorize o Netlify a acessar seus repositórios, se solicitado
5. Selecione o repositório da Olga Claims Automation
6. Configure as opções de build:
   - Build command: `npm run build`
   - Publish directory: `out`
7. Clique em "Deploy site"

#### Opção B: Implantação via Netlify CLI

1. Instale a Netlify CLI: `npm install -g netlify-cli`
2. Faça login: `netlify login`
3. Navegue até o diretório do projeto: `cd caminho/para/olga-claims-automation`
4. Inicie o processo de deploy: `netlify deploy`
5. Siga as instruções na tela para configurar o site
6. Para deploy em produção, use: `netlify deploy --prod`

### 3. Configurações Adicionais no Netlify

Após a implantação inicial, você pode precisar configurar:

1. **Variáveis de Ambiente**:
   - Acesse "Site settings" > "Environment variables"
   - Adicione quaisquer variáveis necessárias para a aplicação

2. **Domínio Personalizado**:
   - Acesse "Domain settings"
   - Clique em "Add custom domain"
   - Siga as instruções para configurar seu domínio

3. **Funções do Netlify** (se necessário):
   - Para funcionalidades de backend, considere usar Netlify Functions
   - Crie uma pasta `netlify/functions` e adicione suas funções serverless

## Verificação da Implantação

Após a implantação, verifique se:

1. A página inicial carrega corretamente
2. A navegação entre páginas funciona
3. Os componentes interativos estão funcionando
4. As imagens e estilos estão sendo exibidos corretamente

## Solução de Problemas Comuns

### Problema: Falha no Build

**Solução**: Verifique os logs de build no Netlify para identificar o erro específico. Problemas comuns incluem:
- Dependências faltando no package.json
- Erros de sintaxe no código
- Configurações incompatíveis no next.config.js

### Problema: Rotas não Funcionam após Navegação Direta

**Solução**: Verifique se as regras de redirecionamento no netlify.toml estão corretas. A regra padrão deve redirecionar todas as requisições para index.html.

### Problema: Imagens não Aparecem

**Solução**: Certifique-se de que a configuração `images.unoptimized: true` está presente no next.config.js e que os caminhos das imagens estão corretos.

## Manutenção e Atualizações

Para atualizar o site após alterações no código:

1. Faça as alterações necessárias no código
2. Commit e push para o repositório Git
3. O Netlify detectará automaticamente as alterações e iniciará um novo build

## Recursos Adicionais

- [Documentação do Netlify](https://docs.netlify.com/)
- [Documentação do Next.js para Exportação Estática](https://nextjs.org/docs/advanced-features/static-html-export)
- [Plugin Next.js para Netlify](https://github.com/netlify/netlify-plugin-nextjs)

## Suporte

Para suporte adicional com a implantação da Olga Claims Automation, entre em contato com a equipe de desenvolvimento.
