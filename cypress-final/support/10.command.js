Cypress.Commands.add("prepareAuth", function() {
  cy.task("npm run db:destroy && npm run db:migrate")
  cy.fixture("05.fixture").as("testUser")
})