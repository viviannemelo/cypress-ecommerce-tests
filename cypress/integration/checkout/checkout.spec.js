describe('Checkout Flow', () => {
  it('should complete checkout with valid data', () => {
    cy.visit('/products');
    cy.get('.product-item').first().click();
    cy.get('button.add-to-cart').click();
    cy.visit('/cart');
    cy.get('button.checkout').click();
    cy.get('input[name=name]').type('Jane Doe');
    cy.get('input[name=email]').type('jane.doe@example.com');
    cy.get('input[name=address]').type('123 Main St');
    cy.get('button.submit-order').click();
    cy.get('.confirmation-message').should('contain', 'Thank you for your purchase');
  });
});
