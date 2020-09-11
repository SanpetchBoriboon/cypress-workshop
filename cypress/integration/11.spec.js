describe('11', function() {
	it('should have 1 or more articles', function() {
		//? 🐨 https://docs.cypress.io/api/commands/wait.html#Syntax
		//? 🐨 https://docs.cypress.io/api/commands/route.html#Syntax

		// implement your test here

		cy.server()
		cy.route('/api/articles?limit=10&offset=0').as('getArticles')
		cy.route('/api/tags').as('getTags')
		cy.visit('http://18.139.84.211:4100/')
		cy.wait('@getTags', { timeout: 2000 })
		cy.wait('@getArticles', { timeout: 10000 })
		cy.get('.article-preview').should('have.length.of.at.most', 10)
	})
})
