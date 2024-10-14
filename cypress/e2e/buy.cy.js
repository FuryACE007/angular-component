describe('Buy Trade', () => {
  beforeEach(() => {
    cy.visit('/buy')
    cy.get('form', { timeout: 10000 }).should('be.visible') // Increase timeout
  })

  it('should load the buy trade form', () => {
    cy.get('form').should('be.visible')
  })

  it('should show an error for invalid target price', () => {
    cy.get('input[formControlName="instrumentId"]').type('AAPL')
    cy.get('input[formControlName="quantity"]').type('10')
    cy.get('input[formControlName="targetPrice"]').type('1000') // Assuming 1000 is invalid
    cy.get('mat-error').should('contain', 'Invalid target price')
  })

  it('should submit the form with valid data', () => {
    cy.get('input[formControlName="instrumentId"]').type('AAPL')
    cy.get('input[formControlName="quantity"]').type('10')
    cy.get('input[formControlName="targetPrice"]').type('150') // Assuming 150 is valid
    cy.get('button[type="submit"]').click()
    cy.get('.mat-snack-bar-container').should(
      'contain',
      'Trade executed successfully',
    )
  })
})
