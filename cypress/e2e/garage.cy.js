const garagePage = require('../pages/GaragePage')
const expensesPage = require('../pages/ExpensesPage')

describe('Garage and Expenses', () => {

  beforeEach(() => {
    cy.visit('/', {
      auth: {
        username: Cypress.env('guestUsername'),
        password: Cypress.env('guestPassword'),
      },
    })
    cy.login(Cypress.env('email'), Cypress.env('password'))
  })

  it('should add a car to garage', () => {
    garagePage.addCarButton().click()
    garagePage.carBrandSelect().select('Audi')
    garagePage.carModelSelect().select('TT')
    garagePage.carMileageInput().type('100')
    garagePage.addCarSubmitButton().click()
    garagePage.carList().should('be.visible')
  })

  it('should add fuel expense to a car', () => {
    cy.contains('Fuel expenses').click()
    expensesPage.addExpenseButton().click()
    expensesPage.mileageInput().type('200')
    expensesPage.litersInput().type('10')
    expensesPage.totalCostInput().type('500')
    expensesPage.submitButton().click()
    cy.get('.panel-page').should('be.visible')
  })

})