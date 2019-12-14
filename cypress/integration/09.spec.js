describe("09", function() {
  before(function() {
    cy.exec("npm run db:destroy && npm run db:migrate")

    //? 🐨 https://docs.cypress.io/api/commands/as.html#Syntax 
  });

  beforeEach(function() {
    cy.visit("http://18.139.84.211:4100/register");
    cy.fixture("05.fixture").as("testUser")
  });

  it("should greet with `Sign Up`", function() {
    cy.get("h1").contains("Sign Up");
  });

  it("should have a link that navigate to /register", function() {
    cy.get("a").contains("Have an account?").should("have.attr", "href", "/login");
  });

  it("should sign me up successfully", function() {
    cy.get("[data-test=username]").type(this.testUser.username);
    cy.get("[data-test=email]").type(this.testUser.email);
    cy.get("[data-test=password]").type(this.testUser.password);
  });

  it("should show error message when send same information", function() {
    cy.server();
    cy.route({
      url: "/api/users",
      method: "post",
      status: 401,
      response: {
        error: {
          username: "has been already taken.",
          email: "has been already taken."
        }
      }
    });

    cy.fixture("05.fixture").then(function(user) {
      cy.get("[data-test=username]").type(user.username);
      cy.get("[data-test=email]").type(user.email);
      cy.get("[data-test=password]").type(user.password);
    })

    //TODO: check for email error messages
    //TODO: check for username error messages
  });

});
