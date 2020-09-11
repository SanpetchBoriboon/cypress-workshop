describe('05-2', function() {
	it('should greet with `Sign In`', function() {
		cy.visit('http://18.139.84.211:4100/login')
		cy.get('h1').contains('Sign In')
	})

	it('should have a link that navigate to login', function() {
		cy.visit('http://18.139.84.211:4100/login')
		cy.get('a')
			.contains('Need an account?')
			.should('have.attr', 'href', '/register')
	})

	it('should sign me up successfully', function() {
		cy.visit('http://18.139.84.211:4100/login')

		//? 🐨 https://docs.cypress.io/api/commands/fixture.html#Syntax

		// implement your test here
		cy.fixture('userdata/user.json').then(function(user) {
			cy.get('[data-test=email]').type(user.email)
			cy.get('[data-test=password]').type(user.password)
		})
	})
})
