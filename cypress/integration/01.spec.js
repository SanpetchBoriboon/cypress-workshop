describe('/register', function() {
	it('should greet with `Sign Up`', function() {
		//? 🐨 https://docs.cypress.io/api/commands/get.html#Syntax
		cy.visit('http://18.139.84.211:4100/register')
		cy.get('h1').contains('Sign Up')
		// implement your test here
	})
})
