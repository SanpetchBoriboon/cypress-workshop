describe('04', function() {
	it('should greet with `Sign In`', function() {
		// implement your test here
		cy.visit('http://18.139.84.211:4100/login')
		cy.get('h1').contains(/sign in/i)
	})

	it('should have a link that navigate to login', function() {
		// implement your test here
		cy.visit('http://18.139.84.211:4100/login')
		cy.get('a')
			.contains(/need an account/i)
			.should('have.attr', 'href', '/register')
	})

	it('should sign me in successfully', function() {
		// implement your test here
		cy.visit('http://18.139.84.211:4100/login')
		cy.get('[data-test=email]').type('sanpetch.boriboon@gmail.com')
		cy.get('[data-test=password]').type('plokij123654{enter}')
	})
})
