describe("07-2", function() {
  before(function() {
    //? 🐨 https://docs.cypress.io/api/commands/exec.html#Syntax

    // implement your test here
  });

  beforeEach(function() {
    cy.visit("http://18.139.84.211:4100/login");
  });

  it("should greet with `Sign In`", function() {
    cy.get("h1").contains("Sign In");
  });

  it("should have a link that navigate to login", function() {
    cy.get("a").contains("Need an account?").should("have.attr", "href", "/register");
  });

  it("should sign me up successfully", function() {
    cy.fixture("05.fixture").then(function(user) {
      cy.get("[data-test=email]").type(user.email);
      cy.get("[data-test=password]").type(user.password + "{enter}");
    });
  });
});
