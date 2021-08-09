describe("Trivia Page", () => {
  beforeEach(() => {
    cy.intercept('GET', `https://the-one-api.dev/v2/character?name=Gandalf,Frodo%20Baggins,Aragorn%20II%20Elessar,Legolas,Arwen,Galadriel,Gimli,Boromir,Bilbo%20Baggins,Samwise%20Gamgee,Gollum,Saruman,Peregrin%20Took,Meriadoc%20Brandybuck,Elrond,Théoden,Faramir,Éowyn`, 
      { statusCode: 200, fixture: 'mockCharacter.json' }).as("character")
    .intercept('GET', 'https://the-one-api.dev/v2/character/5cdbdecb6dc0baeae48cfa59/quote', 
      { statusCode: 200, fixture: 'mockQuotes.json' })

    cy.wait("@character").visit("http://localhost:3000").get(".link").click()
  });

  it("Should show a loading message while data loads", () => {
    cy.get(".load-msg").contains("loading quote...");
  });

  it("Should show the quote associated with the random character id", () => {
    cy.get(".quote-text").contains(
      "I dreamed I saw a great wave climbing over green lands and above the     hills. I stood upon the brink. It was utterly dark in the abyss before my     feet. A light shone behind me but I could not turn ,     I could only stand there, waiting."
    );
  });

  // it("Should show buttons with all possible characters", () => {
  //   cy.get(".card").should("be.visible");
  // });

  // it("Clicking a character should show a response message", () => {
  //   // Time out is happinging too fast to show the response in cypress
  //   cy.get(".card").first().click().get("response").should("be.visible");
  // });

  // it("Should show an error message if quote data cannot be fetched", () => {
  //   cy.intercept(
  //     "https://the-one-api.dev/v2/character?name=Gandalf,Frodo%20Baggins,Aragorn%20II%20Elessar,Legolas,Arwen,Galadriel,Gimli,Boromir,Bilbo%20Baggins,Samwise%20Gamgee,Gollum,Saruman,Peregrin%20Took,Meriadoc%20Brandybuck,Elrond,Théoden,Faramir,Éowyn",
  //     { statusCode: 500 }
  //   );
  //   cy.intercept(
  //     "https://the-one-api.dev/v2/character/5cdbdecb6dc0baeae48cfa59/quote",
  //     { statusCode: 500 }
  //   );
  //   cy.visit("http://localhost:3000/trivia");
  //   cy.get("error-msg").contains("trouble loading character...");
  // });

  //     it("Clicking incorrect character should show sad message"), () => {
  //       cy.get(".card").contains("Éowyn")
  //   }
});

// How do I test for randomness
// How to test for sad path if intercept not working?
