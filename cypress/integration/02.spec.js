describe('02', function() {
	it('should have a link that navigate to /login', function() {
		//? 🐨 https://docs.cypress.io/api/commands/should.html#Syntax
		//? 🐨 https://docs.cypress.io/guides/references/assertions.html#Chai
		cy.visit('http://18.139.84.211:4100/register')
		cy.get('a')
			.contains(/have an account/i)
			.should('have.attr', 'href', '/login')
		// implement your test here
	})
})
