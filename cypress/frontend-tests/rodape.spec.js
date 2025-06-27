describe('Footer e Links Sociais', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve conter links sociais no footer', () => {
    cy.get('footer').should('contain', 'Twitter');
    cy.get('footer').should('contain', 'Facebook');
    cy.get('footer').should('contain', 'Instagram');
  });

  it('Links do footer devem estar acessíveis', () => {
    cy.get('footer a').each(($el) => {
      const href = $el.prop('href');
      expect(href).to.match(/^https?:\/\//);
    });
  });
});