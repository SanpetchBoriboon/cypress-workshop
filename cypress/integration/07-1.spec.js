describe("07-1", function() {
  before(function() {
    //? 🐨 https://docs.cypress.io/api/commands/exec.html#Syntax

    // implement your test here
  });

  beforeEach(function() {
    cy.visit("http://18.139.84.211:4100/register");
  });

  it("should greet with `Sign Up`", function() {
    cy.get("h1").contains("Sign Up");
  });

  it("should have a link that navigate to /register", function() {
    cy.get("a").contains("Have an account?").should("have.attr", "href", "/login");
  });

  it("should sign me up successfully", function() {
    cy.fixture("05.fixture").then(function(user) {
      cy.get("[data-test=username]").type(user.username);
      cy.get("[data-test=email]").type(user.email);
      cy.get("[data-test=password]").type(user.password + "{enter}");
    });
  });
});
