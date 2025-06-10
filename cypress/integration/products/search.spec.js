describe('Product Search', () => {
  it('should display results when searching for a valid product', () => {
    cy.visit('/');
    cy.get('input[placeholder="Search"]').type('headphones{enter}');
    cy.get('.product-list').should('contain', 'headphones');
  });

  it('should show no results message for invalid product', () => {
    cy.visit('/');
    cy.get('input[placeholder="Search"]').type('invalidProductXYZ{enter}');
    cy.get('.no-results').should('contain', 'No products found');
  });
});
