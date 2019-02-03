describe('Search', () => {
  beforeEach(() => {
    visitPage()
  })

  it('A User searches for "notebooks"', () => {
    const input = cy.get('form input')
    input.type('notebooks')
    input.type('{enter}')
    cy.wait(2000)
  })

  it('A User searches for "notebooks", then searches for "mouses"', () => {
    const input = cy.get('form input')
    input.type('mouses')
    input.type('{enter}')
    cy.wait(2000)
  })

  it('A User searches for "apple ipod", then clicks the first result', () => {
    const input = cy.get('form input')
    input.type('apple ipod')
    input.type('{enter}')
    const firstResult = cy.get('div[qa="product-item-1"]')
    firstResult.click()
    cy.wait(2000)
  })
})

const visitPage = () => {
  cy.visit('http://localhost:3000')
}
