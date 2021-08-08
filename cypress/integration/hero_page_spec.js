beforeEach(() => {
  cy.fixture("mockCharacter").then((characterData) => {
    cy.intercept(
      "https://the-one-api.dev/v2/character?name=Gandalf,Frodo Baggins,Aragorn II Elessar,Legolas,Arwen,Galadriel,Gimli,Boromir,Bilbo Baggins,Samwise Gamgee,Gollum,Saruman,Peregrin Took,Meriadoc Brandybuck,Elrond,Théoden,Faramir,Éowyn",
      characterData
    );
  });

  cy.fixture("mockQuotes").then((quote) => {
    cy.intercept("https://the-one-api.dev/v2/character/5cdbdecb6dc0baeae48cfa59/quote", quote);
  });


  cy.visit("http://localhost:3000").get(".heroes").click();
});

describe("Hero Page", () => {

    it("Should display cards of all 18 heroes", () => {
        cy.get(".character").should("have.length", 18);
    });

     it("Should display an error message if cards cannot be rendered", () => {
       cy.intercept("https://the-one-api.dev/v2/character?name=Gandalf,Frodo%20Baggins,Aragorn%20II%20Elessar,Legolas,Arwen,Galadriel,Gimli,Boromir,Bilbo%20Baggins,Samwise%20Gamgee,Gollum,Saruman,Peregrin%20Took,Meriadoc%20Brandybuck,Elrond,Théoden,Faramir,Éowyn", { statusCode: 500 });
      cy.intercept("https://the-one-api.dev/v2/character/5cdbdecb6dc0baeae48cfa59/quote", { statusCode: 500 });
      cy.visit("http://localhost:3000/heroes");
      cy.get("error-msg").contains("trouble loading characters...");
    });
});
