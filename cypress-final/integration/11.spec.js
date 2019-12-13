describe('/', function() {
  it("should have 1 or more articles", function() {
    cy.server();
    cy.route("/api/articles?limit=10&offset=0").as("articles");

    cy.visit("/");

    cy.wait("@articles");

    //TODO: check weather article is render correctyl
  });
});
