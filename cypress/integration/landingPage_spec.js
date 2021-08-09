beforeEach(() => {
  //////// The Intercept I would have used if I could find out why cypress was ignoring it ///////

  // cy.intercept('GET', `https://the-one-api.dev/v2/character?name=Gandalf,Frodo%20Baggins,Aragorn%20II%20Elessar,Legolas,Arwen,Galadriel,Gimli,Boromir,Bilbo%20Baggins,Samwise%20Gamgee,Gollum,Saruman,Peregrin%20Took,Meriadoc%20Brandybuck,Elrond,Théoden,Faramir,Éowyn`, 
  //     { statusCode: 200, fixture: 'mockCharacter.json' }).as("character")

  cy.visit("http://localhost:3000/");
});

describe("Landing Page", () => {
  it("should have s welcome message describing the game", () => {
    cy.get(".entry-container").should("be.visible");
  });

  it("should have a link that takes user to the game", () => {
    cy.get(".link").should("be.visible");
  });

  it("the link should take you to the trivia url", () => {
    cy.get(".link").click().url().should("include", "/trivia");
  });
});
