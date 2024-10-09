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
        *  Embora o Cypress facilite a escrita de código limpo, tornando o uso de Page Objects menos crucial, a decisão de utilizá-los ou não dependerá da complexidade dos testes e da preferência da equipe. A estrutura do projeto estará preparada para se adaptar a diferentes abordagens.
* **Cenários de Testes:** Definir e implementar casos de teste relevantes que demonstrem o uso eficaz do Cypress para interagir com a interface do Mantis, por exemplo o login e criar tarefas.
* **Relatório da Execução:** A integração contínua com GitHub Actions gera relatórios básicos no próprio log de execução, permitindo acompanhar o status dos testes. Você poderá ver quais testes passaram, falharam ou foram ignorados, além do tempo de execução.

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
