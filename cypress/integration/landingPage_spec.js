beforeEach(() => {
  cy.fixture("mockCharacters").then((listData) => {
    cy.intercept(
      "https://the-one-api.dev/v2/character?name=Gandalf,Frodo Baggins,Aragorn II Elessar,Legolas,Arwen,Galadriel,Gimli,Boromir,Bilbo Baggins,Samwise Gamgee,Gollum,Saruman,Peregrin Took,Meriadoc Brandybuck,Elrond,Théoden,Faramir,Éowyn",
      listData
    );
  });

  cy.visit("http://localhost:3000/");
});

describe("Landing Page", () => {
  it("A welcome message describing the app in a general manner", () => {
    cy.get(".entry-container").should("be.visible");
  });

  it("The welcome message should have a link to the game", () => {
    cy.get(".link").should("be.visible");
  });

  it("The link should take you to the trivia url", () => {
    cy.get(".link").click().url().should("include", "/trivia");
  });
});
