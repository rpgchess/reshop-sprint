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
- **Acesso à API** de gestão de projetos (Jira, Azure DevOps, etc.)
- **Permissões** de leitura no projeto

### Opção 1: Executar Diretamente

1. Localizar o arquivo `sprint.hta`
2. Duplo-clique para abrir
3. Dashboard carregará dados da sprint ativa
4. Navegar entre abas: Overview, Tarefas, Gráficos, Equipe

### Opção 2: Linha de Comando

```cmd
REM Executar dashboard
mshta.exe sprint.hta

REM Com sprint específica
mshta.exe sprint.hta --sprint-id=123
```

### Opção 3: Atalho Desktop

1. Criar atalho de `sprint.hta`
2. Renomear para "Reshop Sprint Dashboard"
3. Customizar ícone
4. Fixar na barra de tarefas

### Opção 4: Daily Standup Mode

```cmd
REM Modo para daily standup (tela cheia, auto-refresh)
mshta.exe sprint.hta --mode=standup --refresh=60
```

## 🔐 Ambiente

- **Projeto**: Reshop (Plataforma de Loyalty/Cashback Linx)
- **Metodologia**: Scrum/Agile
- **Sprint Duration**: 2 semanas (10 dias úteis)
- **Team Size**: 5-7 desenvolvedores
- **Propósito**: Gestão visual de sprints e acompanhamento ágil

## ⚙️ Configuração

### Integração com Jira

```javascript
// js/config/jira.js
const JIRA_CONFIG = {
  baseUrl: 'https://reshop.atlassian.net',
  apiVersion: '2',
  project: 'RESHOP',
  board: 'Sprint Board',
  credentials: {
    email: 'user@linx.com.br',
    apiToken: 'YOUR_API_TOKEN'
  },
  refreshInterval: 300000 // 5 minutos
};
```

### Integração com Azure DevOps

```javascript
// js/config/azure.js
const AZURE_CONFIG = {
  organization: 'linx',
  project: 'Reshop',
  team: 'Development',
  pat: 'YOUR_PERSONAL_ACCESS_TOKEN',
  apiVersion: '6.0',
  iteration: 'current'
};
```

### Customizar Métricas

```javascript
// js/config/metrics.js
const METRICS_CONFIG = {
  velocity: {
    enabled: true,
    historicalSprints: 6
  },
  burndown: {
    enabled: true,
    includeWeekends: false,
    idealLine: true
  },
  cycleTime: {
    enabled: true,
    stages: ['To Do', 'In Progress', 'Code Review', 'Done']
  },
  alerts: {
    taskAtRisk: true, // Tarefas em risco
    sprintCapacity: true, // Capacidade excedida
    blockedTasks: true // Tarefas bloqueadas
  }
};
```

### Definir Equipe

```javascript
// js/config/team.js
const TEAM_CONFIG = {
  members: [
    { name: 'João Silva', role: 'Dev', capacity: 8 },
    { name: 'Maria Santos', role: 'Dev', capacity: 8 },
    { name: 'Pedro Costa', role: 'QA', capacity: 6 },
    { name: 'Ana Lima', role: 'Scrum Master', capacity: 4 }
  ],
  workingHours: {
    start: '09:00',
    end: '18:00',
    lunchBreak: 1
  },
  holidays: ['2026-04-21', '2026-05-01']
};
```

## 🔗 Projetos Relacionados

- [reshop-datalog](../reshop-datalog) - Dashboard de logs centralizado
- [reshop-datalog-prod](../reshop-datalog-prod) - Logs de Produção
- [reshop-datalog-stage](../reshop-datalog-stage) - Logs de Stage
- [reshop-datalog-food](../reshop-datalog-food) - Logs Food
- [reshop-client-docker](../reshop-client-docker) - Cliente Docker

## 📊 Metodologia Ágil

### Scrum Framework

O dashboard suporta o framework Scrum completo:

#### Sprint Planning
- ✅ Capacidade da equipe
- ✅ Velocity histórico
- ✅ Story points disponíveis
- ✅ Priorização de backlog

#### Daily Standup
- ✅ Tarefas em progresso
- ✅ Blockers identificados
- ✅ Progresso diário
- ✅ Riscos de atraso

#### Sprint Review
- ✅ Tarefas completadas
- ✅ Demo checklist
- ✅ Stakeholder feedback
- ✅ Acceptance criteria

#### Sprint Retrospective
- ✅ Velocity da sprint
- ✅ Cycle time
- ✅ Quality metrics
- ✅ Action items

### Métricas Scrum

#### Burndown Chart
```
Remaining Work (Story Points)
│
50│●
  │  ●
40│    ●
  │      \
30│        ●
  │          \
20│            ● (Real)
  │              - - - (Ideal)
10│                ●
  │                  \
0 └────────────────────●
   D1 D2 D3 D4 D5 D6 D7 D8 D9 D10
```

#### Velocity Chart
- Média das últimas 6 sprints
- Tendência de melhoria
- Previsão de entregas

#### Cumulative Flow Diagram
- To Do, In Progress, Done
- Identificação de bottlenecks
- Work In Progress (WIP) limits

## 💡 Conceitos Demonstrados

- **Scrum**: Framework ágil de gestão de projetos
- **Sprint Planning**: Planejamento de iterações
- **Burndown Chart**: Gráfico de progresso
- **Velocity**: Velocidade da equipe
- **Story Points**: Estimação de complexidade
- **Chart.js**: Visualizações gráficas
- **DataTables**: Tabelas interativas
- **Agile Metrics**: Métricas ágeis

## ⚙️ Melhorias Implementadas

### ✅ Configuração
- **EditorConfig** adicionado para encoding UTF-8
- HTA/HTML/JS/CSS configurados
- Line endings Windows (CRLF)

### ✅ Documentação
- README expandido com 4 formas de executar
- Integrações Jira/Azure DevOps documentadas
- Métricas Scrum explicadas
- Configuração de equipe documentada
- Metodologia ágil detalhada

## 🚀 Melhorias Futuras

- [ ] Integração com GitHub Issues
- [ ] Integração com Trello
- [ ] Kanban board view
- [ ] Notifications (Slack/Teams)
- [ ] Export para PowerPoint (Sprint Review)
- [ ] AI-powered sprint predictions
- [ ] Mobile app (PWA)
- [ ] Real-time collaboration
- [ ] Timesheet integration
- [ ] Automated reports (PDF/Email)

## 🔗 Links Úteis

- [Scrum Guide](https://scrumguides.org/)
- [Chart.js](https://www.chartjs.org/)
- [Jira API](https://developer.atlassian.com/cloud/jira/platform/rest/v2/)
- [Azure DevOps API](https://docs.microsoft.com/en-us/rest/api/azure/devops/)
- [Agile Manifesto](https://agilemanifesto.org/)

## 🎯 Casos de Uso

### Daily Standup
1. Abrir dashboard em modo standup
2. Projetar em TV da sala
3. Cada membro reporta:
   - O que fez ontem
   - O que fará hoje
   - Impedimentos
4. Atualizar tarefas em tempo real

### Sprint Planning
1. Revisar velocity das últimas sprints
2. Calcular capacidade da equipe
3. Selecionar itens do backlog
4. Validar carga da sprint
5. Commitar com a sprint

### Sprint Review
1. Demonstrar funcionalidades
2. Atualizar status das tarefas
3. Coletar feedback
4. Gerar relatório da sprint

## 👨‍💻 Autor

Claudio Almeida

## 📅 Contexto

Ferramenta desenvolvida para gestão interna das sprints do projeto Reshop (Linx).  
**Metodologia**: Scrum - Sprints de 2 semanas.

---

> **🏃‍♂️ Sprint**: Ferramenta para acompanhamento diário e gestão ágil da equipe de desenvolvimento.
