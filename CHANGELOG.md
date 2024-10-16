## Changelog

### [0.1.2] - 17/10/2024 

#### Adicionado
- Criação do teste para adicionar tarefas [feature/CT03-criar-tarefa]
- Criação do teste para login inválido [feature/CT02-login-invalido]
- Atualização da documentação do Readme.md, adicionado Estratégia de Testes [feature/planejar-tarefas]

### [0.1.1] - 10/10/2024 

#### Adicionado
- Testes de login no Mantis com três abordagens de estrutura de código:
    - **Estrutura Simples:**  Todos os comandos do Cypress (cy) são executados no mesmo script.
    - **Estrutura com Custom Commands:**  Utilização de custom commands para evitar repetição de código.
    - **Estrutura com Page Object:**  Aplicação do padrão Page Object para organizar o código de forma mais modular e reutilizável.
- Documentação no `README.md` sobre as diferentes abordagens de testes.

### [0.1.0] - 09/10/2024 (versão inicial)

#### Adicionado
- Configuração inicial do projeto com Cypress.
- Teste de login no Mantis.
- Documentação no README.md.
- Configuração da Integração Contínua (GitHub Actions)
- Documentação CHANGELOG.md
