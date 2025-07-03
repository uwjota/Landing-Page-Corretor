# Landing Page - Consultor de Imóveis

Uma landing page moderna e responsiva para consultor de imóveis desenvolvida com React, Next.js e Tailwind CSS.

## Características

- 🎨 Design moderno e responsivo
- 📱 Otimizado para dispositivos móveis
- 🗺️ Iframe do Google Maps na seção hero
- ⭐ Seção de depoimentos com imagens dos clientes
- 📝 Formulário de contato funcional
- 🎭 Animações suaves com Framer Motion
- 🎨 Cores claras e elegantes
- 📄 Página de agradecimento após envio do formulário

## Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **React 18** - Biblioteca JavaScript
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## Estrutura do Projeto

```
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── package.json             # Dependências
├── tailwind.config.js       # Configuração Tailwind
├── tsconfig.json           # Configuração TypeScript
└── README.md               # Este arquivo
```

## Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd consultor-imoveis-landing
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Scripts Disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run start` - Executa a versão de produção
- `npm run lint` - Executa o linter

## Seções da Landing Page

1. **Hero Section** - Iframe do Google Maps com overlay de conteúdo
2. **Sobre** - Informações sobre o consultor e serviços
3. **Depoimentos** - Testimonials dos clientes com imagens
4. **Contato** - Formulário de contato
5. **Footer** - Menu inferior com informações de contato

## Personalização

### Cores
As cores podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... outras variações
  }
}
```

### Conteúdo
- Edite o texto no arquivo `app/page.tsx`
- Substitua as imagens dos depoimentos
- Atualize as informações de contato no footer

### Iframe do Google Maps
Substitua a URL do iframe na seção hero por sua localização:

```jsx
src="https://www.google.com/maps/embed?pb=SUA_URL_AQUI"
```

## Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. O deploy será automático a cada push

### Outras Plataformas
```bash
npm run build
npm run start
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Suporte

Para suporte, envie um email para contato@consultor.com ou abra uma issue no repositório. 