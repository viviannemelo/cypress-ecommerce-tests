describe('Shopping Cart', () => {
  it('should add a product to the cart', () => {
    cy.visit('/products');
    cy.get('.product-item').first().click();
    cy.get('button.add-to-cart').click();
    cy.get('.cart-count').should('contain', '1');
  });

  it('should remove a product from the cart', () => {
    cy.visit('/cart');
    cy.get('.remove-item').first().click();
    cy.get('.cart-items').should('not.contain', '.cart-item');
  });
});
