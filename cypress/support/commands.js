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
 Cypress.Commands.add('login', () => { 
    describe('Login no Mantis', () => {
        cy.get('#username').should('be.visible').type(Cypress.env('USERNAME'));
        cy.get('.width-40').click({ force: true });
        cy.get('#password').should('be.visible').type(Cypress.env('PASSWORD'), { log: false });
        cy.get('.width-40').click({ force: true });        
  })
})
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