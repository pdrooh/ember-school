# Ember School - Brasa Viva do Altar 🔥

Site de venda de curso moderno e tecnológico construído com **Next.js 14**, **React 18**, **TypeScript** e **Tailwind CSS**.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca UI
- **TypeScript** - Type safety completo
- **Tailwind CSS 3** - Utility-first CSS
- **Framer Motion** - Animações fluidas
- **Lucide React** - Ícones modernos

## ✨ Características

- ⚡ **Performance otimizada** - Next.js com otimizações automáticas
- 🎨 **Design impactante** - Tema escuro com gradientes vibrantes
- 📱 **Totalmente responsivo** - Mobile-first design
- 🎭 **Animações suaves** - Framer Motion para micro-interações
- 🔍 **SEO otimizado** - Meta tags e structured data
- ⚙️ **Pronto para integração** - Estrutura preparada para checkout

## 🛠️ Instalação Local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

## 🚀 Deploy na Vercel

### Opção 1: Deploy via GitHub (Recomendado)

1. Faça push do código para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Importe o repositório
5. A Vercel detectará automaticamente o Next.js
6. Clique em "Deploy"

### Opção 2: Deploy via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Configurações Automáticas

O projeto já está configurado com:
- ✅ `vercel.json` - Configurações de build e headers
- ✅ `next.config.mjs` - Otimizações para produção
- ✅ Headers de segurança
- ✅ Cache otimizado
- ✅ Compressão habilitada

## 📁 Estrutura

```
ember-school-next/
├── app/                    # App Router do Next.js
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/             # Componentes React
│   ├── ui/                 # Componentes UI base
│   └── ...                 # Seções da landing page
├── hooks/                  # Hooks customizados
├── lib/                    # Utilitários
└── public/                 # Arquivos estáticos
```

## 🎨 Melhorias de Cores

- **Gradientes animados** - Transições suaves e vibrantes
- **Melhor contraste** - Acessibilidade aprimorada
- **Efeitos glow** - Iluminação sutil nos elementos
- **Animações de cor** - Gradientes em movimento

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env.local` para variáveis de ambiente:

```env
# Opcional: Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Opcional: URL do checkout
NEXT_PUBLIC_CHECKOUT_URL=https://checkout.emberschool.com
```

## 📝 Próximos Passos

1. **Integrar checkout** - Edite `/hooks/useCheckout.ts`
2. **Adicionar analytics** - Configure Google Analytics
3. **Otimizar imagens** - Use `next/image` para melhor performance
4. **Configurar domínio** - Adicione seu domínio na Vercel

## 📄 Licença

Todos os direitos reservados - Ember School

---

Desenvolvido com ❤️ para transformar vidas
