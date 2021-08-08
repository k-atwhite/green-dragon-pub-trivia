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


  cy.visit("http://localhost:3000").get(".link").click();
});

describe("Trivia Page", () => {

    it("Should show a loading message while data loads", () => {
        cy.get(".load-msg").contains("loading quote...");
    });

    it("Should show the quote associated with the random character id", () => {
    cy.get(".quote-text").contains("I dreamed I saw a great wave climbing over green lands and above the     hills. I stood upon the brink. It was utterly dark in the abyss before my     feet. A light shone behind me but I could not turn ,     I could only stand there, waiting. ");
  });

    it("Should show buttons with all possible characters"), () => {
      cy.get(".card").contains("Éowyn")
  }

    it("Clicking correct character should show happy message"), () => {
      cy.get(".card").contains("Éowyn").get("response").contains("Well done, that's correct")
  }

//     it("Clicking incorrect character should show sad message"), () => {
//       cy.get(".card").contains("Éowyn")
//   }
// If this is supposed to be random... how do I test for that?

});
