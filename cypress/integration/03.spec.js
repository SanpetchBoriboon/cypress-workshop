describe('03', function() {
	it('should sign me up successfully', function() {
		//? 🐨 https://docs.cypress.io/api/commands/get.html#Syntax
		//? 🐨 https://docs.cypress.io/api/commands/eq.html#Syntax
		//? 🐨 https://docs.cypress.io/api/commands/type.html#Syntax
		// implement your test here
		cy.visit('http://18.139.84.211:4100/register')
		cy.get('#username').type('sanpetch')
		cy.get('#email').type('sanpetch.boriboon@gmail.com')
		cy.get('#password').type('plokij123654{enter}')
	})
})
