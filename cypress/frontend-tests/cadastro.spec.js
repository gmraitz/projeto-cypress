describe('Cadastro de novo usuário - Magento', () => {
  it('Deve preencher e submeter o formulário com sucesso', () => {
    // Visita a página de criação de conta
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');

    // Gera dados dinâmicos para evitar conflito de e-mails já usados
    const timestamp = Date.now();
    const firstName = 'João';
    const lastName = 'Teste';
    const email = `usuario${timestamp}@teste.com`;
    const password = 'Senha@123456';

    // Preenche o formulário de cadastro
    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);

    // Clica no botão para criar conta
    cy.get('button[title="Create an Account"]').click();

    // Valida que o usuário foi redirecionado para a conta
    cy.url().should('include', '/customer/account');
    cy.contains(`Hello, ${firstName} ${lastName}!`).should('be.visible');
  });
});