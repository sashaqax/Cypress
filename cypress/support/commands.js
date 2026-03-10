// cypress/support/commands.js

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    options.log = false
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }
  return originalFn(element, text, options)
})

Cypress.Commands.add('login', (email, password) => {
  cy.get('.header_signin').click()
  cy.get('input[name="email"]').type(email)
  cy.get('input[name="password"]').type(password, { sensitive: true })
  cy.get('.modal').contains('button', 'Login').click()
})
