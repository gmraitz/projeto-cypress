// Evita que erros da aplicação quebrem o teste
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
