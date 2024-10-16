/// <reference types="cypress" />

describe('Login no Mantis', () => {
    
    const url_login = '/login_page.php';  

    beforeEach(() => {
      cy.fixture('users').as('users');
      cy.fixture('messages').as('messages');
    });

    it('CT01 - deve logar com sucesso', () => {     
        cy.visit(url_login);
    
        cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
      
        cy.url({ timeout: 10000 }).should('include', 'my_view_page.php');
    })

    
    it('CT02 - deve exibir mensagem de erro ao tentar logar com credenciais inválidas', () => {
      cy.get('@users').then((users) => {
        cy.get('@messages').then((messages) => {
          
          cy.visit(url_login);
          cy.login(users.username_invalid, users.password_invalid);

          cy.get('.alert-danger > p')
            .should('be.visible')
            .invoke('text') // Obtem o texto do elemento
            .then((text) => {
              expect(text).to.equal(messages.loginErrorMessage[Cypress.env('LANGUAGE')]); 
            });
            
        })        
      })
    })
  })