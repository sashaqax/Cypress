// cypress/e2e/registration.cy.js

const uniqueEmail = `sashakaroch+${Date.now()}@gmail.com`

describe('Registration', () => {

  beforeEach(() => {
  cy.visit('/', {
    auth: {
      username: 'guest',
      password: 'welcome2qauto',
    },
  })
  cy.get('button.btn-primary').click()
  cy.get('.modal').should('be.visible')
 })

  it('should show error if Name is empty', () => {
    cy.get('input[name="name"]').focus().blur()
    cy.get('input[name="name"]').should('have.class', 'is-invalid')
  })

  it('should show error if Name is less than 2 characters', () => {
    cy.get('input[name="name"]').type('А').blur()
    cy.get('input[name="name"]').should('have.class', 'is-invalid')
  })

  it('should show error if Name is more than 20 characters', () => {
    cy.get('input[name="name"]').type('А'.repeat(21)).blur()
    cy.get('input[name="name"]').should('have.class', 'is-invalid')
  })

  it('should show error if Last Name is empty', () => {
    cy.get('input[name="lastName"]').focus().blur()
    cy.get('input[name="lastName"]').should('have.class', 'is-invalid')
  })

  it('should show error if Email is invalid', () => {
    cy.get('input[name="email"]').type('notvalid').blur()
    cy.get('input[name="email"]').should('have.class', 'is-invalid')
  })

  it('should show error if Password is too short', () => {
    cy.get('input[name="password"]').type('Ab1!', { sensitive: true }).blur()
    cy.get('input[name="password"]').should('have.class', 'is-invalid')
  })

  it('should show error if passwords do not match', () => {
    cy.get('input[name="password"]').type('Drift45@', { sensitive: true })
    cy.get('input[name="repeatPassword"]').type('Other999!', { sensitive: true }).blur()
    cy.get('input[name="repeatPassword"]').should('have.class', 'is-invalid')
  })

  it('should register successfully and open garage', () => {
    cy.get('input[name="name"]').type('Oleksandr')
    cy.get('input[name="lastName"]').type('Shcherbatiuk')
    cy.get('input[name="email"]').type(uniqueEmail)
    cy.get('input[name="password"]').type('Drift45@', { sensitive: true })
    cy.get('input[name="repeatPassword"]').type('Drift45@', { sensitive: true })
    cy.get('.modal').contains('button', 'Register').click()

    cy.url().should('include', '/garage')
  })

})

