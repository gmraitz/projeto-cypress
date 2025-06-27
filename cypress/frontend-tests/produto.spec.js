describe('Product Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.product-item').first().find('a.product-item-link').click();
  });

  it('Deve mostrar informações básicas do produto', () => {
    cy.get('.page-title').should('exist');
    cy.get('.price').should('exist');
    cy.get('#product-addtocart-button').should('exist').and('be.visible');
  });

  it('Deve adicionar produto ao carrinho', () => {
    cy.get('#product-addtocart-button').click();
    cy.get('.message-success').should('contain', 'You added');
  });
});