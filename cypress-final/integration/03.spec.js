describe("03", function() {
  it("[TAG] should sign me up successfully", function() {
    cy.visit("/register");
    cy.get("input").eq(0).type("adam");
    cy.get("input").eq(1).type("adam@gmail.com");
    cy.get("input").eq(2).type("Super_Secure_Password_1");
  });

  it("[ID] should sign me up successfully", function() {
    cy.visit("/register");
    cy.get("#username").type("adam");
    cy.get("#email").type("adam@gmail.com");
    cy.get("#password").type("Super_Secure_Password_1");
  })
});
