describe('Hero Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000').get('.heroes').click();
  });

  it('should display cards of all 18 heroes', () => {
    cy.get('.character').should('have.length', 18);
  });

  it('should include the characters name, race, sex, and realm', () => {
    cy.get('.card')
      .first()
      .should('include.text', 'Aragorn')
      .get('.card')
      .first()
      .should('include.text', 'Human')
      .get('.card')
      .first()
      .should('include.text', 'Male')
      .get('.card')
      .first()
      .should('include.text', 'Gondor');
  });

  it('A card should, if clicked, direct you to a list of that characters quotes', () => {
    cy.get('.card').first().click();
    cy.url().should('include', '/Aragorn%20II%20Elessar');
  });
});
