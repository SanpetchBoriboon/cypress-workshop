describe('12', function() {
	it('should create article correctly', function() {
		// implement your test here
		cy.server()
		cy.route('POST', '/api/users/login').as('loginRoute')
		cy.route('POST', '/api/articles').as('createArticleRoute')

		// login
		cy.visit('http://18.139.84.211:4100/login')
		cy.get('h1').contains(/sign in/i)
		cy.get('a')
			.contains(/need an account/i)
			.should('have.attr', 'href', '/register')
		cy.fixture('userdata/user.json').then(function(user) {
			cy.get('[data-test=email]').type(user.email)
			cy.get('[data-test=password]').type(`${user.password}{enter}`)
		})
		// wait for completed to login
		cy.wait('@loginRoute')

		cy.get('.nav-item')
			.contains(/new post/i)
			.click()
		cy.get('[data-test=title]').type('HelloWorld')
		cy.get('[data-test=description]').type('Hello World')
		cy.get('[data-test=content]').type('Hello World')
		cy.get('[data-test=tags]').type('Hello World{enter}')
		cy.get('[data-test=submit-article]').click()

		cy.wait('@createArticleRoute')
		// check title
		cy.location('pathname').should('contain', 'helloworld')
	})
})
