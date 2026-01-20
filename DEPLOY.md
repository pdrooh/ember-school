# 🚀 Guia de Deploy na Vercel

## Pré-requisitos

- Conta no GitHub (ou GitLab/Bitbucket)
- Conta na Vercel (gratuita)

## Passo a Passo

### 1. Preparar o Repositório

```bash
# Inicializar git (se ainda não tiver)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial commit - Ember School Landing Page"

# Criar repositório no GitHub e fazer push
git remote add origin https://github.com/seu-usuario/ember-school-next.git
git branch -M main
git push -u origin main
```

### 2. Deploy na Vercel

#### Opção A: Via Interface Web (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"** ou **"Log In"**
3. Conecte sua conta do GitHub
4. Clique em **"Add New Project"**
5. Selecione o repositório `ember-school-next`
6. A Vercel detectará automaticamente:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
7. Clique em **"Deploy"**
8. Aguarde o build (2-3 minutos)
9. Pronto! Seu site estará no ar

#### Opção B: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy (primeira vez)
vercel

# Deploy para produção
vercel --prod
```

### 3. Configurar Domínio Personalizado (Opcional)

1. Na dashboard da Vercel, vá em **Settings** > **Domains**
2. Adicione seu domínio (ex: `emberschool.com`)
3. Siga as instruções para configurar DNS
4. Aguarde a propagação (pode levar até 24h)

### 4. Variáveis de Ambiente (Opcional)

Se precisar de variáveis de ambiente:

1. Na dashboard da Vercel, vá em **Settings** > **Environment Variables**
2. Adicione as variáveis:
   - `NEXT_PUBLIC_GA_ID` (se usar Google Analytics)
   - `NEXT_PUBLIC_CHECKOUT_URL` (URL do checkout)
3. Faça um novo deploy

## ✅ O que já está configurado

- ✅ `vercel.json` - Configurações de build
- ✅ `next.config.mjs` - Otimizações para produção
- ✅ Headers de segurança
- ✅ Cache otimizado
- ✅ Compressão habilitada
- ✅ Build otimizado

## 🔍 Verificações Pós-Deploy

Após o deploy, verifique:

- [ ] Site carrega corretamente
- [ ] Todas as seções estão visíveis
- [ ] Animações funcionam
- [ ] Botões de checkout funcionam
- [ ] Mobile responsivo
- [ ] Performance (use Lighthouse)

## 📊 Monitoramento

A Vercel fornece automaticamente:
- Analytics de tráfego
- Métricas de performance
- Logs de erro
- Deploy previews para cada PR

## 🆘 Troubleshooting

### Build falha
- Verifique os logs na Vercel
- Teste localmente: `npm run build`
- Verifique se todas as dependências estão no `package.json`

### Site não carrega
- Verifique se o build foi bem-sucedido
- Verifique os logs de runtime
- Teste em modo produção local: `npm run build && npm start`

### Erros de importação
- Verifique os caminhos de import (`@/` está configurado)
- Verifique se todos os componentes existem

## 🎉 Pronto!

Seu site está no ar e pronto para receber visitantes!
