describe('Create Account Page', () => {
  beforeEach(() => {
    cy.visit('/customer/account/create/');
  });

  it('Deve carregar página de criação de conta', () => {
    cy.get('form#form-validate').should('exist');
  });

  it('Deve validar campos obrigatórios', () => {
    cy.get('button#form-validate').click();
    cy.get('.mage-error').should('exist');
  });
});