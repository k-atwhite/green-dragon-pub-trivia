beforeEach(() => {
  cy.visit("http://localhost:3000").get(".heroes").click()
  cy.get(".card").first().click()
});

describe("Hero Quotes Page", () => {

  it("should display all quotes from selected Character", () => {
    cy.get(".quote-card").should("have.length", 214);
  });



////// This is how I would test error handling if my intercept was functional //////////
    // it("Should display an error message if cards cannot be rendered", () => {
    //     cy.intercept("https://the-one-api.dev/v2/character?name=Gandalf,Frodo%20Baggins,Aragorn%20II%20Elessar,Legolas,Arwen,Galadriel,Gimli,Boromir,Bilbo%20Baggins,Samwise%20Gamgee,Gollum,Saruman,Peregrin%20Took,Meriadoc%20Brandybuck,Elrond,Théoden,Faramir,Éowyn", { statusCode: 500 });
    //     cy.intercept("https://the-one-api.dev/v2/character/5cdbdecb6dc0baeae48cfa59/quote", { statusCode: 500 });
    //     cy.visit("http://localhost:3000").get(".heroes").click()
    //     cy.get(".card").first().click()
    //     cy.get("error-msg").contains("We are having trouble loading quotes")
    // });
});
