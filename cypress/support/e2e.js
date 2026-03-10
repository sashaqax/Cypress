import 'cypress-axe'

Cypress.on('uncaught:exception', (err) => {

  if (err.message.includes("Unexpected token '*'")) {
    return false
  }

})