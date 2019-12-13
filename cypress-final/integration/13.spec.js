describe('/:title-slug', function() {
  it("should be able to edit article", function() {
    cy.server();

    cy.login();
    cy.createArticle();

    cy.get("[data-test=edit-article-btn]").click();

    cy.get("[data-test=title]").clear().type("New title");
    cy.get("[data-test=description]").clear().type("New description");
    cy.get("[data-test=content]").clear().type("This is new content");
    cy.get("[data-test=tags]").clear().type("tag4{enter}tag5{enter}tag6{enter}")
    cy.get("[data-test=submit-article]").click();
  });
});
