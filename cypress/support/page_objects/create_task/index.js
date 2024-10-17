import {
  createTaskButtonLateralSelector,
  createTaskButtonSuperiorSelector,
  categoryIdSelector,
  summaryFieldSelector,
  descriptionFieldSelector,
  submitButtonSelector,
  successMessageSelector
  } from './selectors'

class TaskPage {
  createTaskWithMandatoryFields(taskData) {
    this.openNewTaskForm();
    this.selectCategory(taskData.category);
    this.fillSummary(taskData.summary);
    this.fillDescription(taskData.description);
    this.submitTask();
    
  }
  
  openNewTaskForm() {
    cy.get(createTaskButtonLateralSelector).should('be.visible').click();
  }

  selectCategory(category) {
    cy.get(categoryIdSelector).select(category);
  }

  fillSummary(summary) {
    cy.get(summaryFieldSelector).type(summary);
  }

  fillDescription(description) {
    cy.get(descriptionFieldSelector).type(description);
  }

  submitTask() {
    cy.get(submitButtonSelector).click();
  }

  createTaskWithMandatoryFieldsFromTopButton(taskData) {
    this.openNewTaskFormFromTopButton();
    this.selectCategory(taskData.category);
    this.fillSummary(taskData.summary);
    this.fillDescription(taskData.description);
    this.submitTask();
  }

  openNewTaskFormFromTopButton() {
    cy.get(createTaskButtonSuperiorSelector).should('be.visible').click();
  }
  verifySuccessMessage(mensagem) {
    cy.get('.bold')
    .should('be.visible')
    .invoke('text') // Obtem o texto do elemento
    .then((text) => {
    expect(mensagem).to.equal(text); 
    });
  }
  verifyErrorMessage(expectedMessage) {
    cy.get(successMessageSelector, { timeout: 10000 })
    .should('be.visible')
    .invoke('text') // Obtem o texto do elemento
    .then((actualText) => {
      expect(expectedMessage).to.equal(actualText); 
    });
    return this;
  }

}

export default TaskPage;