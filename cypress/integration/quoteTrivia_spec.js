describe("Trivia Page", () => {

 ////////// THIS IS MY FAULTY INTERCEPT //////////
  beforeEach(() => {
  //   cy.intercept('GET', `https://the-one-api.dev/v2/character?name=Gandalf,Frodo%20Baggins,Aragorn%20II%20Elessar,Legolas,Arwen,Galadriel,Gimli,Boromir,Bilbo%20Baggins,Samwise%20Gamgee,Gollum,Saruman,Peregrin%20Took,Meriadoc%20Brandybuck,Elrond,Théoden,Faramir,Éowyn`, 
  //     { statusCode: 200, fixture: 'mockCharacter.json' }).as("character")
  //   .intercept('GET', 'https://the-one-api.dev/v2/character/5cdbdecb6dc0baeae48cfa59/quote', 
  //     { statusCode: 200, fixture: 'mockQuotes.json' })

  cy.visit("http://localhost:3000").get(".link").click()
  });

  it("Should show a loading message while data loads", () => {
    cy.get(".load-msg").contains("loading quote...");
  });

  it("Should show the quote associated with the random character id", () => {
    cy.get(".quote-text").should('be.visible')
  });

  it("Should show buttons with all possible characters", () => {
    cy.get(".card").should("be.visible");
  });

////////// I would like to have included testing for happy/sad response if the intercept was cooperating. And my setTimeOut function is happening too quickly for cypress to catch the response.

  it("Clicking a character should show a response message", () => {
    cy.get(".card").first().click().get("response").should("be.visible");
  });

////////// SAD PATH FOR RESPONSE MESSAGE:
  // it("Clicking incorrect character should show sad message"), () => {
  //   cy.get(".card").contains("Éowyn").get("response").contains("Actually, that was Éowyn");
  // }

////////// I would also like to show an error messge here for when data cannot be fetched. Also an issue with intercepting.

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
});
