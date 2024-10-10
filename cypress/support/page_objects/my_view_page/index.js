class MyViewPage {
    visit() {
      cy.visit('https://mantis-prova.base2.com.br/my_view_page.php');
    }
  
    verifyUrl() {
        cy.url({ timeout: 10000 }).should('include', 'my_view_page.php');
    }

  }

export default MyViewPage;