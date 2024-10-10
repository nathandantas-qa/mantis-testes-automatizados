/// <reference types="cypress" />

describe('Login no Mantis', () => {
  it('deve logar com sucesso', () => {    
    cy.visit('https://mantis-prova.base2.com.br/login_page.php');
    cy.get('#username').should('be.visible').type(Cypress.env('USERNAME'));
    cy.get('.width-40').click({ force: true });
    cy.get('#password').should('be.visible').type(Cypress.env('PASSWORD'), { log: false });
    cy.get('.width-40').click({ force: true });   
    cy.url({ timeout: 10000 }).should('include', 'my_view_page.php');
  })
})
