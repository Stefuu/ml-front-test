describe('Direct url acess', () => {
  it('A User visits a product search query url directly', () => {
    cy.visit('http://localhost:3000/items?q=notebook')
    cy.wait(2000)
    expect(cy.get('div[data-testid="product-item-1"]')).to.not.be.null
  })
  
  it('A User visits a product detail url directly', () => {
    cy.visit('http://localhost:3000/items/MLA688402084')
    cy.wait(2000)
    expect(cy.get('button[data-testid="button-buy"]')).to.not.be.null
  })
})
