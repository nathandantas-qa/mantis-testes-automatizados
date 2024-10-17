/// <reference types="cypress" />

describe('Criar tarefas', () => {
    const url_login = '/login_page.php';
    beforeEach(() => {
        cy.visit(url_login);
        cy.get('#username').should('be.visible').type(Cypress.env('USERNAME'));
        cy.get('.width-40').click({ force: true });
        cy.get('#password').should('be.visible').type(Cypress.env('PASSWORD'), { log: false });
        cy.get('.width-40').click({ force: true });   
        cy.url({ timeout: 10000 }).should('include', 'my_view_page.php');
    });

    
    it.only('CT03.1 - Criar tarefa com campos obrigatórios (botão lateral)', () => {    
        cy.get(':nth-child(3) > a > .menu-icon').should('be.visible').click(); // Clique no botão
        cy.get('#category_id').select('[Todos os Projetos] categoria teste'); 
      
        cy.get('#summary').type("AAA");
        cy.get('#description').type("bbb");
        cy.get('.widget-toolbox > .btn').click(); // Clique no botão
      
        cy.get('.bold').should('contain', 'Operação realizada com sucesso.'); // Verifique o texto

    })

    it('CT03.2 - Criar tarefa com campos obrigatórios (botão superior)', () => {    
        cy.get('.hidden-sm > .btn-group > .btn').should('be.visible').click(); // Clique no botão
        cy.get('#category_id').select('[Todos os Projetos] categoria teste'); 
      
        cy.get('#summary').type("AAA");
        cy.get('#description').type("bbb");
        cy.get('.widget-toolbox > .btn').click(); // Clique no botão
      
        cy.get('.bold').should('contain', 'Operação realizada com sucesso.'); // Verifique o texto

    })
})