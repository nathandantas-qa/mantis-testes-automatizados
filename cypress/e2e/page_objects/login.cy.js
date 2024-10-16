/// <reference types="cypress" />
import Login from '../../support/page_objects/login/index';
import MyViewPage from '../../support/page_objects/my_view_page/index';

const loginPage = new Login()
const myViewPage = new MyViewPage();

describe('Login no Mantis', () => {
 
  
  beforeEach(() => {
    cy.fixture('users').as('users');
    cy.fixture('messages').as('messages');
  });

  it('CT01 - deve logar com sucesso', () => {    
    loginPage.visit().
      fillFormAndSubmit();

    myViewPage.verifyUrl();
  })

  it('CT02 - deve exibir mensagem de erro ao tentar logar com credenciais inválidas', () => {
  
    cy.get('@users').then((users) => {
      cy.get('@messages').then((messages) => {
        loginPage.visit()
        .fillFormAndSubmit(users.username_invalid, users.password_invalid);
       
        loginPage.verifyErrorMessage(messages.loginErrorMessage[Cypress.env('LANGUAGE')]);        
      })
    })
  });
})