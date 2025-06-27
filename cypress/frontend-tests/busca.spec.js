describe('Search Functionality', () => {
  it('Deve realizar busca e mostrar resultados', () => {
    cy.visit('/');
    cy.get('input#search').type('shirt{enter}');
    cy.url().should('include', 'catalogsearch/result');
    cy.get('.products.wrapper').should('exist');
    cy.get('.product-item').its('length').should('be.gte', 1);
  });
});