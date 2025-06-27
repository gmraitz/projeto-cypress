describe('Checkout Cart Page', () => {
  before(() => {
    cy.visit('/');
    cy.get('.product-item').first().find('a.product-item-link').click();
    cy.get('#product-addtocart-button').click();
    cy.get('a.showcart').click();
    cy.get('.showcart-footer a.action.viewcart').click();
  });

  it('Deve listar produtos no carrinho', () => {
    cy.get('.cart-container').should('exist');
    cy.get('.cart.item').should('have.length.gte', 1);
  });

  it('Deve atualizar a quantidade do produto', () => {
    cy.get('input.input-text.qty').first().clear().type('2');
    cy.get('button.update').click();
    cy.get('.message-success').should('contain', 'updated');
  });
});