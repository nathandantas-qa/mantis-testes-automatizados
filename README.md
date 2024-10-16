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

### Estratégia de Testes

O sistema alvo dos testes automatizados é o MantisBT. O foco principal é a priorização dos testes, demonstrando a capacidade de aplicar boas práticas de automação e a abordagem right-left.

**Contexto do Teste Técnico:**

Como este é um projeto de desafio, e não há requisitos específicos de negócio ou acesso a dados de produção para aplicar técnicas de teste como particionamento de equivalência, análise do valor limite e tabela de decisão, os casos de teste a seguir foram gerados por IA. Os valores preenchidos para os itens FC, FUC, AI e AP também foram preenchidos por IA para fins didáticos. Em um projeto real, o ideal é consultar o Product Owner (PO) e os dados de monitoramento da aplicação para obter mais precisão.

**Tipos de Testes:**

- **Testes de UI (End-to-End):** Simulam o comportamento de um usuário real, interagindo com a interface do usuário.
- **Testes de API:** Validam a API REST do MantisBT, utilizando requisições HTTP.

**Casos de Teste (CT):**

| Caso de Teste (CT)                                               | Tipo        | FC | FUC | AI | AP | Prioridade | Status       |
|-------------------------------------------------------------------|-------------|----|-----|----|----|------------|--------------|
| CT01 - Login com sucesso (UI)                                    | UI          | 5  | 5   | 5  | 5  | **125**     | Completo    |
| CT03 - Criar tarefa com campos obrigatórios (UI)                 | UI          | 5  | 5   | 5  | 3  | **75**      | Em Andamento | 
| CT05 - Criar tarefa via API (campos obrigatórios)                | API         | 5  | 5   | 5  | 3  | **75**      | Em Andamento |
| CT02 - Login com credenciais inválidas (UI)                       | UI          | 3  | 4   | 5  | 3  | **52.5**    | Completo     |
| CT15 - Editar usuário via API                                   | API         | 4  | 2   | 4  | 3  | **36**      | A Fazer     |
| CT06 - Criar tarefa via API (todos os campos)                     | API         | 4  | 4   | 4  | 2  | **32**      | A Fazer     |
| CT09 - Visualizar tarefas (UI)                                   | UI          | 4  | 4   | 4  | 2  | **32**      | A Fazer     |
| CT10 - Obter lista de tarefas via API                            | API         | 4  | 4   | 4  | 2  | **32**      | A Fazer     |
| CT08 - Tentar criar tarefa via API (dados inválidos)             | API         | 3  | 2   | 4  | 3  | **30**      | A Fazer     |
| CT16 - Atualizar privilégios de usuário via API                  | API         | 4  | 1   | 4  | 3  | **30**      | A Fazer     |
| CT04 - Tentar criar tarefa com campos obrigatórios vazios (UI)   | UI          | 4  | 3   | 4  | 2  | **28**      | A Fazer     |
| CT07 - Tentar criar tarefa via API (campos obrigatórios vazios)  | API         | 4  | 3   | 4  | 2  | **28**      | A Fazer     |
| CT12 - Editar tarefa (UI)                                       | UI          | 4  | 3   | 4  | 2  | **28**      | A Fazer     | 
| CT13 - Editar tarefa via API                                     | API         | 4  | 3   | 4  | 2  | **28**      | A Fazer     |
| CT17 - Adicionar perfil (UI)                                    | UI          | 3  | 2   | 3  | 2  | **15**      | A Fazer     | 
| CT18 - Editar perfil (UI)                                       | UI          | 3  | 2   | 3  | 2  | **15**      | A Fazer     | 
| CT11 - Obter tarefa por ID via API                               | API         | 3  | 3   | 3  | 1  | **9**       | A Fazer     |

**Critérios para Automação:**

- **Funcionalidade Crítica (FC):** Quão essencial é a funcionalidade para o funcionamento do sistema? (1-5, sendo 5 o mais crítico)
- **Fluxo de Usuário Comum (FUC):** Com que frequência os usuários utilizam essa funcionalidade? (1-5, sendo 5 o mais comum)
- **Área de Impacto (AI):** Qual o impacto de um erro nesta funcionalidade no sistema como um todo? (1-5, sendo 5 o maior impacto)
- **Área de Probabilidade (AP):** Qual a probabilidade de erros ocorrerem nesta funcionalidade? (1-5, sendo 5 a maior probabilidade)

**Priorização:**

A prioridade de automação é calculada usando a seguinte fórmula: **(FC + FUC) / 2 * AI * AP**

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
4. **Configure as variáveis de ambiente:**

Crie um arquivo cypress.env.json na raiz do projeto e adicione as seguintes variáveis:

USERNAME=seu_usuario
PASSWORD=sua_senha
URL=https://mantis-prova.base2.com.br
LANGUAGE=pt-BR # Define o idioma para português (Brasil)

5. **Execute os testes:**
   ```bash
   npx cypress open 
   ```

### Integração Contínua com GitHub Actions

A utilização do GitHub Actions para automatizar a execução dos testes em cada **push para a branch `develop` e em Pull Requests para a `main`**.  

**Para visualizar os resultados dos testes:**

1. Acesse a página do repositório no GitHub.
2. Clique na aba "Actions".
3. Selecione o workflow "Teste Técnico".
4. Você poderá ver o histórico de execuções, o status dos testes e os logs detalhados.

### Configuração de Variáveis de Ambiente

Para executar os testes no GitHub Actions, foi configurado as variáveis de ambiente:

1. **Acesse a página do seu repositório no GitHub.**
2. **Clique na aba "Settings".**
3. **Selecione "Secrets" no menu lateral.**
4. **Clique em "Add a new secret".**
5. **Insira o nome da variável de ambiente (ex: `CYPRESS_ENV_CI`) e o valor.**
6. **Clique em "Add secret".**

**Criando o Arquivo `cypress.env.json`:**

No workflow do GitHub Actions, localizada em ".github\workflows\ci.yml" foi incluido o código para criação do arquivo `cypress.env.json` para definir as variáveis de ambiente que serão utilizadas pelos testes do Cypress.

```yaml
name: Teste Tecnico
on:
  pull_request:
    branches:
      - main
      - develop
      - 'releases/**'
jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
     
      - name: Install dependencies
        run: npm install

      - name: Write the cypress.env.json file 📝
        # use quotes around the secret, as its value
        # is simply inserted as a string into the command
        run: |
          echo '${{ secrets.CYPRESS_ENV_CI }}' > cypress.env.json  
      
      - name: Cypress run
        uses: cypress-io/github-action@v6
        
      - uses: actions/upload-artifact@v4
        # add the line below to store screenshots only on failures
        if: failure()
        with:
          name: cypress-screenshots
          path: cypress/screenshots
          if-no-files-found: ignore # 'warn' or 'error' are also available, defaults to `warn`
      
      - uses: actions/upload-artifact@v4
        with:
          name: cypress-videos
          path: cypress/videos
          if-no-files-found: ignore # 'warn' or 'error' are also available, defaults to `warn`
```

**Benefícios da CI:**

- **Execução Automática:**  Os testes são executados automaticamente em cada push, garantindo que o código esteja funcionando corretamente.
- **Feedback Rápido:**  A equipe recebe feedback imediato sobre o status dos testes, o que permite identificar e corrigir problemas rapidamente.
- **Cobertura de Testes:**  A CI garante que os testes sejam executados em todas as branches relevantes, aumentando a cobertura de testes e a qualidade do código.

### Boas Práticas de Cypress

Este projeto utiliza as seguintes boas práticas do Cypress para garantir a qualidade e a manutenabilidade dos testes:

- **Aliases:** A aliases para compartilhar objetos entre hooks e testes, especialmente ao lidar com fixtures. Isso melhora a organização do código e evita a repetição de código.
- **Page Objects:** O padrão Page Object para modularizar o código de teste e aumentar a reutilização. Isso torna o código mais fácil de entender, manter e atualizar.
- **Comandos Customizados:** Comandos customizados para ações comuns, como login e criação de tarefas. Isso simplifica a escrita dos testes e evita a repetição de código.
- **Fixtures:** Fixtures para armazenar dados de teste reutilizáveis, como informações de usuários e mensagens de erro. Isso centraliza os dados de teste e facilita a manutenção.
- **Gerenciamento de Variáveis de Ambiente:** Utilizamos o `.cypress.env.json` e os `secrets` do GitHub Actions para armazenar informações sensíveis. Isso garante a segurança das informações e facilita a configuração do projeto.
**Exemplos:**
- **Alias para Fixture:**
  ```javascript
  cy.fixture('users.json').as('users');
  ```
- **Comando Customizado:**
  ```javascript
  Cypress.Commands.add('login', (username, password) => {
    // ...
  });
  ```
- **Page Object:**
  ```javascript
  class LoginPage {
    // ...
  }
  ```
- **Asserção:**
  ```javascript
  cy.get('.alert-danger > p').should('be.visible').and('contain', 'Mensagem de erro');
  ```

### Dificuldades e Soluções

Durante o desenvolvimento do projeto, foram encontrado algumas dificuldades:

1. **Configuração das Variáveis de Ambiente:**  A configuração das variáveis de ambiente do Cypress para serem utilizadas no GitHub Actions, garantindo a segurança da senha.
    - **Problema:** Como definir a variável do GitHub com a mesma referência utilizada no arquivo cypress.env.json.
    - **Solução:**  Uso do `secrets` do GitHub Actions para armazenar o json referente ao cypress.env.json, além de adicionar um script para criar o arquivo cypress.env.json durante o fluxo de CI.
    - **Exemplo:**
      ```yaml
     - name: Write the cypress.env.json file 📝
        run: |
          echo '${{ secrets.CYPRESS_ENV_CI }}' > cypress.env.json  
      ```
2. **Configuração para Execução Local em Português (pt-BR) e no GitHub Actions em Inglês (en):**
    - **Problema:** A execução local resultava no navegador configurado em pt-BR, enquanto no GitHub Actions o idioma padrão era en. Devido a essa diferença, ocorreram falhas nos testes, já que os textos esperados estavam em outro idioma.
    - **Solução:**  Foi criado a variável de ambiente `LANGUAGE` para definir o idioma e criado a fixture messages.json para armazenar as mensagens de erro em diferentes idiomas.
