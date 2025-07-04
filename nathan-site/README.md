# Landing Page - Nathan Consultor de Imóveis

Landing page moderna e responsiva para o consultor de imóveis Nathan, desenvolvida com Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Funcionalidades

- **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves** - Animações com Framer Motion para melhor UX
- **Formulário de Contato** - Envio de emails para corretormerodio@gmail.com
- **Vídeo VSL** - Seção de vídeo com player integrado
- **Depoimentos** - Carrossel de depoimentos de clientes
- **Estatísticas** - Cards com números impressionantes
- **Animações de Fundo** - Efeitos sutis de claridade

## 🛠️ Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Nodemailer** - Envio de emails
- **Lucide React** - Ícones

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/uwjota/nathan.git
cd nathan
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
# Crie um arquivo .env.local na raiz do projeto
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
```

4. Execute o projeto:
```bash
npm run dev
```

## 📧 Configuração do Email

Para que o formulário funcione corretamente, você precisa:

1. **Criar uma conta Gmail** ou usar uma existente
2. **Ativar a verificação em duas etapas**
3. **Gerar uma senha de app**:
   - Vá em Configurações da Conta Google
   - Segurança > Verificação em duas etapas
   - Senhas de app > Gerar nova senha
4. **Configurar as variáveis de ambiente**:
   - `EMAIL_USER`: Seu email Gmail
   - `EMAIL_PASS`: A senha de app gerada

## 🎨 Paleta de Cores

- **Verde Principal**: #22c55e (green-500)
- **Verde Escuro**: #16a34a (green-600)
- **Verde Claro**: #86efac (green-300)
- **Esmeralda**: #059669 (emerald-600)
- **Fundo Claro**: #f0fdf4 (green-50)

## 📱 Estrutura do Projeto

```
nathan/
├── app/
│   ├── api/contact/route.ts  # API para envio de emails
│   ├── globals.css           # Estilos globais
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página principal
├── public/
│   └── imagens/
│       └── nathan.jpg        # Imagem do Nathan
├── .env.local                # Variáveis de ambiente (criar)
└── package.json
```

## 🚀 Deploy

O projeto está configurado para deploy na Vercel:

1. Conecte seu repositório na Vercel
2. Configure as variáveis de ambiente na Vercel
3. Deploy automático a cada push

## 📞 Contato

Para dúvidas ou suporte, entre em contato através do formulário no site.

---

Desenvolvido com ❤️ para o Nathan 