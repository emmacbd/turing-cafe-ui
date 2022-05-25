describe("Homepage", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should display existing reservations to user',() => {
    cy.get('.resy-box').children().should('have.length', 9)
    cy.get('.resy-box').children().first().should('include.text', 'Christie')
  })


})
