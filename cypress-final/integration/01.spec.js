describe("01", function() {
  it("should greet with `Sign Up`", function() {
    cy.visit("http://18.139.84.211:4100/register");
    cy.get("h1").contains("Sign Up");
  });
});
