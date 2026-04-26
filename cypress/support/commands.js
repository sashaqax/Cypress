// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

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



Cypress.Commands.add('addExpenseViaApi', (carId, cookieString) => {
  cy.request({
    method: 'POST',
    url: '/api/expenses',
    headers: { Cookie: cookieString },
    body: {
      carId: carId,
      reportedAt: new Date().toISOString().split('T')[0],
      mileage: 200,
      liters: 10,
      totalCost: 500,
    },
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.data).to.have.property('id')
    expect(response.body.data.carId).to.eq(carId)
    expect(response.body.data.liters).to.eq(10)
    expect(response.body.data.totalCost).to.eq(500)
  })
})