describe("10-2", function() {
  before(function() {
    cy.exec("npm run db:destroy && npm run db:migrate")
  });

  beforeEach(function() {
    // refactor code here
    cy.visit("http://18.139.84.211:4100/register");
    cy.fixture("05.fixture").as("testUser")
  });

  it("should greet with `Sign In`", function() {
    cy.get("h1").contains("Sign In");
  });

  it("should have a link that navigate to login", function() {
    cy.get("a").contains("Need an account?").should("have.attr", "href", "/register");
  });

  it("should sign me up successfully", function() {
    cy.get("[data-test=email]").type(this.testUser.email);
    cy.get("[data-test=password]").type(this.testUser.password + "{enter}");
  });
});
