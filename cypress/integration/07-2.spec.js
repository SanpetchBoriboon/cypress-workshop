describe('07-2', function() {
	before(function() {
		//? 🐨 https://docs.cypress.io/api/commands/exec.html#Syntax

		// implement your test here
		cy.exec('npm run db:destroy && npm run db:migrate')
	})

	beforeEach(function() {
		cy.visit('http://18.139.84.211:4100/login')
		cy.fixture('userdata/user.json').as('user01')
		cy.fixture('userdata/user02.json').as('user02')
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
		// cy.fixture('userdata/user.json').then(function(user) {
		// 	cy.get('[data-test=email]').type(user.email)
		// 	cy.get('[data-test=password]').type(user.password + '{enter}')
		// })

		// multiple fixture
		cy.get('[data-test=email]').type(this.user01.email)
		cy.get('[data-test=password]').type(this.user02.password + '{enter}')
	})
})
