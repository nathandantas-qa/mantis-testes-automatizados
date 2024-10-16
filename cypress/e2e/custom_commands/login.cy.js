/// <reference types="cypress" />

describe('Login no Mantis', () => {
    it('deve logar com sucesso', () => {    
        cy.visit('https://mantis-prova.base2.com.br/login_page.php');

        cy.login();
      
        cy.url({ timeout: 10000 }).should('include', 'my_view_page.php');
    })
  })