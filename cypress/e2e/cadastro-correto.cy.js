describe('Página de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('sharataraujo@gmail.com.br')
    cy.get('[data-test="fullName"]').type('Shara Thalya')
    cy.get('[data-test="registerUserName"]').type('sharat')
    cy.get('[data-test="registerPassword"]').type('Eglajef123')
    cy.contains('button', 'Register').click();
  })
})