describe("01", function() {
  it("should greet with `Sign Up`", function() {
    cy.visit("/register");
    cy.get("h1").contains("Sign Up");
  });
});
