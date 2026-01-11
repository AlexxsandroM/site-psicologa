# Site da Psicóloga Waldirene Dias

> Projeto pessoal desenvolvido para apresentar os serviços de psicoterapia da psicóloga Waldirene Dias (CRP 04/69765), especializada em Gestalt-terapia.

🌐 Link do Site: [www.waldirenediaspsi.com.br](https://www.waldirenediaspsi.com.br/)  

## 🎯 Objetivo do Projeto

Este site foi criado como um projeto pessoal para auxiliar uma profissional de psicologia a ter presença digital de forma clara, acessível e focada na conversão de visitantes em agendamentos. O objetivo principal é apresentar a abordagem terapêutica e facilitar o contato direto via WhatsApp.

## ✨ Características Principais

### 🏠 Página Inicial (Home)
- **Hero Section**: Chamada emocional com destaque para terapia online e presencial
- **Seção Sobre**: Apresentação pessoal da profissional e sua filosofia de trabalho
- **Citação Inspiracional**: Frase de Jean-Paul Sartre sobre transformação pessoal
- **Serviços**: Cards destacando terapia individual, presencial e consultas online
- **Footer Completo**: Links de navegação, contatos e redes sociais

### 🧠 Página da Abordagem
- Explicação detalhada sobre Gestalt-terapia
- Carrossel interativo com os 4 princípios fundamentais
- Seção "Para Quem é Indicada" com lista de benefícios
- Call-to-action para agendamento

### 🎨 Design & UX
- Interface limpa e profissional com cores suaves (verde/azul)
- Design responsivo para mobile, tablet e desktop
- Menu fixo com logo e navegação intuitiva
- Botões de WhatsApp estrategicamente posicionados
- Transições suaves e microinterações

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19.2** - Biblioteca JavaScript para construção da interface
- **TypeScript 5.9** - Tipagem estática para maior segurança no código
- **React Router DOM 7.12** - Navegação entre páginas SPA
- **Vite 7.2** - Build tool moderna e rápida
- **Lucide React** - Biblioteca de ícones SVG

### Ferramentas de Desenvolvimento
- **ESLint** - Linting e qualidade de código
- **Docker** - Containerização para desenvolvimento e produção
- **PostCSS & Autoprefixer** - Processamento de CSS

## 📁 Arquitetura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button.tsx      # Componente de botão com variantes
│   ├── Footer.tsx      # Rodapé compartilhado
│   ├── Layout.tsx      # Layout com header/menu
│   ├── SplitSection.tsx # Seção com imagem e conteúdo
│   └── Carousel.tsx    # Carrossel de cards
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página inicial
│   └── Abordagem.tsx   # Página da abordagem terapêutica
├── constants/          # Constantes e configurações
│   └── contact.ts      # Informações de contato centralizadas
├── types/              # TypeScript types compartilhados
│   └── index.ts        # Interfaces e tipos
├── assets/             # Imagens, logos e recursos
│   ├── logo.png
│   ├── foto.png
│   ├── fundoInicio.jpeg
│   └── fundoAbordagem.jpeg
├── App.tsx             # Componente raiz e rotas
├── App.css             # Estilos globais
└── main.tsx            # Entry point
```

### Padrões de Arquitetura

- **Componentização**: Componentes reutilizáveis e independentes
- **Separação de Responsabilidades**: Lógica, apresentação e dados separados
- **Type Safety**: TypeScript em toda a aplicação
- **Centralização de Dados**: Constantes em arquivo dedicado
- **DRY Principle**: Zero duplicação de código

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Docker (opcional)

### Instalação

```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Navegar para o diretório
cd site-psicologa

# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Acessar em http://localhost:5173
```

### Build de Produção

```bash
# Compilar TypeScript e gerar build
npm run build

# Visualizar build localmente
npm run preview
```

### Com Docker

**Desenvolvimento:**
```bash
# Iniciar com Docker Compose
docker-compose up

# Parar containers
docker-compose down
```

**Produção:**
```bash
# Build e iniciar em modo produção com nginx
docker-compose -f docker-compose.prod.yml up --build -d

# Parar produção
docker-compose -f docker-compose.prod.yml down
```

### Deploy em Produção

Para evitar erros 404 ao acessar rotas diretamente (como `/abordagem`), configure seu servidor:

**Nginx:**
O `Dockerfile.prod` já inclui a configuração necessária:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

**Apache:**
O arquivo `.htaccess` já está incluído em `public/`:
```apache
RewriteEngine On
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

**Vercel/Netlify:**
O arquivo `public/_redirects` já está configurado:
```
/* /index.html 200
```

### Linting

```bash
# Verificar código
npm run lint
```

## 🔧 Configurações

### Informações de Contato

Todas as informações de contato estão centralizadas em `src/constants/contact.ts`:

```typescript
export const CONTACT_INFO = {
  name: 'Waldirene Dias',
  crp: 'CRP 04/69765',
  phone: '+5534999855035',
  phoneFormatted: '(34) 99985-5035',
  email: 'waldirene.dias.psi@hotmail.com',
  address: 'R. Santos Dumont, 163 - Centro, Araxá - MG',
  whatsapp: 'https://wa.me/5534999855035',
  instagram: 'https://www.instagram.com/wal.dias.psi/'
};
```

## 📱 Funcionalidades de Conversão

- **Botão WhatsApp no Hero**: Primeiro ponto de contato visível
- **Botão no Menu**: Sempre acessível durante a navegação
- **CTAs Estratégicos**: Múltiplos pontos de conversão ao longo da página
- **Footer com Contatos**: Informações completas de agendamento
- **Links Diretos**: WhatsApp e Instagram com abertura em nova aba

## 🎨 Personalização de Cores

As cores principais estão definidas no `App.css`:

```css
:root {
  --primary: #2c6b6f;        /* Verde azulado principal */
  --primary-light: #a8dadc;  /* Verde azulado claro */
  --secondary: #457b9d;      /* Azul secundário */
  --accent: #f1faee;         /* Creme suave */
  --text: #1d3557;           /* Azul escuro */
}
```

## 📊 Processo de Desenvolvimento

### Fase 1 - Planejamento
- Definição de objetivos e público-alvo
- Escolha de cores e identidade visual
- Estruturação de conteúdo

### Fase 2 - Desenvolvimento Inicial
- Setup do projeto com Vite + React + TypeScript
- Criação da estrutura básica de páginas
- Implementação do design responsivo

### Fase 3 - Refatoração e Otimização
- Extração de componentes reutilizáveis
- Centralização de constantes
- Implementação de types TypeScript
- Eliminação de código duplicado
- Otimização de performance

### Fase 4 - Testes e Correções
- Correção de erros de linting
- Validação TypeScript
- Testes de responsividade
- Build de produção

## 🔐 Qualidade de Código

- ✅ 0 erros TypeScript
- ✅ 0 warnings ESLint
- ✅ 100% type-safe
- ✅ Código limpo e documentado
- ✅ Padrões de arquitetura profissional

## 📈 Melhorias Futuras (Roadmap)

- [ ] Adicionar formulário de contato
- [ ] Implementar blog para artigos
- [ ] Adicionar depoimentos de pacientes
- [ ] Integração com Google Analytics
- [ ] Sistema de agendamento online
- [ ] Área administrativa
- [ ] Testes unitários e E2E

## 📄 Licença

MIT License - Este projeto é de código aberto e pode ser utilizado livremente.

## 👤 Sobre a Profissional

**Waldirene Dias**  
Psicóloga Clínica | CRP 04/69765  
Especializada em Gestalt-terapia  
Atendimento presencial e online

🌐 Site: [www.waldirenediaspsi.com.br](https://www.waldirenediaspsi.com.br/)  
📍 R. Santos Dumont, 163 - Centro, Araxá - MG  
📱 WhatsApp: [(34) 99985-5035](https://wa.me/5534999855035)  
📧 E-mail: waldirene.dias.psi@hotmail.com  
📷 Instagram: [@wal.dias.psi](https://www.instagram.com/wal.dias.psi/)

---

**Desenvolvido com ❤️ como projeto pessoal para apoiar profissionais da saúde mental**
