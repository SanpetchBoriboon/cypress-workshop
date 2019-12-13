describe("/signin", function() {
  it("should greet with `Sign In`", function() {
    cy.visit("/signin");
    cy.get("h1").contains("Sign In");
  });

  it("should have a link that navigate to login", function() {
    cy.get("/signin");
    cy.get("a").contains("Need an account?").should("have.attr", "href", "/register");
  });

  it("should sign me in successfully", function() {
    cy.get("/signin");
    cy.get("[data-test=email]").type("adam@gmail.com")
    cy.get("[data-test=password]").type("Super_Secure_Password_1{enter}")
  });
});
