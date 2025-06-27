describe('Home Page', () => {
  it('Deve carregar a home corretamente', () => {
    cy.visit('/');
    cy.title().should('include', 'Home Page');
    cy.get('header').should('exist');
    cy.get('.block-content > .products-grid').should('exist'); // grid de produtos
  });

  it('Deve navegar para a página de um produto ao clicar', () => {
    cy.get('.product-item').first().find('a.product-item-link').click();
    cy.url().should('include', '/product/');
    cy.get('.product-info-main').should('exist');
  });
});