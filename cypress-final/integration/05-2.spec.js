describe("/signin", function() {
  it("should greet with `Sign In`", function() {
    cy.visit("/signin");
    cy.get("h1").contains("Sign In");
  });

  it("should have a link that navigate to login", function() {
    cy.get("/signin");
    cy.get("a").contains("Need an account?").should("have.attr", "href", "/register");
  });

  it("should sign me up successfully", function() {
    cy.get("/signin");
    cy.fixture("05.fixture").then(function(user) {
      cy.get("[data-test=email]").type(user.email);
      cy.get("[data-test=password]").type(user.password);
    });
  });
});
