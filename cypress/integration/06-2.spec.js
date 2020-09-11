describe('06-2', function() {
	beforeEach(function() {
		// implement your test here
		cy.visit('http://18.139.84.211:4100/login')
	})

	it('should greet with `Sign In`', function() {
		cy.get('h1').contains('Sign In')
	})

	it('should have a link that navigate to login', function() {
		cy.get('a')
			.contains('Need an account?')
			.should('have.attr', 'href', '/register')
	})

	it('should sign me up successfully', function() {
		cy.fixture('userdata/user.json').then(function(user) {
			cy.get('[data-test=email]').type(user.email)
			cy.get('[data-test=password]').type(user.password + '{enter}')
		})
	})
})
