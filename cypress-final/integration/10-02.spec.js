describe("/signin", function() {
  before(function() {
    cy.prepareAuth();
    return;
  });

  beforeEach(function() {
    cy.visit("/sigin");
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
