# 🚀 MilhasPix - Teste Técnico

![Logo](https://i.ibb.co/dwsLhXPw/Projeto-Milhas-Pix.png)

---

## 📝 Descrição do Projeto
Este é um **projeto de teste técnico** desenvolvido em **React**, com foco em consumo de **API REST**, **React Router**, **UX/UI** e funcionalidades de interatividade.  

O objetivo do projeto é criar uma aplicação de gerenciamento de ofertas de milhas, permitindo que o usuário:

-  Cadastre novas ofertas
-  Visualize rankings atualizados em tempo real
-  Consulte suas ofertas existentes

---

## ⚡ Funcionalidades Implementadas

### ✨ Cadastro de Ofertas
- Máscara de input para valores monetários (milheiro para real)
- Validação de campos obrigatórios e opcionais
- Envio de valor para API de ranking (`GET /simulate-ranking`) em tempo real

### 📋 Listagem de Ofertas
- Consumo da API `GET /simulate-offers-list` para exibir ofertas cadastradas
- Skeletons customizados para carregamento de dados (desktop e mobile)
- Responsividade conforme design do Figma

### 🔒 Bloqueio de Rotas
- Utilizando Context API para garantir que rotas específicas só sejam acessíveis após etapas anteriores

### 📱 Responsividade e UX
- Mobile-first com ajustes para desktop
- Layouts, cores e fontes consistentes com o Figma

---

## 🛠 Tecnologias Utilizadas

- React.js + TypeScript  
- TailwindCSS  
- React Router  
- Context API  
- Vite  
- API REST simulada  

---

## ▶ Como Rodar o Projeto Localmente


-  Clonar o repositório:
    ```bash
   git clone <url do repositório>
   cd <pasta do reposítorio>
- Instalar dependências:
   ```bash
   npm install
- Criar arquivo .env com as variáveis de ambiente necessárias:
    ```bash
    VITE_API_BASE_URL={Url base}
- Rodar a aplicação:
    ```bash
    npm run dev
- Acessar no navegador:
    ```bash 
    http://localhost:5173


---

## 🛠 Problemas e Soluções Encontradas

- 🚫 Bloqueio de CORS na API

    Para testes locais, utilizado proxy via Vite
    Em produção, a URL da API precisa estar liberada

    ![logo](https://i.ibb.co/xtsFqW5X/image.png)

- 🔒 Bloqueio de rotas via Context API

    Garantia de acesso controlado às etapas do fluxo de cadastro

- 💡 Skeletons Customizados

    Experiência visual durante carregamento de dados

- 💵 Máscara de Input e Validação

    Inputs formatados automaticamente e validados em tempo real

- 📱 Responsividade e Layout

    Ajustes de cores, fontes e componentes conforme Figma


## ⚙️ Outras Implementações

- Skeletons separados por desktop e mobile

- Uso de TailwindCSS para consistência visual

-Funções de formatação de datas


## ⚡ Pontos a Melhorar

- Performance em grandes volumes de dados

- Caso a API de ranking retorne mais de 1000 registros, seria interessante implementar virtualização para reduzir o impacto no DOM.

- Para listas menores (mas ainda acima de 50 registros), utilizar React.memo para evitar re-renderizações desnecessárias e otimizar o desempenho.