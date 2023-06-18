describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    cy.get('h2').contains('Restless is the heart until it rests in the');
  });
});
