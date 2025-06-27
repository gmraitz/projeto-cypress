describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/customer/account/login/');
  });

  it('Deve carregar página de login', () => {
    cy.get('form#login-form').should('exist');
  });

  it('Deve validar erro com dados inválidos', () => {
    cy.get('#email').type('emailinvalido@teste.com');
    cy.get('#pass').type('senhaerrada');
    cy.get('button#send2').click();
    cy.get('.message-error').should('contain', 'Invalid login or password');
  });

  // Se quiser da pra implementar login válido via comando customizado
});