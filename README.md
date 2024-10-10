## Teste Técnico

**Objetivo:** Este projeto visa demonstrar minhas habilidades em testes automatizados, utilizando JavaScript e Cypress. O objetivo principal é automatizar casos de teste relevantes que cubram as funcionalidades críticas do sistema, seguindo as melhores práticas de organização, reuso e manutenabilidade de código.

### Descrição do Teste Técnico

**Requisitos:**

* **Linguagem de Programação:** JavaScript
* **Framework de Automação Web:** Cypress
* **Sistema Alvo:** MantisBT 
* **Arquitetura do Projeto:** O Cypress já fornece uma estrutura otimizada para testes end-to-end (e2e), o que facilita a organização e a escrita de testes limpos e legíveis. As pastas principais (`cypress/e2e`, `cypress/fixtures`, `cypress/support`)  serão utilizadas para:
    - **`cypress/e2e`**: Armazenará os arquivos de teste, organizados por funcionalidade (ex: login, criar tarefa).
    - **`cypress/fixtures`**: Conterá dados de teste reutilizáveis, como informações de usuários ou tarefas, em formato JSON ou JavaScript, que poderão ser importados nos testes para evitar repetições e facilitar a manutenção.
    -  **`cypress/support`**:  Arquivos de suporte, como comandos customizados (ex: `cy.login()`),  configurações globais e  utilidades. 

**Cenários de Testes:**

Este projeto explora três abordagens para a estrutura do código de teste do login no Mantis:

**1. Estrutura Simples:**

- **Objetivo:** Demonstrar a implementação básica de testes de login, com todos os comandos do Cypress (cy) executados no mesmo script.
- **Exemplo:**  O arquivo `cypress/e2e/login.cy.js` contém o exemplo de teste de login com estrutura simples.

**2. Estrutura com Custom Commands:**

- **Objetivo:**  Demonstrar a utilização de comandos customizados para evitar repetição de código e melhorar a legibilidade dos testes.
- **Exemplo:**  O arquivo `cypress/support/commands.js` contém o comando customizado `cy.login()`, que é utilizado no arquivo `cypress/e2e/login.cy.js` para simplificar a escrita dos testes.

**3. Estrutura com Page Object:**

- **Objetivo:** Demonstrar a aplicação do padrão Page Object para organizar o código de forma mais modular e reutilizável.
- **Exemplo:**  A classe `LoginPage` em `cypress/support/pageObjects/login/index.js` define os métodos para interagir com a página de login, enquanto o arquivo `cypress/e2e/login.cy.js` utiliza a classe `LoginPage` para executar os testes.

**Relatório da Execução:** A integração contínua com GitHub Actions gera relatórios básicos no próprio log de execução, permitindo acompanhar o status dos testes. Você poderá ver quais testes passaram, falharam ou foram ignorados, além do tempo de execução.

### Execução dos Testes Localmente

1. **Clone este repositório:** 
   ```bash
   git clone https://github.com/nathandantas-qa/mantis-testes-automatizados.git
                   
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd mantis-testes-automatizados
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Execute os testes:**
   ```bash
   npx cypress open 
   ```

### Integração Contínua com GitHub Actions

Este projeto utiliza GitHub Actions para automatizar a execução dos testes em cada **push para a branch `develop` e em Pull Requests para a `main`**.  

**Para visualizar os resultados dos testes:**

1. Acesse a página do repositório no GitHub.
2. Clique na aba "Actions".
3. Selecione o workflow "Teste Técnico" (ou o nome do workflow que você configurou).
4. Você poderá ver o histórico de execuções, o status dos testes e os logs detalhados.

**Configuração de Variáveis de Ambiente:**

Para executar os testes no GitHub Actions, você precisa configurar as variáveis de ambiente:

1. **Acesse a página do seu repositório no GitHub.**
2. **Clique na aba "Settings".**
3. **Selecione "Secrets" no menu lateral.**
4. **Clique em "Add a new secret".**
5. **Insira o nome da variável de ambiente (ex: `USERNAME`, `PASSWORD`) e o valor.**
6. **Clique em "Add secret".**

No arquivo `ci.yml`, você pode acessar as variáveis de ambiente usando a sintaxe `${{ secrets.<nome-da-variável> }}`.  Por exemplo:

```yaml
jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    env:
      USERNAME: ${{ secrets.USERNAME }}
      PASSWORD: ${{ secrets.PASSWORD }}
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run Cypress tests
        run: npx cypress run
```

**Benefícios da CI:**

- **Execução Automática:**  Os testes são executados automaticamente em cada push, garantindo que o código esteja funcionando corretamente.
- **Feedback Rápido:**  A equipe recebe feedback imediato sobre o status dos testes, o que permite identificar e corrigir problemas rapidamente.
- **Cobertura de Testes:**  A CI garante que os testes sejam executados em todas as branches relevantes, aumentando a cobertura de testes e a qualidade do código.