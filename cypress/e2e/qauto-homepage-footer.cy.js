/// <reference types="cypress" />

describe('HW 19.1 - Main page and footer check', () => {

  beforeEach(() => {

    cy.visit('/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    })

    // Ждём загрузку главной страницы
    cy.contains('button', 'Sign up', { timeout: 15000 })
      .should('be.visible')

  })

  it('Checks hero section elements', () => {

    
  // проверка заголовка
    cy.contains('Do more!')
      .should('be.visible')

    // Проверка кнопки Sign up
    cy.contains('button', 'Sign up')
      .should('be.visible')
      .and('be.enabled')

  })

  it('Checks footer elements', () => {

    cy.get('footer')
      .scrollIntoView()
      .should('be.visible')

    // Проверка соцсетей
    cy.get('a[href*="facebook"]')
      .should('be.visible')

    cy.get('a[href*="youtube"]')
      .should('be.visible')

    cy.get('a[href*="instagram"]')
      .should('be.visible')

    cy.get('a[href*="linkedin"]')
      .should('be.visible')

    // Проверка сайта
    cy.contains('a', 'ithillel.ua')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'ithillel.ua')

    // Проверка email
    cy.contains('support@ithillel.ua')
      .should('be.visible')

  })

})