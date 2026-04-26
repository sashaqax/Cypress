class ExpensesPage {
  addExpenseButton() {
    return cy.get('button.btn-primary')
  }

  mileageInput() {
    return cy.get('#addExpenseMileage')
  }

  litersInput() {
    return cy.get('#addExpenseLiters')
  }

  totalCostInput() {
    return cy.get('#addExpenseTotalCost')
  }

  submitButton() {
    return cy.get('.modal').contains('button', 'Add')
  }
}

module.exports = new ExpensesPage()