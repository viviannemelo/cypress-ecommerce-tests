describe('Negative Login Tests', () => {
  it('should not login with wrong password', () => {
    cy.visit('/login');
    cy.get('input[name=email]').type('user@example.com');
    cy.get('input[name=password]').type('wrongPassword');
    cy.get('button[type=submit]').click();
    cy.get('.error-message').should('contain', 'Invalid credentials');
  });

  it('should show validation errors when fields are empty', () => {
    cy.visit('/login');
    cy.get('button[type=submit]').click();
    cy.get('input[name=email]:invalid').should('exist');
    cy.get('input[name=password]:invalid').should('exist');
  });
});
