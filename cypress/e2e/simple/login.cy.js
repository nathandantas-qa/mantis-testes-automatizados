/// <reference types="cypress" />

describe('Login no Mantis', () => {
  it('deve logar com sucesso', () => {    
    cy.visit('https://mantis-prova.base2.com.br/login_page.php');

    cy.log(Cypress.env('VAR_USERNAME'));
    cy.log(Cypress.env('VAR_PASSWORD'));
    cy.log(Cypress.env('CYPRESS_USERNAME'));
    cy.log(Cypress.env('CYPRESS_PASSWORD'));
    cy.get('#username').should('be.visible').type(Cypress.env('CYPRESS_USERNAME'));
    cy.get('.width-40').click({ force: true });
    cy.get('#password').should('be.visible').type(Cypress.env('CYPRESS_PASSWORD'), { log: false });
    cy.get('.width-40').click({ force: true });   
    cy.url({ timeout: 10000 }).should('include', 'my_view_page.php');
  })
})
