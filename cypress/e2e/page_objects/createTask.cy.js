/// <reference types="cypress" />

import Login from '../../support/page_objects/login/index';
import MyViewPage from '../../support/page_objects/my_view_page/index';
import TaskData from '../../support/models/task-data';
import TaskPage from '../../support/page_objects/create_task/index';

const loginPage = new Login();
const myViewPage = new MyViewPage();
const taskPage = new TaskPage();

describe('Criar tarefas', () => {
  let language = Cypress.env('LANGUAGE');

  beforeEach(() => {
    cy.fixture('tasks').as('tasks');
    cy.fixture('messages').as('messages');

    loginPage.visit()
      .fillFormAndSubmit();
    myViewPage.verifyUrl();
  });

  it('CT03.1 - Criar tarefa com campos obrigatórios (botão lateral)', () => {
    cy.get('@tasks').then((tasks) => {
      cy.get('@messages').then((messages) => {
        const category = tasks.createTaskWithMandatoryFieldsOnly["category"];
        const summary = tasks.createTaskWithMandatoryFieldsOnly["summary"];
        const description = tasks.createTaskWithMandatoryFieldsOnly["description"];
        const task = new TaskData(category, summary, description);

        taskPage.createTaskWithMandatoryFields(task);

        taskPage.verifySuccessMessage(messages.createTaskSuccess[Cypress.env('LANGUAGE')]);
      });
    });
  });

  it('CT03.2 - Criar tarefa com campos obrigatórios (botão superior)', () => {
    cy.get('@tasks').then((tasks) => {
      cy.get('@messages').then((messages) => {
        const category = tasks.createTaskWithMandatoryFieldsOnly["category"];
        const summary = tasks.createTaskWithMandatoryFieldsOnly["summary"];
        const description = tasks.createTaskWithMandatoryFieldsOnly["description"];
        const task = new TaskData(category, summary, description);

        taskPage.createTaskWithMandatoryFieldsFromTopButton(task);

        taskPage.verifySuccessMessage(messages.createTaskSuccess[Cypress.env('LANGUAGE')]);
      });
    });
  });
});