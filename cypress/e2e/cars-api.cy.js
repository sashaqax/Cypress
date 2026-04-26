const garagePage = require('../pages/GaragePage')

describe('Cars - intercept and API', () => {

  beforeEach(() => {
    cy.visit('/', {
      auth: {
        username: Cypress.env('guestUsername'),
        password: Cypress.env('guestPassword'),
      },
    })
    cy.login(Cypress.env('email'), Cypress.env('password'))
  })

  it('should create a car via UI, validate via API and add expense', () => {
    // 1. Перехоплюємо запит створення машини
    cy.intercept('POST', '/api/cars').as('createCar')

    garagePage.addCarButton().click()
    garagePage.carBrandSelect().select('BMW')
    garagePage.carModelSelect().select('X5')
    garagePage.carMileageInput().type('50')
    garagePage.addCarSubmitButton().click()

    // Валідуємо статус-код та зберігаємо id
    cy.wait('@createCar').then((interception) => {
      expect(interception.response.statusCode).to.eq(201)
      const carId = interception.response.body.data.id
      const mileage = interception.response.body.data.initialMileage

      // 2. GET /api/cars — валідуємо що машина є в списку
      cy.getCookies().then((cookies) => {
        const cookieString = cookies.map(c => `${c.name}=${c.value}`).join('; ')

        cy.request({
          method: 'GET',
          url: '/api/cars',
          headers: { Cookie: cookieString },
        }).then((response) => {
          expect(response.status).to.eq(200)
          const car = response.body.data.find(c => c.id === carId)
          expect(car).to.exist
          expect(car.brand).to.eq('BMW')
          expect(car.model).to.eq('X5')

          // 3. Створюємо expense через API
          cy.addExpenseViaApi(carId, cookieString)
        })
      })
    })
  })

  // 4. Валідація expense через UI
  it('should validate expense in UI', () => {
    cy.contains('Fuel expenses').click()
    cy.get('.panel-page').should('be.visible')
    cy.get('table, .expenses-list, [class*="expense"]').should('exist')
  })

})