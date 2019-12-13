describe('/:title-slug', function() {
  beforeEach(function() {
    cy.server();

    cy.login();
    cy.createArticle();
  });

  it("should be able to edit article", function() {
    cy.get("[data-test=edit-article-btn]").click();

    cy.get("[data-test=title]").clear().type("New title");
    cy.get("[data-test=description]").clear().type("New description");
    cy.get("[data-test=content]").clear().type("This is new content");
    cy.get("[data-test=tags]").clear().type("tag4{enter}tag5{enter}tag6{enter}")
    cy.get("[data-test=submit-article]").click();
  });

  it("should be able to delete article", function() {
    cy.get("[data-test=delete-article-btn]").click();

    //TODO: check weather article is deleted
  });
});
