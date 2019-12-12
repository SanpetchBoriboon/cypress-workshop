describe("02", function() {
  it("should have a link that navigate to /login", function() {
    cy.visit("/register");
    cy.get("a")
      .contains("Have an account?")
      .should("have.attr", "href", "/login");
  });
});
