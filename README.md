# 🎵 Music Player - Aplicativo Desktop

Bem-vindo ao **Music Player**, uma aplicação desktop construída com **Electron.js**, **Next.js**, **React** e **TailwindCSS** para gerenciar e tocar suas músicas favoritas. A aplicação permite a criação de uma playlist, controle de reprodução de músicas e muito mais, tudo dentro de um ambiente desktop interativo.

## 📝 Descrição

O **Music Player** é uma aplicação de desktop que permite ao usuário importar músicas e gerenciar uma playlist. Entre as funcionalidades, temos:

- 🆕 **Adicionar músicas** ao player através do sistema de arquivos.
- 🎶 **Tocar músicas** com controle de play, pause, próximo e anterior.
- 🔄 **Barra de progresso dinâmica** que exibe o andamento da música.
- ⏱️ **Contador de tempo**, mostrando o tempo atual e o tempo total da música.
- 📝 **Gerenciar a playlist**, adicionando e removendo músicas conforme o desejo.
- 🎵 **Reprodução contínua** com fila de músicas.

Os dados, como as músicas e a playlist, são gerenciados localmente na aplicação, e não há necessidade de servidor ou conexão com a internet para a reprodução das músicas.

## 🛠️ Tecnologias Usadas

- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white) **JavaScript** – Linguagem de programação utilizada no backend e frontend.
- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) **React** – Biblioteca para construção da interface do usuário.
- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) **Next.js** – Framework React para renderização do lado servidor e outras funcionalidades.
- ![Electron](https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white) **Electron.js** – Framework para a criação de aplicativos desktop utilizando tecnologias web.
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) **TailwindCSS** – Framework CSS para estilos rápidos e responsivos.
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) **Node.js** – Plataforma para execução de JavaScript no backend.

## 🗂️ Estrutura de Pastas

Aqui está a estrutura de pastas do seu projeto **Music Player**:

```bash
music-player/
├─ node_modules/            # Dependências do projeto
├─ components/              # Componentes React
├─ electron/                # Arquivos do Electron (principalmente configuração)
├─ pages/                   # Páginas da aplicação React
├─ public/                  # Arquivos públicos (imagens, ícones, etc)
├─ styles/                  # Arquivos de estilos CSS, incluindo o Tailwind
├─ util/                    # Funções utilitárias
├─ .gitignore               # Arquivos/pastas a serem ignorados pelo Git
├─ next.config.mjs          # Configuração do Next.js
├─ package-lock.json        # Registro de versões exatas das dependências
├─ package.json             # Metadados do projeto e dependências
├─ postcss.config.mjs       # Configuração do PostCSS
├─ README.md                # Documentação do projeto
````

## 🚀 Como Rodar a Aplicação Localmente

### Pré-requisitos

* **Node.js 18+** (recomendado 20+)
* **NPM** (para instalar dependências)

### Passos para execução

1. **Clonar o repositório**

```bash
git clone https://github.com/RaphaelOkuyama/player-electron.git
cd player-electron
```

2. **Instalar as dependências**

```bash
npm install
```

3. **Rodar o servidor e o Electron**

```bash
npm run dev
```

A aplicação estará disponível no seu desktop e pode ser executada no modo de desenvolvimento.

## 📚 Funcionalidades

### **Controle de Músicas**

* **Adicionar músicas**: Importe suas músicas diretamente através do sistema de arquivos.
* **Tocar músicas**: Controle a reprodução de músicas (Play, Pause, Next, Previous).
* **Barra de Progresso**: Veja o andamento da música em tempo real.
* **Controle de Tempo**: Mostre o tempo atual e o tempo total da música.

### **Playlist**

* **Adicionar à Playlist**: Crie uma playlist com músicas.
* **Remover músicas**: Exclua músicas da playlist conforme desejado.

### **Utilização do IPC (Inter-Process Communication)**

Utilizamos o **IPC** do Electron para comunicação entre os processos da interface (frontend) e o processo principal (backend), o que permite uma experiência fluida e interativa.

## 🛠️ Testes

Para testar a aplicação, basta importar suas músicas e usar a interface para controlar a reprodução. Não são necessários testes adicionais, pois a aplicação foi projetada para ser simples e intuitiva.

## 📦 Scripts Disponíveis

* `npm run dev` – Inicia o servidor de desenvolvimento e o Electron.

## 📝 Observações

* A aplicação **não está 100% responsiva**. Isso pode ser uma futura melhoria para oferecer uma experiência melhor em diferentes tamanhos de tela, especialmente em dispositivos com resoluções menores ou telas maiores.

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Abra uma issue ou envie um pull request.

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](./LICENSE) para o texto completo.
