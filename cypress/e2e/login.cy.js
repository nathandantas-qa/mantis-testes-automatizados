/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    
    //
    cy.visit('https://mantis-prova.base2.com.br/login_page.php');

    cy.get('#username').type("Marcus_Silva");

    cy.get('.width-40').click({ force: true });

    cy.url().should('include', 'login_password_page.php');

    cy.get('#password').should('be.visible').type('123456');

    cy.get('.width-40').click({ force: true });

    cy.url().should('include', 'index.php');
    
    cy.url({ timeout: 10000 }).should('include', 'my_view_page.php');
  })
})