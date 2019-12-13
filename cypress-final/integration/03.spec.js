describe("03", function() {
  it("[TAG] should sign me up successfully", function() {
    cy.visit("/register");
    cy.get("input").eq(0).type("adam");
    cy.get("input").eq(1).type("adam@gmail.com");
    cy.get("input").eq(2).type("Super_Secure_Password_1");
    cy.get("form").get("button").click();
  });

  it("[CLASS] should sign me up successfully", function() {
    cy.visit("/register");
    cy.get(".form-control .form-control-lg").eq(0).type("adam");
    cy.get(".form-control .form-control-lg").eq(1).type("adam@gmail.com");
    cy.get(".form-control .form-control-lg").eq(2).type("Super_Secure_Password_1");
    cy.get(".btn btn-lg").get("button").click();
  });

  it("[ID] should sign me up successfully", function() {
    cy.visit("/register");
    cy.get("#username").type("adam");
    cy.get("#email").type("adam@gmail.com");
    cy.get("#password").type("Super_Secure_Password_1");
    cy.get("#register-submit").click()
  });

  it("[DATA-*] should sign me up successfully", function() {
    cy.visit("/register");
    cy.get("[data-test=username]").type("adam")
    cy.get("[data-test=email]").type("adam@gmail.com");
    cy.get("[data-test=password]").type("Super_Secure_Password_1");
    cy.get("[data-test=register-submit]").click()
  });

  it("[SUBMIT_WITH_SPECIAL_KEY] should sign me up successfully", function() {
    cy.visit("/register");
    cy.get("[data-test=username]").type("adam")
    cy.get("[data-test=email]").type("adam@gmail.com");
    cy.get("[data-test=password]").type("Super_Secure_Password_1{enter}");
  });
});
