describe("02", function() {
  it("should have a link that navigate to /login", function() {
    cy.visit("http://18.139.84.211:4100/register");
    cy.get("a").contains("Have an account?").should("have.attr", "href", "/login");
  });
});
