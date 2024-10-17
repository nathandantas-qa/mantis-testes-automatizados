/// <reference types="cypress" />


import TaskData from '../../support/models/task-data'; // Importar a classe TaskData
describe('Criar tarefas', () => {
    const url_login = '/login_page.php';
    const language = Cypress.env('LANGUAGE');  

    beforeEach(() => {
        cy.fixture('tasks').as('tasks');
        cy.fixture('messages').as('messages');


        cy.visit(url_login);
        cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
        cy.url({ timeout: 10000 }).should('include', 'my_view_page.php');

    });

    
    it('CT03.1 - Criar tarefa com campos obrigatórios (botão lateral)', () => {    
        cy.get('@tasks').then((tasks) => {
            cy.get('@messages').then((messages) => {
                const category = tasks.createTaskWithMandatoryFieldsOnly["category"];
                const summary = tasks.createTaskWithMandatoryFieldsOnly["summary"];
                const description = tasks.createTaskWithMandatoryFieldsOnly["description"];
                const task = new TaskData(category, summary, description);

                cy.get(':nth-child(3) > a > .menu-icon').should('be.visible').click(); 
                
                cy.createTask(task);
                
                cy.get('.bold')
                .should('be.visible')
                .invoke('text') // Obtem o texto do elemento
                .then((text) => {
                expect(messages.createTaskSuccess[Cypress.env('LANGUAGE')]).to.equal(text); 
                });
            })
        })
    })

    it('CT03.2 - Criar tarefa com campos obrigatórios (botão superior)', () => {    
            
        cy.get('@tasks').then((tasks) => {
            cy.get('@messages').then((messages) => {
                const category = tasks.createTaskWithMandatoryFieldsOnly["category"];
                const summary = tasks.createTaskWithMandatoryFieldsOnly["summary"];
                const description = tasks.createTaskWithMandatoryFieldsOnly["description"];
                const task = new TaskData(category, summary, description);

                cy.get('.hidden-sm > .btn-group > .btn').should('be.visible').click(); 
                
                cy.createTask(task);
                    
                cy.get('.bold')
                .should('be.visible')
                .invoke('text') // Obtem o texto do elemento
                .then((text) => {
                expect(messages.createTaskSuccess[Cypress.env('LANGUAGE')]).to.equal(text); 
                });
            });
        })
    })
})