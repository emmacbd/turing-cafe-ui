describe("Form", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should allow user to input values into form', () => {
    cy.get('input[name="name"]')
        .type("Emma")
        .should('have.value', "Emma")
      .get('input[name="date"]')
        .type('2022-04-25')
        .should('have.value', '2022-04-25')
      .get('input[name="time"]')
        .type('03:30')
        .should('have.value', '03:30')
      .get('input[name="guests"]')
        .type(3)
        .should('have.value', 3)
  })

  it('Should allow user to create a new reservation', () => {
    cy.get('input[name="name"]')
        .type("Emma")
        .should('have.value', "Emma")
      .get('input[name="date"]')
        .type('2022-04-25')
        .should('have.value', '2022-04-25')
      .get('input[name="time"]')
        .type('03:30')
        .should('have.value', '03:30')
      .get('input[name="guests"]')
        .type(3)
        .should('have.value', 3)
      cy.get('.resy-button')
        .click()
      cy.get('.resy-box').children().should('have.length', 10)
  })
})
