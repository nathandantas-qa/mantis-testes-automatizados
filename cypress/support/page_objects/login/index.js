import MyViewPage from '../my_view_page';
import {
    usernameFieldSelector,
    passwordFieldSelector,
    loginButtonSelector,
    loginErrorMessageSelector
  } from './selectors'

class LoginPage {
    visit() {
      cy.visit('https://mantis-prova.base2.com.br/login_page.php');
      return this;
    }
  
    setUsername(username) {
      cy.get(usernameFieldSelector).should('be.visible').type(username);
      return this;
    }
  
    setPassword(password) {
      cy.get(passwordFieldSelector).should('be.visible').type(password, { log: false })
      return this;
    }
    submitUsername() {
        cy.get(loginButtonSelector).click({ force: true });
        return this;
      }

    submitPassword() {
      cy.get(loginButtonSelector).click({ force: true });
      return new MyViewPage();
    }

    fillFormAndSubmit(
      username = Cypress.env('USERNAME'),
      password = Cypress.env('PASSWORD')
    ) {
      this.setUsername(username). 
      submitUsername().       
      setPassword(password).
      submitPassword();       
    }

    verifyErrorMessage(expectedMessage) {
      cy.get(loginErrorMessageSelector, { timeout: 10000 })
      .should('be.visible')
      .invoke('text') // Obtem o texto do elemento
      .then((actualText) => {
        expect(expectedMessage).to.equal(actualText); 
      });
      return this;
    }

  }

export default LoginPage;