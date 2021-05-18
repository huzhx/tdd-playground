describe('Hello world test', () => {
  it('does not do much!', () => {
    expect(true).to.equal(true);
  });
  it('clicks the link "type"', () => {
    cy.visit(Cypress.config().baseUrl);
    cy.contains('type').click();
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions');
    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com');
  });
});
