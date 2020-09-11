describe('14', function() {
	it('should be able to edit article', function() {
		// implement your test here
		cy.server()
		cy.route('POST', '/api/users/login').as('loginRoute')
		cy.route('POST', '/api/articles').as('createArticleRoute')
		cy.route('PUT', '/api/articles/*').as('editArticleRoute')

		cy.visit('/login')
		cy.fixture('userdata/user.json').then(function(user) {
			cy.get('[data-test=email]').type(user.email)
			cy.get('[data-test=password]').type(`${user.password}{enter}`)
		})

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
		cy.location('pathname').should('contain', 'helloworld')

		cy.get('[data-test=edit-article-button]')
			.contains(/Edit Article/i)
			.click()
		cy.get('[data-test=title]')
			.clear()
			.type('Hello World !!!!!!!!!!')
		cy.get('[data-test=description]')
			.clear()
			.type('Hello World !!!')
		cy.get('[data-test=content]')
			.clear()
			.type('Hello World !!')
		cy.get('[data-test=submit-article]').click()

		cy.wait('@editArticleRoute')
		cy.get('h1').not('HelloWorld')
		cy.get('h1').contains('Hello World !!!!!!!!!!')
	})

	it('should be able to delete article', function() {
		// implement your test here
		cy.server()
		cy.route('POST', '/api/users/login').as('loginRoute')
		cy.route('POST', '/api/articles').as('createArticleRoute')
		cy.route('DELETE', '/api/articles/*').as('deleteArticleRoute')

		cy.visit('http://18.139.84.211:4100/login')
		cy.fixture('userdata/user.json').then(function(user) {
			cy.get('[data-test=email]').type(user.email)
			cy.get('[data-test=password]').type(`${user.password}{enter}`)
		})

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
		cy.get('[data-test=delete-article-button]').click()

		cy.wait('@deleteArticleRoute')
		cy.get('@deleteArticleRoute').should(function(response) {
			expect(response.status).to.be.eq(204)
		})
	})
})
