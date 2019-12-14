describe("04", function() {
  it("should greet with `Sign In`", function() {
    cy.visit("http://18.139.84.211:4100/signin");
    cy.get("h1").contains("Sign In");
  });

  it("should have a link that navigate to login", function() {
    cy.visit("http://18.139.84.211:4100/signin");
    cy.get("h1").contains("Sign In");
    cy.get("a").contains("Need an account?").should("have.attr", "href", "/register");
  });

  it("should sign me in successfully", function() {
    cy.visit("http://18.139.84.211:4100/signin");
    cy.get("[data-test=email]").type("adam@gmail.com")
    cy.get("[data-test=password]").type("Super_Secure_Password_1{enter}")
  });
});
