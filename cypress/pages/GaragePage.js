class GaragePage {
  addCarButton() {
  return cy.contains('button', 'Add car')
}

  carBrandSelect() {
    return cy.get('#addCarBrand')
  }

  carModelSelect() {
    return cy.get('#addCarModel')
  }

  carMileageInput() {
    return cy.get('#addCarMileage')
  }

  addCarSubmitButton() {
    return cy.get('.modal').contains('button', 'Add')
  }

  carList() {
  return cy.get('.panel-page_cars')
}
}

module.exports = new GaragePage()