describe("Navigation Bar", () => {
  
  beforeEach(() => {
     cy.visit("http://localhost:3000/");
  });

    it("should contain link to Home", () => {
      cy.get("nav")
        .contains("Home")
        .click()
        .url("http://localhost:3000/");
    });

    it("should contain link to Trivia", () => {
      cy.get("nav")
        .contains("Quote Trivia")
        .click()
        .url("http://localhost:3000/trivia");
    });

    it("should contain link to Heroes", () => {
      cy.get("nav")
        .contains("Heroes")
        .click()
        .url("http://localhost:3000/heroes");
    });
});