describe('Direct url acess', () => {
  it('A User visits a product search query url directly', () => {
    cy.visit('http://localhost:3000/items?q=notebook')
    cy.wait(2000)
  })
  
  it('A User visits a product detail url directly', () => {
    cy.visit('http://localhost:3000/items/MLA688402084')
    cy.wait(2000)
  })
})
