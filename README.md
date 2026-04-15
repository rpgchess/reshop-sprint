# Reshop Sprint Dashboard 🏃‍♂️

## 📌 Sobre o Projeto

Dashboard HTA (HTML Application) para acompanhamento e visualização de sprints do projeto Reshop. Ferramenta interna de gestão ágil e acompanhamento de desenvolvimento.

## 🎯 Objetivo

Fornecer uma interface gráfica desktop para monitoramento de sprints, tarefas, métricas de desenvolvimento e progresso do projeto Reshop, facilitando a gestão ágil da equipe.

## 🚀 Tecnologias Utilizadas

- **HTA** (HTML Application) - Interface desktop Windows
- **HTML5 + CSS3 + JavaScript**
- **Bootstrap 3.3.2** - Framework UI
- **DataTables 1.10.21** - Tabelas interativas
- **Alertify.js 1.13.1** - Notificações e alertas
- **Chart.js 2.9.3** - Gráficos e visualizações
- **jQuery** - Manipulação DOM e AJAX

## 📁 Estrutura do Projeto

```
reshop-sprint/
├── sprint.hta              # Aplicação principal
├── css/                    # Estilos customizados
├── js/                     # Scripts JavaScript
├── libs/                   # Bibliotecas externas
│   └── chart.js/           # Biblioteca de gráficos
└── inc/                    # Includes e utilitários
```

## 🔧 Funcionalidades

- ✅ Visualização de sprints ativas
- ✅ Acompanhamento de tarefas (To Do, In Progress, Done)
- ✅ Gráficos de burndown e velocity (Chart.js)
- ✅ Métricas de produtividade da equipe
- ✅ Filtros por sprint, status, desenvolvedor
- ✅ Tabelas interativas (DataTables)
- ✅ Notificações e alertas (Alertify)
- ✅ Aplicação standalone Windows (HTA)

## 📊 Métricas Disponíveis

- **Burndown Chart**: Progresso da sprint
- **Velocity**: Velocidade da equipe
- **Task Distribution**: Distribuição de tarefas
- **Sprint Status**: Estado atual da sprint
- **Developer Performance**: Performance individual

## 💻 Como Usar

### Pré-requisitos

- **Windows** (HTA é tecnologia Microsoft)
- **Internet Explorer 9+** (engine do HTA)

### Execução

1. Abrir o arquivo `sprint.hta` diretamente no Windows
2. A aplicação será executada como um programa desktop
3. Configurar integração com ferramenta de gestão (Jira, Azure DevOps, etc.)

## 🔐 Ambiente

- **Projeto**: Reshop (Plataforma de Loyalty/Cashback)
- **Metodologia**: Scrum/Agile
- **Propósito**: Gestão e acompanhamento de sprints

## ⚙️ Configuração

A configuração de fontes de dados (API Jira, Azure DevOps, etc.) deve ser ajustada nos scripts JavaScript dentro da pasta `js/`.

## 🔗 Projetos Relacionados

- [reshop-datalog-prod](../reshop-datalog-prod) - Dashboard de logs (Produção)
- [reshop-datalog-stage](../reshop-datalog-stage) - Dashboard de logs (Stage)

## 🎨 Interface

A interface utiliza:
- **Bootstrap** para layout responsivo
- **Chart.js** para gráficos visuais
- **DataTables** para tabelas interativas

## 👨‍💻 Autor

Claudio Almeida

## 📅 Contexto

Ferramenta desenvolvida para gestão interna das sprints do projeto Reshop (Linx).

---

> **Nota**: Esta é uma ferramenta interna de gestão de projeto. Não é destinada a uso externo.
