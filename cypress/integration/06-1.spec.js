describe("06-1", function() {
  beforeEach(function() {
    // implement your test here
  })

  it("should greet with `Sign Up`", function() {
    cy.visit("http://18.139.84.211:4100/register");
    cy.get("h1").contains("Sign Up");
  });

  it("should have a link that navigate to /register", function() {
    cy.visit("http://18.139.84.211:4100/register");
    cy.get("a").contains("Have an account?").should("have.attr", "href", "/login");
  });

  it("should sign me up successfully", function() {
    cy.visit("http://18.139.84.211:4100/register");
    cy.fixture("05.fixture").then(function(user) {
      cy.get("[data-test=username]").type(user.username);
      cy.get("[data-test=email]").type(user.email);
      cy.get("[data-test=password]").type(user.password + "{enter}");
    });
  });
});
