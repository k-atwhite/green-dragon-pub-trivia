beforeEach(() => {
    // const names = [
    //     "Gandalf",
    //     "Frodo Baggins",
    //     "Aragorn II Elessar",
    //     "Legolas",
    //     "Arwen",
    //     "Galadriel",
    //     "Gimli",
    //     "Boromir",
    //     "Bilbo Baggins",
    //     "Samwise Gamgee",
    //     "Gollum",
    //     "Saruman",
    //     "Peregrin Took",
    //     "Meriadoc Brandybuck",
    //     "Elrond,Théoden",
    //     "Faramir",
    //     "Éowyn",
    // ];

    // let joinedNames = names.join(",");

//   cy.fixture("mockCharacter").then((characterData) => {
//     cy.intercept(
//       `https://the-one-api.dev/v2/character?name=Gandalf,Frodo%20Baggins,Aragorn%20II%20Elessar,Legolas,Arwen,Galadriel,Gimli,Boromir,Bilbo%20Baggins,Samwise%20Gamgee,Gollum,Saruman,Peregrin%20Took,Meriadoc%20Brandybuck,Elrond,Théoden,Faramir,Éowyn`,
//       characterData
//     );
//   });

//   cy.fixture("mockQuotes").then((quote) => {
//     cy.intercept("https://the-one-api.dev/v2/character/5cdbdecb6dc0baeae48cfa59/quote", quote);
//   });


  cy.visit("http://localhost:3000").get(".link").click();
});

describe("Trivia Page", () => {

    it("Should show a loading message while data loads", () => {
        cy.get(".load-msg").contains("loading quote...");
    });

    it("Should show the quote associated with the random character id", () => {
    cy.get(".quote-text").should('be.visible');
  });

    it("Should show buttons with all possible characters", () => {
      cy.get(".card").should('be.visible')
  })

    it("Clicking a character should show a response message", () => {
        // Time out is happinging too fast to show the response in cypress
      cy.get(".card").first().click().get("response").should('be.visible')
  })

//     it("Clicking incorrect character should show sad message"), () => {
//       cy.get(".card").contains("Éowyn")
//   }
// If this is supposed to be random... how do I test for that?

});