// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --


  Cypress.Commands.add('login', (username , password ) => { 
    cy.log('Iniciando o login com parametro');
    cy.get('#username').should('be.visible').type(username);
    cy.get('.width-40').click({ force: true });
    cy.get('#password').should('be.visible').type(password, { log: false });
    cy.get('.width-40').click({ force: true });        
  })

  Cypress.Commands.add('createTask', (taskData) => {
    cy.get(':nth-child(3) > a > .menu-icon').should('be.visible').click(); // Clique no botão
    cy.get('#category_id').select(taskData.category); 
  
    cy.get('#summary').type(taskData.summary);
    cy.get('#description').type(taskData.description);
    cy.get('.widget-toolbox > .btn').click(); // Clique no botão
  
    cy.get('.bold').should('contain', 'Operação realizada com sucesso.'); // Verifique o texto
  });
  
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })