Cypress.Commands.add("login", function() {
  cy.route("POST", "/api/users/login").as("loginRoute");
  cy.visit("http://18.139.84.211:4100/signin");

  cy.get("[data-test=email]").type(user.email);
  cy.get("[data-test=password]").type(user.password + "{enter}");

  cy.wait("@loginRoute");
});

Cypress.Commands.add("createArticle", function() {
  cy.route("POST", "/api/articles").as("createArticleRoute");
  cy.visit("http://18.139.84.211:4100/editor");

  cy.get("[data-test=title]").type("Test title");
  cy.get("[data-test=description]").type("Test description");
  cy.get("[data-test=content]").type("This is a test content");
  cy.get("[data-test=tags]").type("tag1{enter}tag2{enter}tag3{enter}");
  cy.get("[data-test=submit-article]").click();

  cy.wait("@createArticleRoute");
});
