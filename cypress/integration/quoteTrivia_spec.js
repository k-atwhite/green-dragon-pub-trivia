describe('Trivia Page', () => {
  ////////// THIS IS MY FAULTY INTERCEPT //////////
  beforeEach(() => {
    //   cy.intercept('GET', `https://the-one-api.dev/v2/character?name=Gandalf,Frodo%20Baggins,Aragorn%20II%20Elessar,Legolas,Arwen,Galadriel,Gimli,Boromir,Bilbo%20Baggins,Samwise%20Gamgee,Gollum,Saruman,Peregrin%20Took,Meriadoc%20Brandybuck,Elrond,Théoden,Faramir,Éowyn`,
    //     { statusCode: 200, fixture: 'mockCharacter.json' }).as("character")
    //   .intercept('GET', 'https://the-one-api.dev/v2/character/5cdbdecb6dc0baeae48cfa59/quote',
    //     { statusCode: 200, fixture: 'mockQuotes.json' })

    cy.visit('http://localhost:3000').get('.begin').click();
  });

  it('should show a loading message while data loads', () => {
    cy.get('.load-msg').contains('loading quote...');
  });

  it('should show the quote associated with the random character id', () => {
    cy.get('.quote-text').should('be.visible');
  });

  it('should show buttons with all possible characters', () => {
    cy.get('.card').should('be.visible');
  });
});
