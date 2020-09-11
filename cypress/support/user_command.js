Cypress.Commands.add('prepAuth', function(alias = 'user') {
	cy.fixture('userdata/user.json').as(alias)
})
