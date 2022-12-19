describe('Questionnaire Answer', () => {
  it('Rendering Headline', () => {
    cy.visit('/#/questionnaires/12345');
    cy.waitFor(2000);
    cy.contains('div.is-size-4', 'Test task form');
  });
  it('Validation Enable/Disable Submit', () => {
    cy.visit('/#/questionnaires/12345');
    cy.waitFor(2000);
    cy.get('button[type=submit]').should('be.disabled');
    cy.get('.questionnaire--page .buttons button').eq(1).click();
    cy.get('button[type=submit]').should('be.disabled');
    cy.get('.questionnaire--page .buttons button').eq(6).click();
    cy.get('button[type=submit]').should('be.disabled');
    cy.get('.questionnaire--page .buttons button').eq(17).click();
    cy.get('button[type=submit]').should('not.be.disabled');
    cy.get('button[type=submit]').click();
    cy.waitFor(2000);
    cy.contains('div.is-size-3.block', 'Thank You');
  });
});
