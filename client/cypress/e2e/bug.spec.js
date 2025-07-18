describe('Bug Tracker', () => {
  it('Can report a bug', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[placeholder="Bug Title"]').type('Crash on save');
    cy.get('textarea').type('App crashes when saving a note');
    cy.contains('Report Bug').click();
    cy.contains('Crash on save');
  });
});
