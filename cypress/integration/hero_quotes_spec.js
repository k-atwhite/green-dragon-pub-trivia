describe('Hero Quotes Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000').get('.heroes').click();
    cy.get('.card').first().click();
  });

  it('should display all quotes from selected Character', () => {
    cy.get('.quote-card').should('have.length', 214);
  });
});
