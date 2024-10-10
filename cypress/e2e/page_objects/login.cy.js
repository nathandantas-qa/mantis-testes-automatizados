/// <reference types="cypress" />
import Login from '../../support/page_objects/login/index';
import MyViewPage from '../../support/page_objects/my_view_page/index';

const loginPage = new Login()
const myViewPage = new MyViewPage();

describe('Login no Mantis', () => {
  it('deve logar com sucesso', () => {    
    
    loginPage.visit().
      fillFormAndSubmit();

    myViewPage.verifyUrl();
  })
})