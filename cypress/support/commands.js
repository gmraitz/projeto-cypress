// Login via interface web
Cypress.Commands.add('loginViaUI', (email, senha) => {
  cy.visit('/customer/account/login/');
  cy.get('#email').type(email);
  cy.get('#pass').type(senha);
  cy.get('#send2').click();
});

// Adiciona o primeiro produto da home ao carrinho
Cypress.Commands.add('addFirstProductToCart', () => {
  cy.visit('/');
  cy.get('.product-item').first().find('a.product-item-link').click();
  cy.get('#product-addtocart-button').click();
  cy.get('.message-success').should('contain', 'You added');
});

// Abre mini carrinho e navega para página do carrinho
Cypress.Commands.add('openMiniCartAndGoToCart', () => {
  cy.get('a.showcart').click();
  cy.get('.showcart-footer a.action.viewcart').click();
});

// Remove todos os itens do carrinho
Cypress.Commands.add('clearCart', () => {
  cy.visit('/checkout/cart');
  cy.get('.cart-container').then(($cart) => {
    if ($cart.find('.action.delete').length > 0) {
      cy.get('.action.delete').each(($btn) => {
        cy.wrap($btn).click();
      });
    }
  });
});