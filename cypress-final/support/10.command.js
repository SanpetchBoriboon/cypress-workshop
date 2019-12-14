Cypress.Commands.add("prepareAuth", function(path = "register") {
  cy.visit(`http://18.139.84.211:4100/${register}`);
  cy.fixture("05.fixture").as("testUser");
});
