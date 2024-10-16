/// <reference types="cypress" />



describe('Login no Mantis', () => {

  const url_login = '/login_page.php';
  let language = Cypress.env('LANGUAGE') || 'pt-br';   

  beforeEach(() => {
    cy.fixture('users').as('users');
    cy.fixture('messages').as('messages');    
  });

  it('CT01 - deve logar com sucesso', () => {    
    cy.visit(url_login);
    cy.get('#username').should('be.visible').type(Cypress.env('USERNAME'));
    cy.get('.width-40').click({ force: true });
    cy.get('#password').should('be.visible').type(Cypress.env('PASSWORD'), { log: false });
    cy.get('.width-40').click({ force: true });   
    cy.url({ timeout: 10000 }).should('include', 'my_view_page.php');
  })
  
  it('CT02 - deve exibir mensagem de erro ao tentar logar com credenciais inválidas', () => {
    cy.get('@users').then((users) => {
      cy.get('@messages').then((messages) => {
        cy.visit(url_login);
        
        cy.get('#username').should('be.visible').type(users.username_invalid);
        cy.get('.width-40').click({ force: true });
        cy.get('#password').should('be.visible').type(users.password_invalid);
        cy.get('.width-40').click({ force: true });
    
        cy.get('.alert-danger > p')
          .should('be.visible')
          .invoke('text') // Obtem o texto do elemento
          .then((text) => {
            expect(text).to.equal(messages.loginErrorMessage[language]); 
          });
      }); 
    }); 
  })        
})
