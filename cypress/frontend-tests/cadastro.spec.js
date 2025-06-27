describe('Cadastro de novo usuário - Magento', () => {
  it('Deve preencher e submeter o formulário com sucesso', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');

    const timestamp = Date.now();
    const firstName = 'GuilhermeTeste';
    const lastName = 'RaitzTeste';
    const email = `guilhermeraitz${timestamp}@teste.com`;
    const password = 'Senha@123456';

    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);

    cy.get('button[title="Create an Account"]').click();

    // Verifica se a URL atual contém /customer/account
    cy.url().should('include', '/customer/account');

    // Verifica a existência da mensagem de confirmação na página
    cy.contains('Thank you for registering').should('be.visible');
  });
});