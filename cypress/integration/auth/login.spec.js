describe('Login', () => {
  it('should log in with valid credentials', () => {
    cy.login('user@example.com', 'Password123!');
    cy.get('.user-profile').should('contain', 'Olá, User');
  });
});
