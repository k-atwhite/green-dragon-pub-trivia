beforeEach(() => {
  cy.visit("http://localhost:3000").get(".heroes").click();
});

describe("Hero Page", () => {

  it("should display cards of all 18 heroes", () => {
    cy.get(".character").should("have.length", 18);
  });

  it("should include the characters name, race, sex, and realm", () => {
    cy.get(".card").first().should('include.text', 'Aragorn')
    .get(".card").first().should('include.text', 'Human')
    .get(".card").first().should('include.text', 'Male')
    .get(".card").first().should('include.text', 'Gondor')
  });

  it("A card should, if clicked, direct you to a list of that characters quotes", () => {
    cy.get(".card").first().click()
    cy.url().should('include', '/Aragorn%20II%20Elessar')
  });

//////// This is how I would test error handling if my intercept was functional //////////
    //  it("Should display an error message if cards cannot be rendered", () => {
    //    cy.intercept("https://the-one-api.dev/v2/character?name=Gandalf,Frodo%20Baggins,Aragorn%20II%20Elessar,Legolas,Arwen,Galadriel,Gimli,Boromir,Bilbo%20Baggins,Samwise%20Gamgee,Gollum,Saruman,Peregrin%20Took,Meriadoc%20Brandybuck,Elrond,Théoden,Faramir,Éowyn", { statusCode: 500 });
    //   cy.intercept("https://the-one-api.dev/v2/character/5cdbdecb6dc0baeae48cfa59/quote", { statusCode: 500 });
    //   cy.visit("http://localhost:3000/heroes");
    //   cy.get("error-msg").contains("trouble loading characters...");
    // });
});
